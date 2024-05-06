export default function Modal1() {
    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div
                className="bg-white py-[40px] w-[400px] text-black flex flex-col justify-center items-center gap-[24px]">
                <div>
                    <p className="text-black font-[600] text-[18px] leading-[28px] text-center">하단 저장 버튼을 눌러서<br/>
                        변경값을 반영해주세요.</p>
                </div>
                <button className="bg-[#4A45D8] rounded-[6px]">
                    <p className="py-[14px] px-[41.5px] text-white font-[600] text-[14px] leading-[20px]">확인</p>
                </button>
            </div>
        </div>
    );
}
