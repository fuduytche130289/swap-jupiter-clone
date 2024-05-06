import "./assets/css/styles.css";
import Checkbox from "@/component/form/component/checkbox";
import React, {useState} from "react";

export default function TableSwap() {
    const iconArrowRight = require('./assets/img/icon_arrow_right.svg');
    const iconArrowUp = require('./assets/img/icon_arrow_up.svg');
    const iconDbArrowRight = require('./assets/img/icon_db_arrow_right.svg');
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <div className="bg-[#f9f9f9] w-full h-full text-black">
            <div className="p-[40px]">
                <div className="flex justify-end items-center gap-[16px]">
                    <p className="text-[14px] leading-[16.71px] texyarnt-black"><span className="font-[700]">관리자</span>님,
                        환영합니다</p>
                    <button className="bg-black rounded-[6px]">
                        <p className="text-white px-[21.5px] py-[10px]">로그아웃</p>
                    </button>
                </div>
                <div className="flex gap-[16px] items-center">
                    <p className="font-[700] text-[24px] leading-[28.64px] text-[#999999]">입점사</p>
                    <img src={iconArrowRight.default.src} alt="icon_arrow_right"/>
                    <p className="font-[700] text-[24px] leading-[28.64px] text-[#999999]">입점사 관리</p>
                    <img src={iconArrowRight.default.src} alt="icon_arrow_right"/>
                    <p className="font-[700] text-[24px] leading-[28.64px]">브랜드 노출 설정</p>
                </div>


                <div className="mt-[32px] text-black flex justify-between gap-[80px] w-full">
                    {/*table 1*/}
                    <div className="bg-white shadow-lg text-black w-[40%] max-h-[720px] overflow-y-auto">
                        <div className="p-[28px]">
                            <p className="text-[18px] font-[600] leading-[21.48px]">노출 브랜드 <span
                                className="text-[#999]">(0,000)</span></p>
                            <table className="w-full mt-[24px] ">
                                <thead className="text-[#999999] font-[600] text-[14px] leading-[16.71px] bg-[#f9f9f9]">
                                <tr>
                                    <th>
                                        <Checkbox checked={checked} onChange={event => {
                                            setChecked(event.target.checked)
                                        }}/>
                                    </th>
                                    <th>
                                        <p className="py-[15.5px]">순서</p>
                                    </th>
                                    <th>
                                        <p className="py-[15.5px]">브랜드명</p>
                                    </th>
                                    <th>
                                        <p className="py-[15.5px]">순서변경</p>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/*end table 1*/}
                    {/*button*/}
                    <div className="flex flex-col justify-center items-center gap-[16px]">
                        <button className="bg-white border border-[#999] rounded-[6px]">
                            <img className="py-[18px] px-[46px]" src={iconDbArrowRight.default.src}
                                 alt="iconDbArrowRight"/>
                        </button>
                        <button className="bg-white border border-[#999] rounded-[6px]">
                            <img className="py-[18px] px-[46px] rotate-[180deg]" src={iconDbArrowRight.default.src}
                                 alt="iconDbArrowRight"/>
                        </button>
                    </div>
                    {/*end button*/}
                    {/*table 2*/}
                    <div className="bg-white shadow-lg text-black w-[40%] max-h-[720px] overflow-y-auto">
                        <div className="p-[28px]">
                            <p className="text-[18px] font-[600] leading-[21.48px]">노출 브랜드 <span
                                className="text-[#999]">(0,000)</span></p>
                            <table className="w-full mt-[24px] ">
                                <thead className="text-[#999999] font-[600] text-[14px] leading-[16.71px] bg-[#f9f9f9]">
                                <tr>
                                    <th>
                                        <Checkbox checked={checked} onChange={event => {
                                            setChecked(event.target.checked)
                                        }}/>
                                    </th>
                                    <th>
                                        <p className="py-[15.5px]">순서</p>
                                    </th>
                                    <th>
                                        <p className="py-[15.5px]">브랜드명</p>
                                    </th>
                                    <th>
                                        <p className="py-[15.5px]">순서변경</p>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="text-[500] font-[14px] leading-[16.71px]">
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center">
                                            <Checkbox checked={checked} onChange={event => {
                                                setChecked(event.target.checked)
                                            }}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-[20.5px]"><p className="text-center">1</p></td>
                                    <td className="py-[20.5px]"><p className="text-center">나이키</p></td>
                                    <td className="py-[20.5px]">
                                        <div className="flex justify-center items-center gap-[4px]">
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px]" src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                            <button className="bg-[#f9f9f9] border border-[#999] rounded-[6px]">
                                                <img className="px-[10px] py-[12px] rotate-[180deg]"
                                                     src={iconArrowUp.default.src}
                                                     alt="icon_arrow_up"/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/*end table 2*/}
                </div>

                <div className="flex justify-end items-center gap-[12px] mt-[40px]">
                    <button className="bg-[#4A45D8] rounded-[6px]">
                        <p className="py-[14px] px-[41.5px] text-white">저장</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
