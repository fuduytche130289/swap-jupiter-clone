import React from "react";

const iconArrowRight = require('./assets/img/icon_arrow_right.svg');
const iconDownload = require('./assets/img/icon_download.svg');
export default function Form() {
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
                            <p className="font-[700] text-[18px] leading-[21.48px]">입점사 상세</p>
                            <div className="mt-[32px] flex flex-col gap-[24px]">
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">입점사명</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="입점사 판매업체명 노출"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">입점사명</p>
                                    </div>
                                    <div className="col-span-10">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="카테고리1, 카테고리2, 카테고리3..."/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">입점사명</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="입점사 판매업체명 노출"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">입점사명</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="입점사 판매업체명 노출"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-start">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">입점사명</p>
                                    </div>
                                    <div className="col-span-10">
                                        <textarea
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none h-[100px]"
                                            placeholder="텍스트 영역"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">판매 SKU</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="판매 SKU 수량"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[20px] text-[#222]">병행수입상품<br/>
                                            포함 여부</p>
                                    </div>
                                    <div className="col-span-1">
                                        <button
                                            className=" w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none">
                                            <p className="text-[#999] px-[35.5px] py-[17px]">미포함</p>
                                        </button>
                                    </div>
                                    <div className="col-span-1 flex justify-center items-center">
                                        <p className="text-[14px] font-[600] leading-[20px] text-[#222]">도매 상품<br/>
                                            보유 여부</p>
                                    </div>
                                    <div className="col-span-1">
                                        <button
                                            className=" w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none">
                                            <p className="text-[#999] px-[35.5px] py-[17px]">보유</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*line*/}
                        <div className="h-[1px] w-full bg-[#F0F0F0] my-[40px]"></div>
                        {/*end line*/}

                        <div>
                            <p className="font-[700] text-[18px] leading-[21.48px]">회사 상세</p>
                            <div className="mt-[32px] flex flex-col gap-[24px]">
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">회사명</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="입점사 법인명(운영사)"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">사업자<br/>
                                            등록번호</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="사업자 등록번호 0000000000"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">사업장 주소</p>
                                    </div>
                                    <div className="col-span-10">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="우편번호 / 주소 / 상세 주소"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">담당자명</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="입점사 브랜드 담당자"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">전화번호</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="02-0000-0000"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">휴대전화</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="010-0000-0000"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">이메일</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="ID@Email.com"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">입점 심사<br/>
                                            상태</p>
                                    </div>
                                    <div className="col-span-2">
                                        <select
                                            className="w-full px-[12px] py-[15.5px] bg-white rounded-[6px] border border-gray-200 outline-none">
                                            <option value="1">입점상태</option>
                                            <option value="2">미승인</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">심사 대상자</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="하트필드 담당자 이름"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*line*/}
                        <div className="h-[1px] w-full bg-[#F0F0F0] my-[40px]"></div>
                        {/*end line*/}

                        <div>
                            <p className="font-[700] text-[18px] leading-[21.48px]">파일</p>
                            <div className="mt-[32px] flex flex-col gap-[24px]">
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">사업자<br/>
                                            등록증 사본</p>
                                    </div>
                                    <div className="col-span-4 relative">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="파일 이름 기재 영역"/>
                                        <img className="absolute right-4 top-4" src={iconDownload.default.src}
                                             alt="iconDownload"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">사업자<br/>
                                            등록증 사본</p>
                                    </div>
                                    <div className="col-span-4 relative">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="파일 이름 기재 영역"/>
                                        <img className="absolute right-4 top-4" src={iconDownload.default.src}
                                             alt="iconDownload"/>
                                    </div>
                                </div>

                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">사업자<br/>
                                            등록증 사본</p>
                                    </div>
                                    <div className="col-span-4 relative">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="파일 이름 기재 영역"/>
                                        <img className="absolute right-4 top-4" src={iconDownload.default.src}
                                             alt="iconDownload"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">사업자<br/>
                                            등록증 사본</p>
                                    </div>
                                    <div className="col-span-4 relative">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="파일 이름 기재 영역"/>
                                        <img className="absolute right-4 top-4" src={iconDownload.default.src}
                                             alt="iconDownload"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">사업자<br/>
                                            등록증 사본</p>
                                    </div>
                                    <div className="col-span-4 relative">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="파일 이름 기재 영역"/>
                                        <img className="absolute right-4 top-4" src={iconDownload.default.src}
                                             alt="iconDownload"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">사업자<br/>
                                            등록증 사본</p>
                                    </div>
                                    <div className="col-span-4 relative">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="파일 이름 기재 영역"/>
                                        <img className="absolute right-4 top-4" src={iconDownload.default.src}
                                             alt="iconDownload"/>
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
