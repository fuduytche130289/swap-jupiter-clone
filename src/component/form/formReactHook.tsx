import React from "react";
import {useForm, SubmitHandler} from "react-hook-form"
import "./assets/css/style.css"

const iconArrowRight = require('./assets/img/icon_arrow_right.svg');
const iconDownload = require('./assets/img/icon_download.svg');

type Inputs = {
    example: string
    exampleRequired: string
}
export default function FormReactHook() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Inputs>()
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
                            <p className="font-[700] text-[18px] leading-[21.48px]">사용자 상세</p>
                            <form className="mt-[32px] flex flex-col gap-[24px]" onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">회원 ID</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            defaultValue="test" {...register("example")}
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="회원 ID 노출 영역(ex.userid@email.com)"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">회원이름</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="회원 이름 노출 영역"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">회원 닉네임</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="회원 닉네임 노출 영역"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">회원 가입일</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="YYYY-MM-DD"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">가입구분</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="일반회원 or 소셜연동 회원"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">최근 로그인</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="YYYY-MM-DD(HH:MM:SS) "/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">회원등급</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="등급명 노출"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">지난 3개월<br/>
                                            누적구매금액</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="0,000"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">지난 3개월<br/>
                                            누적활동지수</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="0,000"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">보유 적립금</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="0,000"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">다음달<br/>
                                            소멸 적립금</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="0,000"/>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="mt-[40px]">
                            <p className="font-[700] text-[18px] leading-[21.48px]">최근 1개월 구매내역</p>
                            <div className="mt-[16px] border border-[#ddd]">
                                <div className="p-[28px] max-h-[338px] overflow-y-scroll">
                                    <table className="w-full text-black ">
                                        <thead className="text-[#999999] font-[600] text-[14px] leading-[16.71px]">
                                        <tr className="bg-[#f9f9f9]">
                                            <th className="py-[15px]">주문번호</th>
                                            <th>주문일자</th>
                                            <th>카테고리</th>
                                            <th>입점사</th>
                                            <th>브랜드</th>
                                            <th>상품명</th>
                                            <th>결제수단</th>
                                            <th>최종판매가</th>
                                            <th>할인</th>
                                            <th>배송상태</th>
                                            <th>구매상태</th>
                                            <th>상세</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="text-center border-b border-b-[#f0f0f0]">
                                            <td className="py-[15px]">00000-00000</td>
                                            <td>2024-04-20</td>
                                            <td>대분류명</td>
                                            <td>입점사A</td>
                                            <td>브랜드A</td>
                                            <td>상품명상품명상...</td>
                                            <td>신용카드</td>
                                            <td>0,000</td>
                                            <td>0,000</td>
                                            <td>배송 중</td>
                                            <td>확정대기</td>
                                            <td>
                                                <button className="bg-[#f9f9f9] rounded-[6px]">
                                                    <p className="text-[12px] font-[600] leading-[14.32px] py-[6px] px-[12px] text-[#999]">상세</p>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="text-center border-b border-b-[#f0f0f0]">
                                            <td className="py-[15px]">00000-00000</td>
                                            <td>2024-04-20</td>
                                            <td>대분류명</td>
                                            <td>입점사A</td>
                                            <td>브랜드A</td>
                                            <td>상품명상품명상...</td>
                                            <td>신용카드</td>
                                            <td>0,000</td>
                                            <td>0,000</td>
                                            <td>배송 중</td>
                                            <td>확정대기</td>
                                            <td>
                                                <button className="bg-[#f9f9f9] rounded-[6px]">
                                                    <p className="text-[12px] font-[600] leading-[14.32px] py-[6px] px-[12px] text-[#999]">상세</p>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="text-center border-b border-b-[#f0f0f0]">
                                            <td className="py-[15px]">00000-00000</td>
                                            <td>2024-04-20</td>
                                            <td>대분류명</td>
                                            <td>입점사A</td>
                                            <td>브랜드A</td>
                                            <td>상품명상품명상...</td>
                                            <td>신용카드</td>
                                            <td>0,000</td>
                                            <td>0,000</td>
                                            <td>배송 중</td>
                                            <td>확정대기</td>
                                            <td>
                                                <button className="bg-[#f9f9f9] rounded-[6px]">
                                                    <p className="text-[12px] font-[600] leading-[14.32px] py-[6px] px-[12px] text-[#999]">상세</p>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="text-center border-b border-b-[#f0f0f0]">
                                            <td className="py-[15px]">00000-00000</td>
                                            <td>2024-04-20</td>
                                            <td>대분류명</td>
                                            <td>입점사A</td>
                                            <td>브랜드A</td>
                                            <td>상품명상품명상...</td>
                                            <td>신용카드</td>
                                            <td>0,000</td>
                                            <td>0,000</td>
                                            <td>배송 중</td>
                                            <td>확정대기</td>
                                            <td>
                                                <button className="bg-[#f9f9f9] rounded-[6px]">
                                                    <p className="text-[12px] font-[600] leading-[14.32px] py-[6px] px-[12px] text-[#999]">상세</p>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="text-center border-b border-b-[#f0f0f0]">
                                            <td className="py-[15px]">00000-00000</td>
                                            <td>2024-04-20</td>
                                            <td>대분류명</td>
                                            <td>입점사A</td>
                                            <td>브랜드A</td>
                                            <td>상품명상품명상...</td>
                                            <td>신용카드</td>
                                            <td>0,000</td>
                                            <td>0,000</td>
                                            <td>배송 중</td>
                                            <td>확정대기</td>
                                            <td>
                                                <button className="bg-[#f9f9f9] rounded-[6px]">
                                                    <p className="text-[12px] font-[600] leading-[14.32px] py-[6px] px-[12px] text-[#999]">상세</p>
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[40px]">
                            <form className="mt-[32px] flex flex-col gap-[24px]" onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">사용자 SNS</p>
                                    </div>
                                    <div className="col-span-2">
                                        <button className="bg-[#ddd] rounded-[6px]">
                                            <p className="font-[600] text-[14px] leading-[20px] px-[29.5px] py-[14px]">바로가기</p>
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">지난 3개월<br/>
                                            누적출석</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="00"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">지난 3개월<br/>
                                            누적게시글</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="0,000"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">지난 3개월<br/>
                                            누적댓글</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="0,000"/>
                                    </div>
                                    <div className="col-span-1"></div>
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">지난 3개월<br/>
                                            누적상품태그</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="0,000"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-11">
                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">사용자<br/>
                                            제재 상태</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="정상 OR 제재"/>
                                    </div>
                                    <div className="col-span-1"></div>

                                    <div className="col-span-1 flex justify-start items-center">
                                        <p className="text-[14px] font-[600] leading-[16.71px] text-[#222]">제재 내용</p>
                                    </div>
                                    <div className="col-span-4">
                                        <input
                                            className="text-[#999] px-[12px] py-[15.5px] w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9] outline-none"
                                            placeholder="정상 OR 제재"/>
                                    </div>
                                </div>
                            </form>
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
