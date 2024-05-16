import React, {useEffect, useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form"
import "./assets/css/style.css"
import RadioButton from "@/component/form/component/radio";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import './assets/css/customDatePickerStyles.css';
import CustomDropdown from './component/dropdown';

const iconArrowRight = require('./assets/img/icon_arrow_right.svg');
const iconDownload = require('./assets/img/icon_download.svg');
const example = require('./assets/img/example.svg');

type Inputs = {
    example: string
    exampleRequired: string
}

const options = [
    {value: 'option1', label: 'Option 1'},
    {value: 'option2', label: 'Option 2'},
    {value: 'option3', label: 'Option 3'},
    {value: 'option4', label: 'Option 4'},
    // add more options here
];

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
export default function FormResponsive() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Inputs>()

    const [selectedValue, setSelectedValue] = useState('');
    const [dropdownValue, setDropdownValue] = useState('');
    const [value, onChange] = useState<Value>([new Date(), new Date()]);

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedValue(event.target.value);
    };
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it


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
                    <p className="font-[700] text-[24px] leading-[28.64px] text-[#999999]">입점사 리스트</p>
                    <img src={iconArrowRight.default.src} alt="icon_arrow_right"/>
                    <p className="font-[700] text-[24px] leading-[28.64px]">입점사 상세</p>
                </div>

                {/*form*/}
                <div className="mt-[32px] bg-white shadow-lg text-black">
                    <div className="p-[40px]">
                        <div>
                            <p className="font-[700] text-[18px] leading-[21.48px]">메인이벤트 등록</p>
                            <div className="mt-[32px] flex flex-col gap-[24px]">
                                <div className="flex gap-[16px]">
                                    <div className="flex justify-start items-center w-[74px]">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">대분류</p>
                                    </div>
                                    <div className="w-[310px]">
                                        <CustomDropdown options={options} defaultValue="option1"
                                                        onSelect={setDropdownValue}/>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-[24px] xl:gap-[60px]">
                                    <div className="flex gap-[16px]">
                                        <div className="flex justify-start items-center w-[74px]">
                                            <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">
                                                이벤트코드
                                            </p>
                                        </div>
                                        <div className="w-[640px]">
                                            <input
                                                className="font-[500] text-[14px] leading-[16.71px] text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                                placeholder="000000000(자동 입력되는 부분)"/>
                                        </div>
                                    </div>
                                    <div className="flex gap-[16px]">
                                        <div className="flex justify-start items-center w-[74px]">
                                            <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">
                                                이벤트명
                                            </p>
                                        </div>
                                        <div className="w-[640px]">
                                            <input
                                                className=" text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] outline-none"
                                                placeholder="이벤트 구분명을 입력해주세요."/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-[16px]">
                                    <div className="flex justify-start items-start w-[74px]">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222] mt-[14px]">배너
                                            이미지</p>
                                    </div>
                                    <div className="w-[640px]">
                                        <div className="flex flex-col gap-[16px]">
                                            <div className="flex items-end gap-[8px]">
                                                <button className="bg-[#ddd] rounded-[6px]">
                                                    <p className="font-[600] text-[14px] leading-[20px] px-[29.5px] py-[14px]">첨부하기</p>
                                                </button>
                                                <p className="text-[400] text-[11px] leading-[13.13px] text-[#999]">PNG,
                                                    JPG, JPEG 형식의 파일을 첨부해주세요.</p>
                                            </div>
                                            <div className="flex flex-col gap-[8px]">
                                                <img className="h-[138px] w-[138px]" src={example.default.src}
                                                     alt="example"/>
                                                <p className="text-[400] text-[11px] leading-[13.13px] text-[#999]">파일명
                                                    출력.PNG</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-[24px] xl:gap-[60px]">
                                    <div className="flex gap-[16px]">
                                        <div className="flex justify-start items-center w-[74px]">
                                            <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">
                                                메인이벤트<br/>
                                                헤더타이틀
                                            </p>
                                        </div>
                                        <div className="w-[640px]">
                                            <input
                                                className="font-[500] text-[14px] leading-[16.71px] text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#fff] outline-none"
                                                placeholder="메인이벤트 헤더타이틀을 입력해주세요.(이벤트 페이지 공유 시 노출)"/>
                                        </div>
                                    </div>
                                    <div className="flex gap-[16px]">
                                        <div className="flex justify-start items-center w-[74px]">
                                            <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">노출여부</p>
                                        </div>
                                        <div className="flex gap-[24px]">
                                            <div className="flex justify-start items-center">
                                                <RadioButton label="노출"
                                                             name="radio"
                                                             value="option1"
                                                             checked={selectedValue === 'option1'}
                                                             onChange={handleChange}/>
                                            </div>
                                            <div className="flex justify-start items-center">
                                                <RadioButton label="미노출"
                                                             name="radio"
                                                             value="option2"
                                                             checked={selectedValue === 'option2'}
                                                             onChange={handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-[24px] lg:gap-[60px]">
                                    <div className="flex gap-[16px]">
                                        <div className="flex justify-start items-center w-[74px]">
                                            <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">등록기간</p>
                                        </div>
                                        <div className="w-[640px]">
                                            <input
                                                className="bg-amber-400 font-[500] text-[14px] leading-[16.71px] text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                                placeholder="00"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-[24px] lg:gap-[60px]">
                                    <div className="flex gap-[16px]">
                                        <div className="flex justify-start items-start w-[74px]">
                                            <p className="text-[14px] font-[600] leading-[16.71px] text-[#222] mt-[4px]">
                                                메인이벤트
                                                이미지
                                            </p>
                                        </div>
                                        <div className="w-[640px]">
                                            <div className="flex flex-col gap-[16px]">
                                                <div className="flex items-end gap-[8px]">
                                                    <button className="bg-[#ddd] rounded-[6px]">
                                                        <p className="font-[600] text-[14px] leading-[20px] px-[29.5px] py-[14px]">첨부하기</p>
                                                    </button>
                                                    <p className="text-[400] text-[11px] leading-[13.13px] text-[#999]">PNG,
                                                        JPG, JPEG 형식의 파일을 첨부해주세요.</p>
                                                </div>
                                                <div className="flex flex-col gap-[8px]">
                                                    <img className="h-[138px] w-[138px]" src={example.default.src}
                                                         alt="example"/>
                                                    <p className="text-[400] text-[11px] leading-[13.13px] text-[#999]">파일명
                                                        출력.PNG</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-[16px]">
                                    <div className="flex justify-start w-[74px]">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222] mt-[4px]">
                                            카테고리<br/>
                                            등록
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-[16px]">
                                        <div className="w-[640px] flex gap-[12px]">
                                            <input
                                                className="w-full font-[500] text-[14px] leading-[16.71px] text-[#999] px-[12px] py-[15.5px] border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                                placeholder="카테고리명(0/10)"/>
                                            <button className="rounded-[6px] bg-[#ddd] w-[108px]">
                                                <p className="font-[600] text-[14px] leading-[20px] py-[14px]">등록</p>
                                            </button>
                                        </div>
                                        <div className="flex flex-col gap-[12px] w-[640px] lg:w-[696px]">
                                            <div className="flex gap-[12px]">
                                                <div className="w-full flex flex-wrap gap-[12px]">
                                                    <div className="border border-black rounded-[6px]">
                                                        <div
                                                            className="flex items-center gap-[21px] py-[15.5px] px-[16px]">
                                                            <p className="font-[500] text-[14px] leading-[16.71px] w-[83px] truncate">등록
                                                                카테고리1</p>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="mask0_2833_69393" style={{maskType: "alpha"}}
                                                                      maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                                                                      height="24">
                                                                    <rect width="24" height="24" fill="#D9D9D9"/>
                                                                </mask>
                                                                <g mask="url(#mask0_2833_69393)">
                                                                    <path
                                                                        d="M8.05 15.95C8.15 16.0667 8.26667 16.125 8.4 16.125C8.53333 16.125 8.65 16.0667 8.75 15.95L12 12.7L15.275 15.975C15.3583 16.075 15.471 16.121 15.613 16.113C15.7543 16.1043 15.8667 16.05 15.95 15.95C16.0667 15.85 16.125 15.7333 16.125 15.6C16.125 15.4667 16.0667 15.35 15.95 15.25L12.7 12L15.975 8.725C16.075 8.64167 16.121 8.529 16.113 8.387C16.1043 8.24567 16.05 8.13333 15.95 8.05C15.85 7.93333 15.7333 7.875 15.6 7.875C15.4667 7.875 15.35 7.93333 15.25 8.05L12 11.3L8.725 8.025C8.64167 7.925 8.529 7.879 8.387 7.887C8.24567 7.89567 8.13333 7.95 8.05 8.05C7.93333 8.15 7.875 8.26667 7.875 8.4C7.875 8.53333 7.93333 8.65 8.05 8.75L11.3 12L8.025 15.275C7.925 15.3583 7.87933 15.471 7.888 15.613C7.896 15.7543 7.95 15.8667 8.05 15.95ZM12 21C10.75 21 9.575 20.7667 8.475 20.3C7.375 19.8333 6.421 19.196 5.613 18.388C4.80433 17.5793 4.16667 16.625 3.7 15.525C3.23333 14.425 3 13.25 3 12C3 10.75 3.23333 9.575 3.7 8.475C4.16667 7.375 4.80433 6.42067 5.613 5.612C6.421 4.804 7.375 4.16667 8.475 3.7C9.575 3.23333 10.75 3 12 3C13.25 3 14.425 3.23333 15.525 3.7C16.625 4.16667 17.5793 4.804 18.388 5.612C19.196 6.42067 19.8333 7.375 20.3 8.475C20.7667 9.575 21 10.75 21 12C21 13.25 20.7667 14.425 20.3 15.525C19.8333 16.625 19.196 17.5793 18.388 18.388C17.5793 19.196 16.625 19.8333 15.525 20.3C14.425 20.7667 13.25 21 12 21Z"
                                                                        fill="#BFBFBF"/>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="border border-black rounded-[6px]">
                                                        <div
                                                            className="flex items-center gap-[21px] py-[15.5px] px-[16px]">
                                                            <p className="font-[500] text-[14px] leading-[16.71px] w-[83px] truncate">등록
                                                                카테고리1</p>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="mask0_2833_69393" style={{maskType: "alpha"}}
                                                                      maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                                                                      height="24">
                                                                    <rect width="24" height="24" fill="#D9D9D9"/>
                                                                </mask>
                                                                <g mask="url(#mask0_2833_69393)">
                                                                    <path
                                                                        d="M8.05 15.95C8.15 16.0667 8.26667 16.125 8.4 16.125C8.53333 16.125 8.65 16.0667 8.75 15.95L12 12.7L15.275 15.975C15.3583 16.075 15.471 16.121 15.613 16.113C15.7543 16.1043 15.8667 16.05 15.95 15.95C16.0667 15.85 16.125 15.7333 16.125 15.6C16.125 15.4667 16.0667 15.35 15.95 15.25L12.7 12L15.975 8.725C16.075 8.64167 16.121 8.529 16.113 8.387C16.1043 8.24567 16.05 8.13333 15.95 8.05C15.85 7.93333 15.7333 7.875 15.6 7.875C15.4667 7.875 15.35 7.93333 15.25 8.05L12 11.3L8.725 8.025C8.64167 7.925 8.529 7.879 8.387 7.887C8.24567 7.89567 8.13333 7.95 8.05 8.05C7.93333 8.15 7.875 8.26667 7.875 8.4C7.875 8.53333 7.93333 8.65 8.05 8.75L11.3 12L8.025 15.275C7.925 15.3583 7.87933 15.471 7.888 15.613C7.896 15.7543 7.95 15.8667 8.05 15.95ZM12 21C10.75 21 9.575 20.7667 8.475 20.3C7.375 19.8333 6.421 19.196 5.613 18.388C4.80433 17.5793 4.16667 16.625 3.7 15.525C3.23333 14.425 3 13.25 3 12C3 10.75 3.23333 9.575 3.7 8.475C4.16667 7.375 4.80433 6.42067 5.613 5.612C6.421 4.804 7.375 4.16667 8.475 3.7C9.575 3.23333 10.75 3 12 3C13.25 3 14.425 3.23333 15.525 3.7C16.625 4.16667 17.5793 4.804 18.388 5.612C19.196 6.42067 19.8333 7.375 20.3 8.475C20.7667 9.575 21 10.75 21 12C21 13.25 20.7667 14.425 20.3 15.525C19.8333 16.625 19.196 17.5793 18.388 18.388C17.5793 19.196 16.625 19.8333 15.525 20.3C14.425 20.7667 13.25 21 12 21Z"
                                                                        fill="#BFBFBF"/>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="border border-black rounded-[6px]">
                                                        <div
                                                            className="flex items-center gap-[21px] py-[15.5px] px-[16px]">
                                                            <p className="font-[500] text-[14px] leading-[16.71px] w-[83px] truncate">등록
                                                                카테고리1</p>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="mask0_2833_69393" style={{maskType: "alpha"}}
                                                                      maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                                                                      height="24">
                                                                    <rect width="24" height="24" fill="#D9D9D9"/>
                                                                </mask>
                                                                <g mask="url(#mask0_2833_69393)">
                                                                    <path
                                                                        d="M8.05 15.95C8.15 16.0667 8.26667 16.125 8.4 16.125C8.53333 16.125 8.65 16.0667 8.75 15.95L12 12.7L15.275 15.975C15.3583 16.075 15.471 16.121 15.613 16.113C15.7543 16.1043 15.8667 16.05 15.95 15.95C16.0667 15.85 16.125 15.7333 16.125 15.6C16.125 15.4667 16.0667 15.35 15.95 15.25L12.7 12L15.975 8.725C16.075 8.64167 16.121 8.529 16.113 8.387C16.1043 8.24567 16.05 8.13333 15.95 8.05C15.85 7.93333 15.7333 7.875 15.6 7.875C15.4667 7.875 15.35 7.93333 15.25 8.05L12 11.3L8.725 8.025C8.64167 7.925 8.529 7.879 8.387 7.887C8.24567 7.89567 8.13333 7.95 8.05 8.05C7.93333 8.15 7.875 8.26667 7.875 8.4C7.875 8.53333 7.93333 8.65 8.05 8.75L11.3 12L8.025 15.275C7.925 15.3583 7.87933 15.471 7.888 15.613C7.896 15.7543 7.95 15.8667 8.05 15.95ZM12 21C10.75 21 9.575 20.7667 8.475 20.3C7.375 19.8333 6.421 19.196 5.613 18.388C4.80433 17.5793 4.16667 16.625 3.7 15.525C3.23333 14.425 3 13.25 3 12C3 10.75 3.23333 9.575 3.7 8.475C4.16667 7.375 4.80433 6.42067 5.613 5.612C6.421 4.804 7.375 4.16667 8.475 3.7C9.575 3.23333 10.75 3 12 3C13.25 3 14.425 3.23333 15.525 3.7C16.625 4.16667 17.5793 4.804 18.388 5.612C19.196 6.42067 19.8333 7.375 20.3 8.475C20.7667 9.575 21 10.75 21 12C21 13.25 20.7667 14.425 20.3 15.525C19.8333 16.625 19.196 17.5793 18.388 18.388C17.5793 19.196 16.625 19.8333 15.525 20.3C14.425 20.7667 13.25 21 12 21Z"
                                                                        fill="#BFBFBF"/>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="border border-black rounded-[6px]">
                                                        <div
                                                            className="flex items-center gap-[21px] py-[15.5px] px-[16px]">
                                                            <p className="font-[500] text-[14px] leading-[16.71px] w-[83px] truncate">등록
                                                                카테고리1</p>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="mask0_2833_69393" style={{maskType: "alpha"}}
                                                                      maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                                                                      height="24">
                                                                    <rect width="24" height="24" fill="#D9D9D9"/>
                                                                </mask>
                                                                <g mask="url(#mask0_2833_69393)">
                                                                    <path
                                                                        d="M8.05 15.95C8.15 16.0667 8.26667 16.125 8.4 16.125C8.53333 16.125 8.65 16.0667 8.75 15.95L12 12.7L15.275 15.975C15.3583 16.075 15.471 16.121 15.613 16.113C15.7543 16.1043 15.8667 16.05 15.95 15.95C16.0667 15.85 16.125 15.7333 16.125 15.6C16.125 15.4667 16.0667 15.35 15.95 15.25L12.7 12L15.975 8.725C16.075 8.64167 16.121 8.529 16.113 8.387C16.1043 8.24567 16.05 8.13333 15.95 8.05C15.85 7.93333 15.7333 7.875 15.6 7.875C15.4667 7.875 15.35 7.93333 15.25 8.05L12 11.3L8.725 8.025C8.64167 7.925 8.529 7.879 8.387 7.887C8.24567 7.89567 8.13333 7.95 8.05 8.05C7.93333 8.15 7.875 8.26667 7.875 8.4C7.875 8.53333 7.93333 8.65 8.05 8.75L11.3 12L8.025 15.275C7.925 15.3583 7.87933 15.471 7.888 15.613C7.896 15.7543 7.95 15.8667 8.05 15.95ZM12 21C10.75 21 9.575 20.7667 8.475 20.3C7.375 19.8333 6.421 19.196 5.613 18.388C4.80433 17.5793 4.16667 16.625 3.7 15.525C3.23333 14.425 3 13.25 3 12C3 10.75 3.23333 9.575 3.7 8.475C4.16667 7.375 4.80433 6.42067 5.613 5.612C6.421 4.804 7.375 4.16667 8.475 3.7C9.575 3.23333 10.75 3 12 3C13.25 3 14.425 3.23333 15.525 3.7C16.625 4.16667 17.5793 4.804 18.388 5.612C19.196 6.42067 19.8333 7.375 20.3 8.475C20.7667 9.575 21 10.75 21 12C21 13.25 20.7667 14.425 20.3 15.525C19.8333 16.625 19.196 17.5793 18.388 18.388C17.5793 19.196 16.625 19.8333 15.525 20.3C14.425 20.7667 13.25 21 12 21Z"
                                                                        fill="#BFBFBF"/>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="border border-black rounded-[6px]">
                                                        <div
                                                            className="flex items-center gap-[21px] py-[15.5px] px-[16px]">
                                                            <p className="font-[500] text-[14px] leading-[16.71px] w-[83px] truncate">등록
                                                                카테고리1</p>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="mask0_2833_69393" style={{maskType: "alpha"}}
                                                                      maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                                                                      height="24">
                                                                    <rect width="24" height="24" fill="#D9D9D9"/>
                                                                </mask>
                                                                <g mask="url(#mask0_2833_69393)">
                                                                    <path
                                                                        d="M8.05 15.95C8.15 16.0667 8.26667 16.125 8.4 16.125C8.53333 16.125 8.65 16.0667 8.75 15.95L12 12.7L15.275 15.975C15.3583 16.075 15.471 16.121 15.613 16.113C15.7543 16.1043 15.8667 16.05 15.95 15.95C16.0667 15.85 16.125 15.7333 16.125 15.6C16.125 15.4667 16.0667 15.35 15.95 15.25L12.7 12L15.975 8.725C16.075 8.64167 16.121 8.529 16.113 8.387C16.1043 8.24567 16.05 8.13333 15.95 8.05C15.85 7.93333 15.7333 7.875 15.6 7.875C15.4667 7.875 15.35 7.93333 15.25 8.05L12 11.3L8.725 8.025C8.64167 7.925 8.529 7.879 8.387 7.887C8.24567 7.89567 8.13333 7.95 8.05 8.05C7.93333 8.15 7.875 8.26667 7.875 8.4C7.875 8.53333 7.93333 8.65 8.05 8.75L11.3 12L8.025 15.275C7.925 15.3583 7.87933 15.471 7.888 15.613C7.896 15.7543 7.95 15.8667 8.05 15.95ZM12 21C10.75 21 9.575 20.7667 8.475 20.3C7.375 19.8333 6.421 19.196 5.613 18.388C4.80433 17.5793 4.16667 16.625 3.7 15.525C3.23333 14.425 3 13.25 3 12C3 10.75 3.23333 9.575 3.7 8.475C4.16667 7.375 4.80433 6.42067 5.613 5.612C6.421 4.804 7.375 4.16667 8.475 3.7C9.575 3.23333 10.75 3 12 3C13.25 3 14.425 3.23333 15.525 3.7C16.625 4.16667 17.5793 4.804 18.388 5.612C19.196 6.42067 19.8333 7.375 20.3 8.475C20.7667 9.575 21 10.75 21 12C21 13.25 20.7667 14.425 20.3 15.525C19.8333 16.625 19.196 17.5793 18.388 18.388C17.5793 19.196 16.625 19.8333 15.525 20.3C14.425 20.7667 13.25 21 12 21Z"
                                                                        fill="#BFBFBF"/>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="border border-black rounded-[6px]">
                                                        <div
                                                            className="flex items-center gap-[21px] py-[15.5px] px-[16px]">
                                                            <p className="font-[500] text-[14px] leading-[16.71px] w-[83px] truncate">등록
                                                                카테고리1</p>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="mask0_2833_69393" style={{maskType: "alpha"}}
                                                                      maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                                                                      height="24">
                                                                    <rect width="24" height="24" fill="#D9D9D9"/>
                                                                </mask>
                                                                <g mask="url(#mask0_2833_69393)">
                                                                    <path
                                                                        d="M8.05 15.95C8.15 16.0667 8.26667 16.125 8.4 16.125C8.53333 16.125 8.65 16.0667 8.75 15.95L12 12.7L15.275 15.975C15.3583 16.075 15.471 16.121 15.613 16.113C15.7543 16.1043 15.8667 16.05 15.95 15.95C16.0667 15.85 16.125 15.7333 16.125 15.6C16.125 15.4667 16.0667 15.35 15.95 15.25L12.7 12L15.975 8.725C16.075 8.64167 16.121 8.529 16.113 8.387C16.1043 8.24567 16.05 8.13333 15.95 8.05C15.85 7.93333 15.7333 7.875 15.6 7.875C15.4667 7.875 15.35 7.93333 15.25 8.05L12 11.3L8.725 8.025C8.64167 7.925 8.529 7.879 8.387 7.887C8.24567 7.89567 8.13333 7.95 8.05 8.05C7.93333 8.15 7.875 8.26667 7.875 8.4C7.875 8.53333 7.93333 8.65 8.05 8.75L11.3 12L8.025 15.275C7.925 15.3583 7.87933 15.471 7.888 15.613C7.896 15.7543 7.95 15.8667 8.05 15.95ZM12 21C10.75 21 9.575 20.7667 8.475 20.3C7.375 19.8333 6.421 19.196 5.613 18.388C4.80433 17.5793 4.16667 16.625 3.7 15.525C3.23333 14.425 3 13.25 3 12C3 10.75 3.23333 9.575 3.7 8.475C4.16667 7.375 4.80433 6.42067 5.613 5.612C6.421 4.804 7.375 4.16667 8.475 3.7C9.575 3.23333 10.75 3 12 3C13.25 3 14.425 3.23333 15.525 3.7C16.625 4.16667 17.5793 4.804 18.388 5.612C19.196 6.42067 19.8333 7.375 20.3 8.475C20.7667 9.575 21 10.75 21 12C21 13.25 20.7667 14.425 20.3 15.525C19.8333 16.625 19.196 17.5793 18.388 18.388C17.5793 19.196 16.625 19.8333 15.525 20.3C14.425 20.7667 13.25 21 12 21Z"
                                                                        fill="#BFBFBF"/>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="border border-black rounded-[6px]">
                                                        <div
                                                            className="flex items-center gap-[21px] py-[15.5px] px-[16px]">
                                                            <p className="font-[500] text-[14px] leading-[16.71px] w-[83px] truncate">등록
                                                                카테고리1</p>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="mask0_2833_69393" style={{maskType: "alpha"}}
                                                                      maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                                                                      height="24">
                                                                    <rect width="24" height="24" fill="#D9D9D9"/>
                                                                </mask>
                                                                <g mask="url(#mask0_2833_69393)">
                                                                    <path
                                                                        d="M8.05 15.95C8.15 16.0667 8.26667 16.125 8.4 16.125C8.53333 16.125 8.65 16.0667 8.75 15.95L12 12.7L15.275 15.975C15.3583 16.075 15.471 16.121 15.613 16.113C15.7543 16.1043 15.8667 16.05 15.95 15.95C16.0667 15.85 16.125 15.7333 16.125 15.6C16.125 15.4667 16.0667 15.35 15.95 15.25L12.7 12L15.975 8.725C16.075 8.64167 16.121 8.529 16.113 8.387C16.1043 8.24567 16.05 8.13333 15.95 8.05C15.85 7.93333 15.7333 7.875 15.6 7.875C15.4667 7.875 15.35 7.93333 15.25 8.05L12 11.3L8.725 8.025C8.64167 7.925 8.529 7.879 8.387 7.887C8.24567 7.89567 8.13333 7.95 8.05 8.05C7.93333 8.15 7.875 8.26667 7.875 8.4C7.875 8.53333 7.93333 8.65 8.05 8.75L11.3 12L8.025 15.275C7.925 15.3583 7.87933 15.471 7.888 15.613C7.896 15.7543 7.95 15.8667 8.05 15.95ZM12 21C10.75 21 9.575 20.7667 8.475 20.3C7.375 19.8333 6.421 19.196 5.613 18.388C4.80433 17.5793 4.16667 16.625 3.7 15.525C3.23333 14.425 3 13.25 3 12C3 10.75 3.23333 9.575 3.7 8.475C4.16667 7.375 4.80433 6.42067 5.613 5.612C6.421 4.804 7.375 4.16667 8.475 3.7C9.575 3.23333 10.75 3 12 3C13.25 3 14.425 3.23333 15.525 3.7C16.625 4.16667 17.5793 4.804 18.388 5.612C19.196 6.42067 19.8333 7.375 20.3 8.475C20.7667 9.575 21 10.75 21 12C21 13.25 20.7667 14.425 20.3 15.525C19.8333 16.625 19.196 17.5793 18.388 18.388C17.5793 19.196 16.625 19.8333 15.525 20.3C14.425 20.7667 13.25 21 12 21Z"
                                                                        fill="#BFBFBF"/>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="border border-black rounded-[6px]">
                                                        <div
                                                            className="flex items-center gap-[21px] py-[15.5px] px-[16px]">
                                                            <p className="font-[500] text-[14px] leading-[16.71px] w-[83px] truncate">등록
                                                                카테고리1</p>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <mask id="mask0_2833_69393" style={{maskType: "alpha"}}
                                                                      maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                                                                      height="24">
                                                                    <rect width="24" height="24" fill="#D9D9D9"/>
                                                                </mask>
                                                                <g mask="url(#mask0_2833_69393)">
                                                                    <path
                                                                        d="M8.05 15.95C8.15 16.0667 8.26667 16.125 8.4 16.125C8.53333 16.125 8.65 16.0667 8.75 15.95L12 12.7L15.275 15.975C15.3583 16.075 15.471 16.121 15.613 16.113C15.7543 16.1043 15.8667 16.05 15.95 15.95C16.0667 15.85 16.125 15.7333 16.125 15.6C16.125 15.4667 16.0667 15.35 15.95 15.25L12.7 12L15.975 8.725C16.075 8.64167 16.121 8.529 16.113 8.387C16.1043 8.24567 16.05 8.13333 15.95 8.05C15.85 7.93333 15.7333 7.875 15.6 7.875C15.4667 7.875 15.35 7.93333 15.25 8.05L12 11.3L8.725 8.025C8.64167 7.925 8.529 7.879 8.387 7.887C8.24567 7.89567 8.13333 7.95 8.05 8.05C7.93333 8.15 7.875 8.26667 7.875 8.4C7.875 8.53333 7.93333 8.65 8.05 8.75L11.3 12L8.025 15.275C7.925 15.3583 7.87933 15.471 7.888 15.613C7.896 15.7543 7.95 15.8667 8.05 15.95ZM12 21C10.75 21 9.575 20.7667 8.475 20.3C7.375 19.8333 6.421 19.196 5.613 18.388C4.80433 17.5793 4.16667 16.625 3.7 15.525C3.23333 14.425 3 13.25 3 12C3 10.75 3.23333 9.575 3.7 8.475C4.16667 7.375 4.80433 6.42067 5.613 5.612C6.421 4.804 7.375 4.16667 8.475 3.7C9.575 3.23333 10.75 3 12 3C13.25 3 14.425 3.23333 15.525 3.7C16.625 4.16667 17.5793 4.804 18.388 5.612C19.196 6.42067 19.8333 7.375 20.3 8.475C20.7667 9.575 21 10.75 21 12C21 13.25 20.7667 14.425 20.3 15.525C19.8333 16.625 19.196 17.5793 18.388 18.388C17.5793 19.196 16.625 19.8333 15.525 20.3C14.425 20.7667 13.25 21 12 21Z"
                                                                        fill="#BFBFBF"/>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                            <div className="flex justify-start items-center gap-[8px]">
                                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.9">
                                                        <path
                                                            d="M10.7434 8.74969H8.24961M8.24961 8.74969H5.75586M8.24961 8.74969V11.2434M8.24961 8.74969L8.24961 6.25594M14.8996 8.7501C14.8996 12.4228 11.9223 15.4001 8.24961 15.4001C4.57692 15.4001 1.59961 12.4228 1.59961 8.7501C1.59961 5.0774 4.57692 2.1001 8.24961 2.1001C11.9223 2.1001 14.8996 5.0774 14.8996 8.7501Z"
                                                            stroke="#4A45D8" stroke-width="1.5" stroke-linecap="round"/>
                                                    </g>
                                                </svg>
                                                <p className="font-[600] text-[14px] leading-[16.71px] text-[#4A45D8]">카테고리
                                                    상품 등록</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end form*/}

                <div className="flex justify-end items-center gap-[12px] mt-[40px]">
                    <button className="bg-[#ddd] rounded-[6px]">
                        <p className="py-[14px] px-[41.5px] text-black">이전</p>
                    </button>
                    <button className="bg-[#4A45D8] rounded-[6px]">
                        <p className="py-[14px] px-[41.5px] text-white">저장</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
