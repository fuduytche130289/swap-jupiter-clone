'use client';

import {Web3} from 'web3';
import {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import iconCheck from './iconCheck.svg';

export default function Home() {
    const [connectedAccount, setConnectedAccount] = useState('null');
    const name = useRef(null);
    const zombieName = useRef(null);
    const [success, setSuccess] = useState('')
    const [informationOfZombie, setInformationOfZombie] = useState(null)
    // set a provider in the sepolia testnet using node rpc url
    const abi = [
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
            "inputs": [],
            "name": "getZombieId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
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
            "type": "function",
            "constant": true
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
            "type": "function",
            "constant": true
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
            "type": "function",
            "payable": true
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
            "type": "function",
            "constant": true
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
            "type": "function",
            "constant": true
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
            "type": "function",
            "constant": true
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
            "type": "function",
            "constant": true
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
            "type": "function",
            "constant": true
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
            "type": "function",
            "payable": true
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
            "type": "function",
            "payable": true
        }
    ];
    // this is contract address of this abi
    const address = "0xCc302b6D0e5edA35e215744Aba93a999B1E9C49d";
    // create a new contract object, providing the ABI and address
    const [cryptoZombies, setCryptoZombies] = useState<any>(null);
    const [step1, setStep1] = useState(false);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);
    const [step5, setStep5] = useState(false);


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
            setStep1(true)
        } else {
            alert('Please download metamask');
        }
    }

    function createRandomZombie() {
        // @ts-ignore
        cryptoZombies.methods.createRandomZombie(zombieName.current.value).send({from: connectedAccount, gas: 3000000})
            .on("receipt", function (receipt) {
                console.log("Successfully created a zombie!");
                setSuccess('Successfully created a zombie!')
                setStep4(true)
            })
            .on("error", function (error) {
                console.log(error);
            });
    }

    function listZombie() {
        cryptoZombies.methods.zombies(0).call().then(function (res: any) {
            console.log(res);
            setInformationOfZombie(res)
            setStep5(true)
        });
    }

    function handleNameChange() {
        setStep2(true)
    }

    function handleZombieNameChange() {
        setStep3(true)
    }


    // @ts-ignore
    return (
        <div className="bg-white text-black h-screen">
            <div className="p-10 flex flex-col gap-10 justify-start">
                <div className='w-full'>
                    <h2 className='text-center font-bold text-[24px]'>Do 5 step to get information of your Zombie</h2>
                </div>
                <div className='flex justify-start items-center gap-10'>
                    <h2>Step 1</h2>
                    <button className="bg-blue-500 rounded-[6px] shadow-lg shadow-gray-400 w-[25%]"
                            onClick={() => connectMetamask()}>
                        <p className="p-3 font-bold text-white">Connect to Metamask</p>
                    </button>
                    <h2>{connectedAccount}</h2>
                    {step1 && <Image width={16} height={16} src={iconCheck} alt='iconCheck'/>}
                </div>
                {(step1) && (<div className='flex justify-start items-center gap-10'>
                    <h2>Step 2</h2>
                    <h2>Enter your name:</h2>
                    <input className='outline-none' ref={name} type="text" placeholder='name'
                           onChange={handleNameChange}/>
                    {step2 && <Image width={16} height={16} src={iconCheck} alt='iconCheck'/>}
                </div>)}
                {step2 && <div className='flex justify-start items-center gap-10'>
                    <h2>Step 3</h2>
                    <h2>Enter your zombie name:</h2>
                    <input className='outline-none' ref={zombieName} type="text" placeholder='zombieName'
                           onChange={handleZombieNameChange}/>
                    {step3 && <Image width={16} height={16} src={iconCheck} alt='iconCheck'/>}
                </div>}
                {step3 && <div className='flex justify-start items-center gap-10'>
                    <h2>Step 4</h2>
                    <button className="bg-blue-500 rounded-[6px] shadow-lg shadow-gray-400 w-[25%]"
                            onClick={() => createRandomZombie()}>
                        <p className='p-3 font-bold text-white'>Create Random Zombie</p>
                    </button>
                    <h2>{success}</h2>
                    {step4 && <Image width={16} height={16} src={iconCheck} alt='iconCheck'/>}
                </div>}
                {step4 && <div className='flex justify-start items-start gap-10'>
                    <h2>Step 5</h2>
                    <button className="bg-blue-500 rounded-[6px] shadow-lg shadow-gray-400 w-[25%]"
                            onClick={() => listZombie()}>
                        <p className='p-3 font-bold text-white'>Information of your Zombie</p>
                    </button>
                    <div className='flex flex-col p-2'>
                        {informationOfZombie && <div>
                            <h2>Name: {informationOfZombie.name}</h2>
                            <h2>DNA: {informationOfZombie.dna.toString()}</h2>
                            <h2>Level: {informationOfZombie.level.toString()}</h2>
                            <h2>Ready Time: {informationOfZombie.readyTime.toString()}</h2>
                            <h2>Win Count: {informationOfZombie.winCount.toString()}</h2>
                            <h2>Loss Count: {informationOfZombie.lossCount.toString()}</h2>
                        </div>
                        }
                    </div>
                    {step5 && <div className='h-[48px] flex justify-center items-center'>
                        <Image width={16} height={16} src={iconCheck} alt='iconCheck'/>
                    </div>}
                </div>}
            </div>
        </div>
    );
}
