'use client';

import {Web3} from 'web3';
import {useEffect, useState} from 'react';

export default function Home() {
    const [connectedAccount, setConnectedAccount] = useState('null');
    const [count, setCount] = useState(0);
    // set a provider in the sepolia testnet using node rpc url

    const abi =
        [
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_approved",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "_tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "zombieId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "dna",
                        "type": "uint256"
                    }
                ],
                "name": "NewZombie",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "_tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_zombieId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_targetId",
                        "type": "uint256"
                    }
                ],
                "name": "attack",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_zombieId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_newDna",
                        "type": "uint256"
                    }
                ],
                "name": "changeDna",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_zombieId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "_newName",
                        "type": "string"
                    }
                ],
                "name": "changeName",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "_name",
                        "type": "string"
                    }
                ],
                "name": "createRandomZombie",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_zombieId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_kittyId",
                        "type": "uint256"
                    }
                ],
                "name": "feedOnKitty",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "getZombiesByOwner",
                "outputs": [
                    {
                        "internalType": "uint256[]",
                        "name": "",
                        "type": "uint256[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "isOwner",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_zombieId",
                        "type": "uint256"
                    }
                ],
                "name": "levelUp",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_address",
                        "type": "address"
                    }
                ],
                "name": "setKittyContractAddress",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_fee",
                        "type": "uint256"
                    }
                ],
                "name": "setLevelUpFee",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "withdraw",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "zombieToOwner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "zombies",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dna",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint32",
                        "name": "level",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint32",
                        "name": "readyTime",
                        "type": "uint32"
                    },
                    {
                        "internalType": "uint16",
                        "name": "winCount",
                        "type": "uint16"
                    },
                    {
                        "internalType": "uint16",
                        "name": "lossCount",
                        "type": "uint16"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "_tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "ownerOf",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_approved",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            }
        ];
    const address = "0x06D32C9dF24312A7AC63115a71eF7856306F58b2";
// create a new contract object, providing the ABI and address
    const [cryptoZombies, setCryptoZombies] = useState<any>(null);

    // const account = web3.eth.accounts.privateKeyToAccount('0xec3ce0b5435bbe8428c69d7655693ba0df1330454e3d2580af3d931adc1eb5cf');

    async function connectMetamask() {
        //check metamask is installed
        if (window.ethereum) {
            // instantiate Web3 with the injected provider
            const web3 = new Web3(window.ethereum);

            //request user to connect accounts (Metamask will prompt)
            await window.ethereum.request({method: 'eth_requestAccounts'});

            //get the connected accounts
            const accounts = await web3.eth.getAccounts();

            //show the first connected account in the react page
            setConnectedAccount(accounts[0]);
            setCryptoZombies(new web3.eth.Contract(abi, address))
        } else {
            alert('Please download metamask');
        }
    }

    function createRandomZombie() {
        // @ts-ignore
        cryptoZombies.methods.createRandomZombie("Zombie").send({from: connectedAccount, gas: 3000000})
            .on("receipt", function (receipt) {
                console.log("Successfully created a zombie!");
            })
            .on("error", function (error) {
                console.log(error);
            });
    }

    function listZombie() {
        cryptoZombies.methods.zombies(0).call().then(function (res: any) {
            console.log(res);
        });
    }

    // async function getCount() {
    //     // @ts-ignore
    //     cryptoZombies.methods.getCount()
    //         .call()
    //         .then(function (res) {
    //             setCount(Number(res));
    //             console.log("The number is now: " + res);
    //         });
    // }
    //
    // async function increment() {
    //     // @ts-ignore
    //     const res = await cryptoZombies.methods.increment()
    //         .send({from: connectedAccount, gas: 3000000})
    //         .on("receipt", function (receipt) {
    //             console.log("Successfully incremented!");
    //             // After the increment transaction has been mined, call getCount
    //             cryptoZombies.methods.getCount()
    //                 .call()
    //                 .then(function (res) {
    //                     // setCount(Number(res));
    //                     console.log("The count is now: " + res);
    //                 });
    //         })
    //         .on("error", function (error) {
    //             console.log(error);
    //         });
    //     console.log(res)
    // }
    //
    // async function decrement() {
    //     // @ts-ignore
    //     const res = await cryptoZombies.methods.decrement()
    //         .send({from: connectedAccount, gas: 3000000})
    //         .on("receipt", function (receipt) {
    //             console.log("Successfully decremented!");
    //             // After the decrement transaction has been mined, call getCount
    //             cryptoZombies.methods.getCount()
    //                 .call()
    //                 .then(function (res) {
    //                     setCount(Number(res));
    //                     console.log("The count is now: " + res);
    //                 });
    //         })
    //         .on("error", function (error) {
    //             console.log(error);
    //         });
    //     console.log(res)
    // }

    // @ts-ignore
    return (
        <div className="bg-white text-black">
            {/* Button to trigger Metamask connection */}
            <button onClick={() => connectMetamask()}>Connect to Metamask</button>

            {/* Display the connected account */}
            <h2>{connectedAccount}</h2>
            <h2 className="text-black">{count}</h2>
            {/*<div className="flex flex-col gap-5">*/}
            {/*    <button onClick={() => getCount()}>Get Count</button>*/}
            {/*    <button onClick={() => increment()}>Increment</button>*/}
            {/*    <button onClick={() => decrement()}>Decrement</button>*/}
            {/*</div>*/}
            <div className="flex flex-col gap-5">
                <button onClick={() => createRandomZombie()}>dsa</button>
                <button onClick={() => listZombie()}>list</button>
            </div>


        </div>
    );
}
