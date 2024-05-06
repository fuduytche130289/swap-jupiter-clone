import "./assets/css/styles.css";
import {useEffect, useRef} from "react";

export default function Model3() {
    const iconSearch = require('./assets/img/icon_search.svg');
    const iconClose = require('./assets/img/icon_close.svg');

    return (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50 flex items-center justify-center">
            <div
                className="z-40 bg-white p-[28px] w-[520px] text-black flex flex-col gap-[24px] h-[479px] relative container1"
            >
                {/*close*/}
                <div className="absolute top-0 -right-[13%] m-[16px] cursor-pointer">
                    <img src={iconClose.default.src} alt="iconClose"/>
                </div>
                {/*end close*/}
                <div>
                    <p className="text-black font-[600] text-[18px] leading-[21.48px]">담당자 이름을 검색해주세요.</p>
                </div>
                <div className="w-full border border-gray-200 rounded-[6px] bg-[#F9F9F9]">
                    <div className="p-[16px] flex gap-[10px]">
                        <img src={iconSearch.default.src} alt="iconSearch"/>
                        <input className="text-[#999] w-full outline-none bg-[#F9F9F9]" type="text"
                               placeholder="담당자 이름을 검색해주세요."/>
                    </div>
                </div>
                <div className="overflow-y-scroll">
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>
                    <div className="border-b border-b-gray-200 cursor-pointer hover:bg-[#f6f6fd]">
                        <p className="p-[12px] text-black hover:text-[#4A45D8] font-[500] text-[14px] leading-[14px]">김하필</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
