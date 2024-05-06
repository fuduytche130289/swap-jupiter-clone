'use client'

import {useState} from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import './customDatePickerStyles.css';
import PaginatedItems from "@/component/table/paging";
import Checkbox from "@/component/form/component/checkbox";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Table(props: { isCheckBox: boolean }) {
    const [value, onChange] = useState<Value>([new Date(), new Date()]);
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <div>
            <h1 className="text-black">Table</h1>
            <div className="bg-[#f9f9f9]">
                <div className="shadow-2xl border p-[40px]">
                    {/*table header*/}
                    <div className="bg-white">
                        <div className="px-[28px] py-[20px] flex justify-between">
                            <div className="text-black">
                                <DateRangePicker clearIcon={null} format={'y-MM-dd'} onChange={onChange} value={value}/>
                            </div>
                            <button className="bg-black rounded-[6px]">
                                <p className="py-[14px] px-[26.5px]">EXPORT</p>
                            </button>
                        </div>
                    </div>
                    {/*end table header*/}
                    {/*table*/}
                    <table className="text-black w-full">
                        <thead className="text-[#999999] font-[600] text-[14px] leading-[16.71px]">
                        <tr className="bg-[#f9f9f9]">
                            {props.isCheckBox && (
                                <th className="py-[15px]">
                                    <Checkbox checked={checked} onChange={event => {
                                        setChecked(event.target.checked)
                                    }}/>
                                </th>
                            )}
                            <th rowSpan={2}>
                                <div className="border-r">
                                    <p className="py-[22px]">날짜</p>
                                </div>
                            </th>
                            <th className="pt-[15px] relative" colSpan={6}>
                                <p className="pb-[16.5px]">대분류1</p>
                                <div className="absolute w-[1px] h-[60.7px] bg-gray-200 right-0 top-[22px]"></div>
                            </th>
                            <th className="pt-[15px] relative" colSpan={6}>
                                <p className="pb-[16.5px]">대분류2</p>
                                <div className="absolute w-[1px] h-[60.7px] bg-gray-200 right-0 top-[22px]"></div>
                            </th>
                        </tr>
                        <tr className="text-center ">
                            <td>
                                <p className="pt-[16px] pb-[15px] ml-[20px] border-t">중분류1</p>
                            </td>
                            <td className=" ">
                                <p className="pt-[16px] pb-[15px] border-t">중분류1</p>
                            </td>
                            <td className="">
                                <p className="pt-[16px] pb-[15px] border-t">중분류1</p>
                            </td>
                            <td className="">
                                <p className="pt-[16px] pb-[15px] border-t">중분류1</p>
                            </td>
                            <td className="">
                                <p className="pt-[16px] pb-[15px] border-t">중분류1</p>
                            </td>
                            <td className=" ">
                                <p className="pt-[16px] pb-[15px] mr-[20px] border-t">중분류1</p>
                            </td>
                            <td>
                                <p className="pt-[16px] pb-[15px] ml-[20px] border-t">중분류1</p>
                            </td>
                            <td className=" ">
                                <p className="pt-[16px] pb-[15px] border-t">중분류1</p>
                            </td>
                            <td className="">
                                <p className="pt-[16px] pb-[15px] border-t">중분류1</p>
                            </td>
                            <td className="">
                                <p className="pt-[16px] pb-[15px] border-t">중분류1</p>
                            </td>
                            <td className="">
                                <p className="pt-[16px] pb-[15px] border-t">중분류1</p>
                            </td>
                            <td className=" ">
                                <p className="pt-[16px] pb-[15px] mr-[20px] border-t">중분류1</p>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-white text-center border-b">
                            {props.isCheckBox && (
                                <td className="py-[15px]" rowSpan={2}>
                                    <Checkbox checked={checked} onChange={event => {
                                        setChecked(event.target.checked)
                                    }}/>
                                </td>
                            )}
                            <td className="py-[20px]">2021-09-01</td>
                            <td className="py-[20px]">10</td>
                            <td className="py-[20px]">20</td>
                            <td className="py-[20px]">30</td>
                            <td className="py-[20px]">40</td>
                            <td className="py-[20px]">40</td>
                            <td className="py-[20px]">
                                <p className="mr-[20px]">
                                    40
                                </p>
                            </td>
                            <td className="py-[20px]">10</td>
                            <td className="py-[20px]">20</td>
                            <td className="py-[20px]">30</td>
                            <td className="py-[20px]">40</td>
                            <td className="py-[20px]">40</td>
                            <td className="py-[20px]">
                                <p className="mr-[20px]">
                                    40
                                </p>
                            </td>
                        </tr>
                        <tr className="bg-white text-center border-b">
                            <td className="py-[20px]">2021-09-02</td>
                            <td className="py-[20px]">10</td>
                            <td className="py-[20px]">20</td>
                            <td className="py-[20px]">30</td>
                            <td className="py-[20px]">40</td>
                            <td className="py-[20px]">40</td>
                            <td className="py-[20px]">
                                <p className="mr-[20px]">
                                    40
                                </p>
                            </td>
                            <td className="py-[20px]">10</td>
                            <td className="py-[20px]">20</td>
                            <td className="py-[20px]">30</td>
                            <td className="py-[20px]">40</td>
                            <td className="py-[20px]">40</td>
                            <td className="py-[20px]">
                                <p className="mr-[20px]">
                                    40
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    {/*end table*/}
                    {/*paging*/}
                    <div className="mt-[40px]">
                        <PaginatedItems itemsPerPage={4}/>
                    </div>
                    {/*end paging*/}
                </div>
            </div>
        </div>
    )
}
