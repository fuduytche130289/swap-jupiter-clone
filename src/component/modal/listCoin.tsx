'use client';

import {useState} from "react";

export default function ListCoin(props: any) {
    const [activeCoin, setActiveCoin] = useState("So11111111111111111111111111111111111111112");

    function setAndCloseListCoin(coinAddress: string, coinLogoURI: string, coinSymbol: string) {
        setActiveCoin(coinAddress);
        props.getCoinDetails(coinAddress, coinLogoURI, coinSymbol);
        props.closeListCoin();
    }

    return (
        <div>
            <div
                className="fixed z-50 top-0 flex justify-center w-full h-full max-h-screen items-start bg-white/10 dark:bg-black/10">
                <div className="top-4 relative w-full lg:h-auto z-full mx-5 md:px-0 max-w-fit rounded-lg">
                    <div className="rounded-lg shadow-lg overflow-y-auto dark:bg-jupiter-dark">
                        <div style={{
                            height: '825px',
                            width: '90wh',
                            maxWidth: '448px',
                        }}
                             className="flex flex-col relative w-full h-full overflow-hidden text-left bg-v2-background rounded-lg">
                            <button className="flex justify-end pt-5 px-7"
                                    onClick={props.closeListCoin}>
                                X
                            </button>

                            <div className="mt-5" style={{flexGrow: 1}}>
                                <div className="">
                                    <div
                                        className="overflow-y-scroll mr-1 min-h-[12rem] px-5 webkit-scrollbar relative h-[735px] w-[446px] overflow-auto transform"
                                        style={{direction: "ltr"}}>
                                        <div>
                                            {props?.listCoin.map((coin: any, index: number) => (
                                                <div className="relative">
                                                    <div key={index}
                                                         onClick={() => setAndCloseListCoin(coin.address, coin.logoURI, coin.symbol)}
                                                         className="flex items-center justify-between py-4 cursor-pointer">
                                                        <div className="flex items-center">
                                                            <div
                                                                className="flex items-center justify-center w-10 h-10 bg-jupiter-dark rounded-full">
                                                                <img
                                                                    src={coin.logoURI} // replace with the actual property name for the coin image
                                                                    alt={coin.name} // replace with the actual property name for the coin name
                                                                    className="w-6 h-6"/>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div
                                                                    className="text-lg font-semibold text-white">{coin.symbol}</div>
                                                                <div className="text-sm text-white">{coin.name}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className={`cursor-pointer absolute bg-jupiter-gradient w-full h-full top-0 opacity-10 ${activeCoin == coin.address ? '' : 'hidden'}`}></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed top-0 left-0 bg-black/25 backdrop-blur-md w-full h-full animate-fade-in"
                 style={{zIndex: '20'}}></div>
        </div>
    );
}
