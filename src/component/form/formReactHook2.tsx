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
export default function FormReactHook2() {
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
                            <p className="font-[700] text-[18px] leading-[21.48px]">쿠폰 등록</p>
                            <div className="mt-[32px] flex flex-col gap-[24px]">
                                <div className="flex gap-[16px]">
                                    <div className="flex justify-start items-center w-[74px]">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">카테고리</p>
                                    </div>
                                    <div className="w-[310px]">
                                        <CustomDropdown options={options} defaultValue="option1"
                                                        onSelect={setDropdownValue}/>
                                    </div>
                                </div>
                                <div className="flex gap-[16px]">
                                    <div className="flex justify-start items-center w-[74px]">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">배너명</p>
                                    </div>
                                    <div className="w-[1430px]">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] outline-none"
                                            placeholder="배너명을 입력해주세요."/>
                                    </div>
                                </div>
                                <div className="flex gap-[60px]">
                                    <div className="flex gap-[16px]">
                                        <div className="flex justify-start items-center w-[74px]">
                                            <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">앱
                                                노출여부</p>
                                        </div>
                                        <div className="flex gap-[24px] w-[640px]">
                                            <div className="flex justify-start items-center">
                                                <RadioButton label="사용"
                                                             name="radio"
                                                             value="option1"
                                                             checked={selectedValue === 'option1'}
                                                             onChange={handleChange}/>
                                            </div>
                                            <div className="flex justify-start items-center">
                                                <RadioButton label="미사용"
                                                             name="radio"
                                                             value="option2"
                                                             checked={selectedValue === 'option2'}
                                                             onChange={handleChange}/>
                                            </div>
                                            <div className="flex justify-start items-center">
                                                <RadioButton label="미사용"
                                                             name="radio"
                                                             value="option2"
                                                             checked={selectedValue === 'option2'}
                                                             onChange={handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-[16px]">
                                        <div className="flex justify-start items-center w-[74px]">
                                            <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">노출여부</p>
                                        </div>
                                        <div className="flex gap-[24px]">
                                            <div className="flex justify-start items-center">
                                                <RadioButton label="사용"
                                                             name="radio"
                                                             value="option1"
                                                             checked={selectedValue === 'option1'}
                                                             onChange={handleChange}/>
                                            </div>
                                            <div className="flex justify-start items-center">
                                                <RadioButton label="미사용"
                                                             name="radio"
                                                             value="option2"
                                                             checked={selectedValue === 'option2'}
                                                             onChange={handleChange}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-[16px]">
                                        <div className="flex justify-start items-center w-[74px]">
                                            <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">노출순서</p>
                                        </div>
                                        <div className="w-[108px]">
                                            <input
                                                className="text-[#999] font-[500] text-[14px] leading-[16.71px] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                                placeholder="00"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-[60px]">
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
                                    {dropdownValue == 'option1' && (
                                        <div className="flex gap-[16px]">
                                            <div className="flex justify-start items-center w-[74px]">
                                                <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">배너
                                                    랜딩<br/>
                                                    URL</p>
                                            </div>
                                            <div className="w-[640px]">
                                                <input
                                                    className=" text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] outline-none"
                                                    placeholder="배너 랜딩 URL 혹은 이벤트 코드를 입력해주세요."/>
                                            </div>
                                        </div>
                                    )}
                                    {(dropdownValue == 'option2' || dropdownValue == 'option3' || dropdownValue == 'option4') && (
                                        <div className="flex gap-[16px]">
                                            <div className="flex justify-start items-center w-[74px]">
                                                <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">
                                                    배너 대분류
                                                </p>
                                            </div>
                                            <div className="w-[310px]">
                                                <CustomDropdown options={options} defaultValue="option1"
                                                                onSelect={setDropdownValue}/>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {dropdownValue == 'option2' && (
                                    <div className="flex gap-[60px]">
                                        <div className="flex gap-[16px]">
                                            <div className="flex justify-start items-center w-[74px]">
                                                <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">배너
                                                    CTA</p>
                                            </div>
                                            <div className="w-[640px]">
                                                <input
                                                    className="bg-amber-400 font-[500] text-[14px] leading-[16.71px] text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                                    placeholder="00"/>
                                            </div>
                                        </div>
                                        <div className="flex gap-[16px]">
                                            <div className="flex justify-start items-center w-[74px]">
                                                <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">배너
                                                    랜딩<br/>
                                                    URL</p>
                                            </div>
                                            <div className="w-[640px]">
                                                <input
                                                    className=" text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] outline-none"
                                                    placeholder="배너 랜딩 URL 혹은 이벤트 코드를 입력해주세요."/>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {(dropdownValue == 'option3' || dropdownValue == 'option4') && (
                                    <div className="flex gap-[60px]">
                                        <div className="flex gap-[16px]">
                                            <div className="flex justify-start items-center w-[74px]">
                                                <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">배너
                                                    랜딩
                                                    이벤트</p>
                                            </div>
                                            <div className="w-[640px] flex gap-[12px]">
                                                <input
                                                    className="w-full font-[500] text-[14px] leading-[16.71px] text-[#999] px-[12px] py-[15.5px] border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                                    placeholder="메인 이벤트 항목명 노출"/>
                                                <button className="rounded-[6px] bg-[#ddd] w-[108px]">
                                                    <p className="font-[600] text-[14px] leading-[20px] py-[14px]">선택하기</p>
                                                </button>
                                            </div>
                                        </div>
                                        {/*tata*/}
                                        <div className="flex gap-[16px]">
                                            <div className="flex justify-start items-center w-[74px]">
                                                <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">배너<br/>
                                                    메인 카피</p>
                                            </div>
                                            <div className="flex gap-[12px] w-[640px]">
                                                <div className="flex gap-[24px]">
                                                    <div className="flex justify-start items-center">
                                                        <RadioButton label="미사용"
                                                                     name="radio"
                                                                     value="option1"
                                                                     checked={selectedValue === 'option1'}
                                                                     onChange={handleChange}/>
                                                    </div>
                                                    <div className="flex justify-start items-center">
                                                        <RadioButton label="사용"
                                                                     name="radio"
                                                                     value="option2"
                                                                     checked={selectedValue === 'option2'}
                                                                     onChange={handleChange}/>
                                                    </div>
                                                </div>
                                                <div className="w-[484px]">
                                                    <input
                                                        className="w-full font-[500] text-[14px] leading-[16.71px] text-[#999] px-[12px] py-[15.5px] border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                                        placeholder="메인 배너 이미지에 입력될 메인 카피를 입력해주세요.(0/15)"/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )}
                                {(dropdownValue == 'option3' || dropdownValue == 'option4') && (
                                    <div className="flex gap-[60px]">
                                        <div className="flex gap-[16px]">
                                            <div className="flex justify-start items-center w-[74px]">
                                                <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">배너<br/>
                                                    메인 카피</p>
                                            </div>
                                            <div className="flex gap-[12px] w-[640px]">
                                                <div className="flex gap-[24px]">
                                                    <div className="flex justify-start items-center">
                                                        <RadioButton label="미사용"
                                                                     name="radio"
                                                                     value="option1"
                                                                     checked={selectedValue === 'option1'}
                                                                     onChange={handleChange}/>
                                                    </div>
                                                    <div className="flex justify-start items-center">
                                                        <RadioButton label="사용"
                                                                     name="radio"
                                                                     value="option2"
                                                                     checked={selectedValue === 'option2'}
                                                                     onChange={handleChange}/>
                                                    </div>
                                                </div>
                                                <div className="w-[484px]">
                                                    <input
                                                        className="w-full font-[500] text-[14px] leading-[16.71px] text-[#999] px-[12px] py-[15.5px] border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                                        placeholder="메인 배너 이미지에 입력될 메인 카피를 입력해주세요.(0/15)"/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )}
                                <div className="flex gap-[60px]">
                                    <div className="flex gap-[16px]">
                                        <div className="flex justify-start items-start w-[74px]">
                                            <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">배너
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
                                    {dropdownValue == 'option2' && (
                                        <div className="flex gap-[16px]">
                                            <div className="flex justify-start items-start w-[74px]">
                                                <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">배너
                                                    텍스트</p>
                                            </div>
                                            <div className="w-[640px]">
                                            <textarea
                                                className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px]  outline-none h-[224px]"
                                                placeholder="배너 이미지 하단에 기입될 텍스트를 기입해주세요.(0/120)"/>
                                            </div>
                                        </div>
                                    )}
                                    {dropdownValue == 'option4' && (
                                        <div className="flex gap-[16px]">
                                            <div className="flex justify-start items-start w-[74px]">
                                                <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">배너
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
                                    )}
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
