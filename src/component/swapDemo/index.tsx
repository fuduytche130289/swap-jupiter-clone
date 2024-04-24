'use client';

import styles from './swap.module.css';
import {useWallet} from '@solana/wallet-adapter-react';
import {VersionedTransaction, Connection} from '@solana/web3.js';
import React, {useState, useEffect, useCallback} from 'react';

const ASSETS = [
    {name: 'SOL', mint: 'So11111111111111111111111111111111111111112', decimals: 9},
    {name: 'USDC', mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', decimals: 6},
    {name: 'BONK', mint: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263', decimals: 5},
    {name: 'WIF', mint: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm', decimals: 6},
];

const connection = new Connection(
    'https://devnet.helius-rpc.com/?api-key=1b14eecd-82ea-423e-9d3d-e7ee46149722'
);

const debounce = (func: { (currentAmount: any): Promise<void>; (arg0: any): void; }, wait: number | undefined) => {
    let timeout: string | number | NodeJS.Timeout | undefined;
    return (...args: any) => {
        const later = () => {
            clearTimeout(timeout);
            // @ts-ignore
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export default function Swap() {
    const [fromAsset, setFromAsset] = useState(ASSETS[0]);
    const [toAsset, setToAsset] = useState(ASSETS[1]);
    const [fromAmount, setFromAmount] = useState(0);
    const [toAmount, setToAmount] = useState(0);
    const [quoteResponse, setQuoteResponse] = useState(null);
    const wallet = useWallet();

    const handleAssetChange = (setter: (arg0: { name: string; mint: string; decimals: number; }) => void) => (event: {
        target: { value: string; };
    }) => {
        setter(ASSETS.find(asset => asset.name === event.target.value) || ASSETS[0]);
    };

    const handleFromValueChange = (event: { target: { value: any; }; }) => {
        setFromAmount(Number(event.target.value));
    };

    // @ts-ignore
    const getQuote = useCallback(
        debounce(async currentAmount => {
            if (isNaN(currentAmount) || currentAmount <= 0) {
                console.error('Invalid fromAmount value:', currentAmount);
                return;
            }

            const response = await fetch(
                `https://quote-api.jup.ag/v6/quote?inputMint=${fromAsset.mint}&outputMint=${toAsset.mint}&amount=${currentAmount * Math.pow(10, fromAsset.decimals)}&slippage=0.5`
            );
            const quote = await response.json();

            if (quote && quote.outAmount) {
                const outAmountNumber = Number(quote.outAmount) / Math.pow(10, toAsset.decimals);
                setToAmount(outAmountNumber);
            }

            setQuoteResponse(quote);
        }, 500),
        [fromAsset, toAsset]
    );

    useEffect(() => {
        getQuote(fromAmount);
    }, [fromAmount, getQuote]);


    async function signAndSendTransaction() {
        if (!wallet.connected || !wallet.signTransaction) {
            console.error(
                'Wallet is not connected or does not support signing transactions'
            );
            return;
        }

        // get serialized transactions for the swap
        const {swapTransaction} = await (
            await fetch('https://quote-api.jup.ag/v6/swap', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    quoteResponse,
                    userPublicKey: wallet.publicKey?.toString(),
                    wrapAndUnwrapSol: true,
                    // feeAccount is optional. Use if you want to charge a fee.  feeBps must have been passed in /quote API.
                    // feeAccount: "fee_account_public_key"
                }),
            })
        ).json();

        try {
            const swapTransactionBuf = Buffer.from(swapTransaction, 'base64');
            const transaction = VersionedTransaction.deserialize(swapTransactionBuf);
            const signedTransaction = await wallet.signTransaction(transaction);

            const rawTransaction = signedTransaction.serialize();
            const txid = await connection.sendRawTransaction(rawTransaction, {
                skipPreflight: true,
                maxRetries: 2,
            });

            const latestBlockHash = await connection.getLatestBlockhash();
            await connection.confirmTransaction({
                blockhash: latestBlockHash.blockhash,
                lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
                signature: txid
            }, 'confirmed');

            console.log(`https://solscan.io/tx/${txid}`);

        } catch (error) {
            console.error('Error signing or sending the transaction:', error);
        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.innerContainer}>
                <div className={styles.inputContainer}>
                    <div className={styles.labels}>You pay</div>
                    <input
                        type="number"
                        value={fromAmount}
                        onChange={handleFromValueChange}
                        className={styles.inputField}
                    />
                    <select
                        value={fromAsset.name}
                        onChange={handleAssetChange(setFromAsset)}
                        className={styles.selectField}
                    >
                        {ASSETS.map((asset) => (
                            <option key={asset.mint} value={asset.name}>
                                {asset.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.labels}>You receive</div>
                    <input
                        type="number"
                        value={toAmount}
                        // onChange={(e) => setToAmount(Number(e.target.value))}
                        className={styles.inputField}
                        readOnly
                    />
                    <select
                        value={toAsset.name}
                        onChange={handleAssetChange(setToAsset)}
                        className={styles.selectField}
                    >
                        {ASSETS.map((asset) => (
                            <option key={asset.mint} value={asset.name}>
                                {asset.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    onClick={signAndSendTransaction}
                    className={styles.button}
                    disabled={toAsset.mint === fromAsset.mint}
                >
                    Swap
                </button>
            </div>
        </div>
    );
}

/* Sample quote response

    {
      "inputMint": "So11111111111111111111111111111111111111112",
      "inAmount": "100000000",
      "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      "outAmount": "9998099",
      "otherAmountThreshold": "9948109",
      "swapMode": "ExactIn",
      "slippageBps": 50,
      "platformFee": null,
      "priceImpactPct": "0.000146888216121999999999995",
      "routePlan": [
        {
          "swapInfo": {
            "ammKey": "HcoJqG325TTifs6jyWvRJ9ET4pDu12Xrt2EQKZGFmuKX",
            "label": "Whirlpool",
            "inputMint": "So11111111111111111111111111111111111111112",
            "outputMint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
            "inAmount": "100000000",
            "outAmount": "10003121",
            "feeAmount": "4",
            "feeMint": "So11111111111111111111111111111111111111112"
          },
          "percent": 100
        },
        {
          "swapInfo": {
            "ammKey": "ARwi1S4DaiTG5DX7S4M4ZsrXqpMD1MrTmbu9ue2tpmEq",
            "label": "Meteora DLMM",
            "inputMint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
            "outputMint": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            "inAmount": "10003121",
            "outAmount": "9998099",
            "feeAmount": "1022",
            "feeMint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
          },
          "percent": 100
        }
      ],
      "contextSlot": 242289509,
      "timeTaken": 0.002764025
    }
    */
