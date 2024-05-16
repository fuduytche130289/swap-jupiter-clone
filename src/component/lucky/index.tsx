export default function Lucky() {
    return <div>
        <div>
            {/*header*/}
            <div
                className="fixed h-[87px] w-full bg-[#161720] px-[16px] lg:px-[36px] border-[0.5px] border-[#262936] z-10">
                <div className="w-full flex justify-between items-center h-full"><a href="/"><img alt="Lucky"
                                                                                                  loading="lazy"
                                                                                                  width="156"
                                                                                                  height="39"
                                                                                                  decoding="async"
                                                                                                  data-nimg="1"
                                                                                                  className="transition-all duration-300 ease-in-out"
                                                                                                  src="https://pro-luckx.renec.city/_next/image?url=%2Flogo.png&w=256&q=75"
                                                                                                  style={{color: "transparent"}}/></a>
                    <div className="flex gap-2">
                        <div
                            className="cursor-pointer border border-white/10 rounded-2xl gap-2 flex justify-center items-center px-4"
                            aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0:"
                            data-state="closed">
                            <div className="w-6 h-6 relative rounded-full"><img alt="" loading="lazy" decoding="async"
                                                                                data-nimg="fill"
                                                                                className="object-cover" sizes="100vw"
                                                                                src="https://pro-luckx.renec.city/_next/image?url=%2Frenec.png&w=640&q=75"
                                                                                style={{
                                                                                    position: "absolute",
                                                                                    height: "100%",
                                                                                    width: "100%",
                                                                                    inset: "0px",
                                                                                    color: "transparent"
                                                                                }}/>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="text-white/30">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </div>
                        <button
                            className="rounded-[12px] text-[14px] lg:text-[16px] py-[10px] px-[33px] font-[500] lg:font[700] disabled:pointer-events-none disabled:bg-background-disable disabled:text-text-secondary text-white bg-[#d12e78] hover:bg-primary/90">Connect
                            wallet
                        </button>
                    </div>
                </div>
            </div>
            {/*end header*/}
            {/*sidebar*/}
            <div
                className="fixed left-0 flex flex-col h-full bg-[#161720] w-[240px] px-[16px] divide-y divide-[#232627]">
                <div className="flex flex-col py-[16px] gap-1"><label
                    className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-text-main text-[14px] mb-[4px] font-[500]">GAMES</label><a
                    href="/battles">
                    <div className="flex rounded-[12px] px-[20px] py-[16px] gap-[12px] items-center hover:bg-white/10">
                        <span className="w-[30px]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 20 20" fill="none"><path
                            d="M0.40607 19.594C0.277264 19.4654 0.17508 19.3126 0.105361 19.1444C0.0356417 18.9763 -0.000244141 18.796 -0.000244141 18.614C-0.000244141 18.432 0.0356417 18.2517 0.105361 18.0836C0.17508 17.9154 0.277264 17.7626 0.40607 17.634L3.34507 14.696L1.38507 12.736C1.12516 12.4761 0.979141 12.1236 0.979141 11.756C0.979141 11.3884 1.12516 11.0359 1.38507 10.776C1.64498 10.5161 1.9975 10.3701 2.36507 10.3701C2.73264 10.3701 3.08516 10.5161 3.34507 10.776L9.22307 16.655C9.48298 16.9149 9.629 17.2674 9.629 17.635C9.629 18.0026 9.48298 18.3551 9.22307 18.615C8.96316 18.8749 8.61064 19.0209 8.24307 19.0209C7.8755 19.0209 7.52298 18.8749 7.26307 18.615L5.30407 16.655L2.36507 19.595C2.23644 19.7238 2.08367 19.826 1.91552 19.8957C1.74736 19.9654 1.56711 20.0013 1.38507 20.0013C1.20303 20.0013 1.02278 19.9654 0.854625 19.8957C0.686467 19.826 0.533704 19.7238 0.405071 19.595L0.40607 19.594ZM19.0001 0H16.4951C16.2299 5.66374e-05 15.9756 0.105451 15.7881 0.293L5.73807 10.343L9.65807 14.261L19.7081 4.211C19.895 4.02359 20 3.76971 20.0001 3.505V1C20.0001 0.734784 19.8947 0.48043 19.7072 0.292893C19.5196 0.105357 19.2653 0 19.0001 0ZM16.6551 14.696L18.6151 12.736C18.875 12.4761 19.021 12.1236 19.021 11.756C19.021 11.3884 18.875 11.0359 18.6151 10.776C18.3552 10.5161 18.0026 10.3701 17.6351 10.3701C17.2675 10.3701 16.915 10.5161 16.6551 10.776L10.7771 16.655C10.6484 16.7837 10.5463 16.9365 10.4766 17.1046C10.407 17.2728 10.3711 17.453 10.3711 17.635C10.3711 17.817 10.407 17.9972 10.4766 18.1654C10.5463 18.3335 10.6484 18.4863 10.7771 18.615C10.9058 18.7437 11.0585 18.8458 11.2267 18.9154C11.3948 18.9851 11.5751 19.0209 11.7571 19.0209C11.9391 19.0209 12.1193 18.9851 12.2874 18.9154C12.4556 18.8458 12.6084 18.7437 12.7371 18.615L14.6961 16.655L17.6351 19.595C17.895 19.8549 18.2475 20.0009 18.6151 20.0009C18.9826 20.0009 19.3352 19.8549 19.5951 19.595C19.855 19.3351 20.001 18.9826 20.001 18.615C20.001 18.2474 19.855 17.8949 19.5951 17.635L16.6551 14.696ZM3.50507 0H1.00007C0.734854 0 0.4805 0.105357 0.292964 0.292893C0.105427 0.48043 7.05719e-05 0.734784 7.05719e-05 1V3.505C0.000127209 3.7702 0.105521 4.02451 0.293071 4.212L4.66807 8.586L8.58607 4.667L4.21207 0.293C4.02458 0.105451 3.77027 5.66374e-05 3.50507 0Z"
                            fill="#FE4B9B"></path></svg></span><span
                        className="text-[16px] text-text-main font-[500]">Battle</span></div>
                </a><a href="/jackpots">
                    <div className="flex rounded-[12px] px-[20px] py-[16px] gap-[12px] items-center hover:bg-white/10">
                        <span className="w-[30px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none"><g
                            clip-path="url(#clip0_52_2150)"><path
                            d="M6.42864 9.75806C5.69954 10.1286 4.88901 10.3101 4.0715 10.2856C3.25399 10.3101 2.44345 10.1286 1.71436 9.75806V19.3178C1.92796 19.2962 2.14252 19.2855 2.35721 19.2856C3.17472 19.2612 3.98526 19.4426 4.71436 19.8132V16.7142C4.71436 16.0285 5.39321 15.4645 6.42864 15.1863V9.75806Z"
                            fill="#FEE13B"></path><path
                            d="M2.35714 21.8571C3.65896 21.8571 4.71429 21.4734 4.71429 21C4.71429 20.5266 3.65896 20.1428 2.35714 20.1428C1.05533 20.1428 0 20.5266 0 21C0 21.4734 1.05533 21.8571 2.35714 21.8571Z"
                            fill="#FEE13B"></path><path
                            d="M0 22.1865V23.1427C0 23.4855 0.939857 23.9998 2.35714 23.9998C3.77443 23.9998 4.71429 23.4855 4.71429 23.1427V22.1865C3.98519 22.5571 3.17465 22.7385 2.35714 22.7141C1.53964 22.7385 0.729099 22.5571 0 22.1865Z"
                            fill="#FEE13B"></path><path
                            d="M12.6518 3.91279C12.9687 4.15078 13.3539 4.28046 13.7502 4.28264C13.3788 3.64488 13.0849 2.96507 12.8746 2.25764C12.8111 2.02959 12.9444 1.7932 13.1725 1.72964C13.4005 1.66609 13.6369 1.79945 13.7005 2.0275C13.9392 2.83268 14.3041 3.59488 14.7818 4.28564H15.2223C15.7009 3.59562 16.0658 2.83339 16.3032 2.02793C16.3666 1.79976 16.603 1.66621 16.8312 1.72964C17.0594 1.79308 17.1929 2.02947 17.1295 2.25764C16.9194 2.96446 16.6258 3.64369 16.2548 4.28093C16.6432 4.27498 17.0198 4.1461 17.3305 3.91279C18.3338 3.1285 18.6856 1.88136 18.8013 0.972785C18.8245 0.817089 18.7525 0.662616 18.6183 0.580214C18.4705 0.483828 18.2797 0.483828 18.1319 0.580214C17.8317 0.768487 17.4829 0.864732 17.1286 0.857071C16.6322 0.861083 16.1532 0.673855 15.7911 0.334214C15.5792 0.120331 15.2907 0 14.9896 0C14.6886 0 14.4 0.120331 14.1882 0.334214C13.8261 0.673601 13.3473 0.860797 12.8511 0.857071C12.4985 0.864847 12.1513 0.769197 11.8525 0.581928C11.78 0.535613 11.6959 0.510795 11.6099 0.510357C11.5228 0.510651 11.4375 0.535613 11.3639 0.582357C11.2303 0.664559 11.1587 0.818511 11.1818 0.973643C11.2988 1.88221 11.6493 3.1285 12.6518 3.91279Z"
                            fill="#FEE13B"></path><path
                            d="M6.64279 3.4284C7.9446 3.4284 8.99993 3.04464 8.99993 2.57125C8.99993 2.09787 7.9446 1.71411 6.64279 1.71411C5.34097 1.71411 4.28564 2.09787 4.28564 2.57125C4.28564 3.04464 5.34097 3.4284 6.64279 3.4284Z"
                            fill="#FEE13B"></path><path
                            d="M4.0715 9.4284C5.37331 9.4284 6.42864 9.04464 6.42864 8.57125C6.42864 8.09787 5.37331 7.71411 4.0715 7.71411C2.76968 7.71411 1.71436 8.09787 1.71436 8.57125C1.71436 9.04464 2.76968 9.4284 4.0715 9.4284Z"
                            fill="#FEE13B"></path><path
                            d="M23.6644 13.8125C22.2698 7.89347 18.5464 5.47204 17.4136 4.85918C17.205 4.96059 16.9842 5.03477 16.7566 5.0799L17.5525 5.82261C17.6357 5.90016 17.6847 6.0076 17.6886 6.12126C17.6925 6.23492 17.6511 6.34549 17.5735 6.42861C17.496 6.5118 17.3885 6.56076 17.2749 6.5647C17.1612 6.56864 17.0506 6.52723 16.9675 6.44961L15.5678 5.1429H15.4306V6.42861C15.4306 6.6653 15.2388 6.85718 15.0021 6.85718C14.7654 6.85718 14.5735 6.6653 14.5735 6.42861V5.1429H14.4364L13.0366 6.44961C12.9535 6.52723 12.843 6.56864 12.7293 6.5647C12.6156 6.56076 12.5082 6.5118 12.4306 6.42861C12.353 6.34554 12.3115 6.23501 12.3153 6.12135C12.3192 6.00768 12.3681 5.90022 12.4512 5.82261L13.2428 5.08418C13.0137 5.03962 12.7913 4.96573 12.5811 4.86432C11.5155 5.46474 10.5548 6.23468 9.73664 7.1439C9.73322 7.14732 9.73022 7.15118 9.72679 7.15504C9.41385 7.49691 9.11943 7.85528 8.84479 8.22861C8.70281 8.41334 8.43926 8.45081 8.25142 8.31296C8.06358 8.17511 8.02028 7.91246 8.15393 7.72161C8.43379 7.34018 8.71793 6.99604 8.99993 6.68018V3.75732C8.27091 4.1282 7.46037 4.30991 6.64279 4.28575C5.82528 4.31018 5.01474 4.12876 4.28564 3.75818V6.86275C6.00979 6.91804 7.28564 7.63418 7.28564 8.57147V15.0322C7.49925 15.0106 7.71381 14.9999 7.9285 15C9.76064 15 11.1428 15.7372 11.1428 16.7143V21.4286H18.9385C19.3864 21.4286 21.6886 21.3429 23.0151 19.6715C24.0522 18.36 24.2708 16.389 23.6644 13.8125ZM17.1428 13.7143C17.1428 14.6611 16.3753 15.4286 15.4285 15.4286V15.8572C15.4285 16.0939 15.2366 16.2858 14.9999 16.2858C14.7632 16.2858 14.5714 16.0939 14.5714 15.8572V15.4286C13.6246 15.4286 12.8571 14.6611 12.8571 13.7143C12.8571 13.4776 13.049 13.2858 13.2856 13.2858C13.5223 13.2858 13.7142 13.4776 13.7142 13.7143C13.7142 14.1877 14.098 14.5715 14.5714 14.5715V12.8572C13.6246 12.8572 12.8571 12.0897 12.8571 11.1429C12.8571 10.1961 13.6246 9.42861 14.5714 9.42861V9.00004C14.5714 8.76335 14.7632 8.57147 14.9999 8.57147C15.2366 8.57147 15.4285 8.76335 15.4285 9.00004V9.42861C16.3753 9.42861 17.1428 10.1961 17.1428 11.1429C17.1428 11.3796 16.9509 11.5715 16.7142 11.5715C16.4775 11.5715 16.2856 11.3796 16.2856 11.1429C16.2856 10.6695 15.9019 10.2858 15.4285 10.2858V12C16.3753 12 17.1428 12.7676 17.1428 13.7143ZM22.3435 19.137C21.2618 20.5025 19.3174 20.5715 18.9385 20.5715C18.7018 20.5715 18.5099 20.3796 18.5099 20.1429C18.5099 19.9062 18.7018 19.7143 18.9385 19.7143C19.2484 19.7143 20.8349 19.6608 21.6711 18.6048C22.0665 18.0461 22.2773 17.3778 22.2741 16.6933C22.2883 16.4583 22.4874 16.2774 22.7228 16.2858C22.8363 16.2912 22.9431 16.3415 23.0195 16.4257C23.096 16.5098 23.1358 16.6209 23.1304 16.7345C23.1267 17.5981 22.8514 18.4386 22.3435 19.137Z"
                            fill="#FEE13B"></path><path
                            d="M13.7144 11.1428C13.7144 11.6162 14.0981 11.9999 14.5715 11.9999V10.2856C14.0981 10.2856 13.7144 10.6694 13.7144 11.1428Z"
                            fill="#FEE13B"></path><path
                            d="M15.4285 14.5715C15.9019 14.5715 16.2856 14.1877 16.2856 13.7143C16.2856 13.2409 15.9019 12.8572 15.4285 12.8572V14.5715Z"
                            fill="#FEE13B"></path><path
                            d="M5.57153 17.9009V22.2856C5.57153 22.6284 6.51139 23.1427 7.92868 23.1427C9.34596 23.1427 10.2858 22.6284 10.2858 22.2856V17.9009C9.55672 18.2715 8.74618 18.4529 7.92868 18.4284C7.11117 18.4529 6.30063 18.2715 5.57153 17.9009Z"
                            fill="#FEE13B"></path><path
                            d="M7.92868 17.5715C9.23049 17.5715 10.2858 17.1877 10.2858 16.7143C10.2858 16.2409 9.23049 15.8572 7.92868 15.8572C6.62686 15.8572 5.57153 16.2409 5.57153 16.7143C5.57153 17.1877 6.62686 17.5715 7.92868 17.5715Z"
                            fill="#FEE13B"></path><path
                            d="M20.4428 2.99996C20.4428 3.70282 19.68 4.27711 18.7285 4.28568C18.5686 4.286 18.409 4.26875 18.2528 4.23425C18.23 4.263 18.2025 4.28764 18.1714 4.30711C18.24 4.34996 18.3171 4.39711 18.3985 4.44425C18.66 4.61568 18.9642 4.82568 19.2985 5.08711C19.3328 5.11282 19.3628 5.13854 19.3971 5.16854C21.5314 5.32711 22.2085 6.21853 22.23 6.24425C22.3108 6.36073 22.4439 6.42972 22.5857 6.42854C22.6699 6.42953 22.7524 6.40404 22.8214 6.35568C23.0169 6.22489 23.0705 5.96091 22.9414 5.76425C22.9071 5.71282 22.3157 4.86425 20.5885 4.47425C21.0294 4.11016 21.2893 3.57166 21.3 2.99996C21.2413 2.0488 20.5798 1.24222 19.6585 0.998535C19.6578 1.02728 19.6549 1.05593 19.65 1.08425C19.617 1.34551 19.5683 1.60455 19.5042 1.85996C20.022 2.01046 20.3945 2.46296 20.4428 2.99996Z"
                            fill="#FEE13B"></path></g><defs><clipPath id="clip0_52_2150"><rect width="24" height="24"
                                                                                               fill="white"></rect></clipPath></defs></svg></span><span
                        className="text-[16px] text-text-main font-[500]">Jackpot</span></div>
                </a><a href="/lotteries">
                    <div className="flex rounded-[12px] px-[20px] py-[16px] gap-[12px] items-center hover:bg-white/10">
                        <span className="w-[30px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none"><path
                            d="M16.6501 3.86011H9.91012V6.88011C9.91012 7.27011 9.59012 7.58011 9.21012 7.58011C8.83012 7.58011 8.51012 7.27011 8.51012 6.88011V3.86011H7.35012C3.40012 3.86011 2.10012 5.04011 2.01012 8.73011C2.00012 8.91011 2.08012 9.10011 2.21012 9.23011C2.34012 9.37011 2.51012 9.44011 2.71012 9.44011C4.11012 9.44011 5.26012 10.6001 5.26012 12.0001C5.26012 13.4001 4.11012 14.5601 2.71012 14.5601C2.52012 14.5601 2.34012 14.6301 2.21012 14.7701C2.08012 14.9001 2.00012 15.0901 2.01012 15.2701C2.10012 18.9601 3.40012 20.1401 7.35012 20.1401H8.51012V17.1201C8.51012 16.7301 8.83012 16.4201 9.21012 16.4201C9.59012 16.4201 9.91012 16.7301 9.91012 17.1201V20.1401H16.6501C20.7501 20.1401 22.0001 18.8901 22.0001 14.7901V9.21011C22.0001 5.11011 20.7501 3.86011 16.6501 3.86011ZM18.4701 11.9001L17.5401 12.8001C17.5001 12.8301 17.4901 12.8901 17.5001 12.9401L17.7201 14.2101C17.7601 14.4401 17.6701 14.6801 17.4701 14.8201C17.2801 14.9601 17.0301 14.9801 16.8201 14.8701L15.6701 14.2701C15.6301 14.2501 15.5701 14.2501 15.5301 14.2701L14.3801 14.8701C14.2901 14.9201 14.1901 14.9401 14.0901 14.9401C13.9601 14.9401 13.8401 14.9001 13.7301 14.8201C13.5401 14.6801 13.4401 14.4501 13.4801 14.2101L13.7001 12.9401C13.7101 12.8901 13.6901 12.8401 13.6601 12.8001L12.7301 11.9001C12.5601 11.7401 12.5001 11.4901 12.5701 11.2701C12.6401 11.0401 12.8301 10.8801 13.0701 10.8501L14.3501 10.6601C14.4001 10.6501 14.4401 10.6201 14.4701 10.5801L15.0401 9.42011C15.1501 9.21011 15.3601 9.08011 15.6001 9.08011C15.8401 9.08011 16.0501 9.21011 16.1501 9.42011L16.7201 10.5801C16.7401 10.6301 16.7801 10.6601 16.8301 10.6601L18.1101 10.8501C18.3501 10.8801 18.5401 11.0501 18.6101 11.2701C18.7001 11.4901 18.6401 11.7301 18.4701 11.9001Z"
                            fill="#A249FC"></path></svg></span><span
                        className="text-[16px] text-text-main font-[500]">Lotteries</span></div>
                </a></div>
                <div className="flex flex-col py-[16px] gap-1"><label
                    className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-text-main uppercase text-[14px] mb-[4px] font-[500]">Others</label>
                    <a href="/referrals">
                        <div
                            className="flex rounded-[12px] px-[20px] py-[16px] gap-[12px] items-center hover:bg-white/10">
                            <span className="w-[30px]"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="24"
                                                            viewBox="0 0 18 21" fill="none" className="fill-primary"><path
                                d="M11.8608 10.8367L13.8664 11.2347C13.8872 12.2184 14.7015 12.9991 15.6852 12.9783C16.6689 12.9575 17.4496 12.1432 17.4288 11.1595C17.408 10.1757 16.5937 9.39511 15.61 9.41589C14.9191 9.43047 14.299 9.84326 14.0189 10.475L11.9613 10.0666C11.9592 9.31365 11.6661 8.59064 11.1435 8.04868L13.8066 4.28654C14.9299 4.82065 16.2735 4.34301 16.8076 3.21972C17.3417 2.09642 16.8641 0.752853 15.7408 0.218739C14.6175 -0.315375 13.2739 0.162267 12.7398 1.28556C12.3321 2.14306 12.5059 3.16412 13.1745 3.83835L10.537 7.56412C9.32409 6.83564 7.76359 7.08047 6.83195 8.14531L3.36945 5.45628C3.82395 4.58145 3.48322 3.50377 2.60839 3.04928C1.73355 2.59479 0.655876 2.93551 0.201385 3.81035C-0.253106 4.68519 0.0876165 5.76286 0.962454 6.21735C1.57716 6.53672 2.32113 6.47162 2.87099 6.05036L6.40027 8.7912C5.81385 9.98928 6.11272 11.4324 7.12675 12.299L4.98192 15.3315C3.84642 14.6424 2.36724 15.0043 1.67814 16.1398C0.989043 17.2753 1.35093 18.7545 2.48648 19.4436C3.62198 20.1327 5.10116 19.7708 5.79026 18.6353C6.32578 17.7528 6.23845 16.627 5.57318 15.8377L7.7759 12.7225C8.52951 13.0808 9.40023 13.1003 10.1691 12.7762L12.7827 16.637C12.014 17.4497 12.0497 18.7317 12.8624 19.5004C13.6751 20.269 14.9571 20.2333 15.7258 19.4206C16.4944 18.608 16.4587 17.326 15.646 16.5573C15.0468 15.9905 14.1637 15.8437 13.4133 16.1862L10.8374 12.381C11.3362 11.9901 11.6953 11.4484 11.8608 10.8367Z"
                                fill="inherit"></path></svg></span><span
                            className="text-[16px] text-text-main font-[500]">Referrals</span></div>
                    </a><a href="/rewards">
                        <div
                            className="flex rounded-[12px] px-[20px] py-[16px] gap-[12px] items-center hover:bg-white/10">
                            <span className="w-[30px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none"><path
                                d="m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47c-.19.8-1.21 1.05-1.74.42l-2.99-3.44a.499.499 0 0 1 .25-.81 8.492 8.492 0 0 0 4.53-2.83c.19-.23.53-.26.74-.05l2.22 2.22c.76.76.49 1.71-.27 1.89ZM2.7 18.47l1.65.39c.37.09.66.37.74.74l.35 1.47c.19.8 1.21 1.05 1.74.42l2.99-3.44c.24-.28.11-.72-.25-.81a8.492 8.492 0 0 1-4.53-2.83.499.499 0 0 0-.74-.05l-2.22 2.22c-.76.76-.49 1.71.27 1.89ZM12 2C8.13 2 5 5.13 5 9c0 1.45.43 2.78 1.17 3.89a6.985 6.985 0 0 0 4.78 3.02c.34.06.69.09 1.05.09.36 0 .71-.03 1.05-.09 1.99-.29 3.7-1.42 4.78-3.02A6.968 6.968 0 0 0 19 9c0-3.87-3.13-7-7-7Zm3.06 6.78-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.701.701 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.85-.83c-.49-.49-.33-.98.35-1.09l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.32-.64.84-.64 1.16 0l.59 1.18c.08.16.29.32.48.35l1.07.18c.67.11.83.6.34 1.09Z"
                                fill="#fbb836"></path></svg></span><span
                            className="text-[16px] text-text-main font-[500]">Rewards</span></div>
                    </a><a href="/mint">
                        <div
                            className="flex rounded-[12px] px-[20px] py-[16px] gap-[12px] items-center hover:bg-white/10">
                            <span className="w-[30px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none"><path
                                d="M19.17 6.64c-.43-2.17-2.04-3.12-4.28-3.12H6.11c-2.64 0-4.4 1.32-4.4 4.4v5.15c0 2.22.91 3.52 2.41 4.08.22.08.46.15.71.19.4.09.83.13 1.28.13h8.79c2.64 0 4.4-1.32 4.4-4.4V7.92c0-.47-.04-.89-.13-1.28ZM5.53 12c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v3Zm4.97 1.14c-1.46 0-2.64-1.18-2.64-2.64 0-1.46 1.18-2.64 2.64-2.64 1.46 0 2.64 1.18 2.64 2.64 0 1.46-1.18 2.64-2.64 2.64ZM16.96 12c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v3Z"
                                fill="#58e6de"></path><path
                                d="M22.302 10.918v5.15c0 3.08-1.76 4.41-4.41 4.41h-8.78c-.75 0-1.42-.11-2-.33-.47-.17-.88-.42-1.21-.74-.18-.17-.04-.44.21-.44h8.78c3.7 0 5.9-2.2 5.9-5.89v-5.16c0-.24.27-.39.44-.21.68.72 1.07 1.77 1.07 3.21Z"
                                fill="#58e6de"></path></svg></span><span
                            className="text-[16px] text-text-main font-[500]">Mint</span></div>
                    </a><a href="/earn">
                        <div
                            className="flex rounded-[12px] px-[20px] py-[16px] gap-[12px] items-center hover:bg-white/10 bg-background-overlay">
                            <span className="w-[30px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none"><path
                                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM7.63 18.15c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.07c0-.41.34-.75.75-.75s.75.34.75.75v2.07Zm5.12 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14c0-.41.34-.75.75-.75s.75.34.75.75v4.15Zm5.12 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6.22c0-.41.34-.75.75-.75s.75.34.75.75v6.22Zm0-9.38c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.8a19.532 19.532 0 0 1-9.31 5.36c-.06.02-.12.02-.18.02-.34 0-.64-.23-.73-.57-.1-.4.14-.81.55-.91a18.07 18.07 0 0 0 8.75-5.11H14.2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.93c.04 0 .07.02.11.02.05.01.1.01.15.03.05.02.09.05.14.08.03.02.06.03.09.05.01.01.01.02.02.02.04.04.07.08.1.12.03.04.06.07.07.11.02.04.02.08.03.13.01.05.03.1.03.16 0 .01.01.02.01.03v2.93h-.01Z"
                                fill="#6bfa70"></path></svg></span><span
                            className="text-[16px] font-[500] text-white">Earn</span></div>
                    </a><a href="/rankings">
                        <div
                            className="flex rounded-[12px] px-[20px] py-[16px] gap-[12px] items-center hover:bg-white/10">
                            <span className="w-[30px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none"><path
                                d="M6.67 14H4C2.9 14 2 14.9 2 16V21C2 21.55 2.45 22 3 22H6.67C7.22 22 7.67 21.55 7.67 21V15C7.67 14.45 7.22 14 6.67 14Z"
                                fill="#FFF7AC"></path><path
                                d="M13.3299 10H10.6599C9.55991 10 8.65991 10.9 8.65991 12V21C8.65991 21.55 9.10991 22 9.65991 22H14.3299C14.8799 22 15.3299 21.55 15.3299 21V12C15.3299 10.9 14.4399 10 13.3299 10Z"
                                fill="#FFF7AC"></path><path
                                d="M20.0001 17H17.3301C16.7801 17 16.3301 17.45 16.3301 18V21C16.3301 21.55 16.7801 22 17.3301 22H21.0001C21.5501 22 22.0001 21.55 22.0001 21V19C22.0001 17.9 21.1001 17 20.0001 17Z"
                                fill="#FFF7AC"></path><path
                                d="M15.0099 4.84998C15.3199 4.53998 15.4399 4.16998 15.3399 3.84998C15.2399 3.52998 14.9299 3.29998 14.4899 3.22998L13.5299 3.06998C13.4899 3.06998 13.3999 2.99998 13.3799 2.95998L12.8499 1.89998C12.4499 1.08998 11.5399 1.08998 11.1399 1.89998L10.6099 2.95998C10.5999 2.99998 10.5099 3.06998 10.4699 3.06998L9.50994 3.22998C9.06994 3.29998 8.76994 3.52998 8.65994 3.84998C8.55994 4.16998 8.67994 4.53998 8.98994 4.84998L9.72994 5.59998C9.76994 5.62998 9.79994 5.74998 9.78994 5.78998L9.57994 6.70998C9.41994 7.39998 9.67994 7.70998 9.84994 7.82998C10.0199 7.94998 10.3899 8.10998 10.9999 7.74998L11.8999 7.21998C11.9399 7.18998 12.0699 7.18998 12.1099 7.21998L12.9999 7.74998C13.2799 7.91998 13.5099 7.96998 13.6899 7.96998C13.8999 7.96998 14.0499 7.88998 14.1399 7.82998C14.3099 7.70998 14.5699 7.39998 14.4099 6.70998L14.1999 5.78998C14.1899 5.73998 14.2199 5.62998 14.2599 5.59998L15.0099 4.84998Z"
                                fill="#FFF7AC"></path></svg></span><span
                            className="text-[16px] text-text-main font-[500]">Ranking</span></div>
                    </a><a href="/ido">
                        <div
                            className="flex rounded-[12px] px-[20px] py-[16px] gap-[12px] items-center hover:bg-white/10">
                            <span className="w-[30px]"><svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" className="fill-green"><path
                                d="M3.64551 19.3109C3.64551 17.4784 3.64551 15.6459 3.64551 13.8134C3.64551 13.0449 4.23664 12.3651 4.97556 12.1582C6.33516 11.774 7.66521 11.8626 8.93615 12.5129C9.32038 12.7198 9.70462 12.8971 10.1184 13.0153C10.4435 13.104 10.7687 13.1631 11.0938 13.1631C11.6554 13.1927 12.2169 13.1631 12.7785 13.1631C13.1923 13.1631 13.4288 13.3996 13.3992 13.8134C13.3696 14.6114 12.9559 15.2025 12.2465 15.3503C12.1283 15.3799 11.9805 15.3799 11.8623 15.3799C10.7982 15.3799 9.70462 15.3799 8.64058 15.3799C8.4928 15.3799 8.31546 15.439 8.16768 15.5277C7.96078 15.6459 7.93122 15.8823 7.99033 16.0892C8.04945 16.3257 8.22679 16.4439 8.46324 16.4735C8.61103 16.4735 8.78836 16.4735 8.93615 16.4735C9.88196 16.4735 10.8573 16.4735 11.8031 16.4735C12.3056 16.4735 12.6898 16.2961 13.0445 15.971C13.813 15.173 14.611 14.4045 15.3795 13.636C16.414 12.6311 18.0692 12.6311 19.1036 13.6065C19.4288 13.902 19.4288 14.2272 19.1332 14.5523C17.8031 15.8823 16.4731 17.2124 15.143 18.5424C14.7588 18.9267 14.2859 19.1927 13.7243 19.2814C13.6948 19.2814 13.6652 19.3109 13.6357 19.3109C10.5913 20.1385 7.54699 20.3454 3.64551 19.3109Z"
                                fill="inherit"></path><path
                                d="M1.07421 19.3106C0.749086 19.1628 0.630859 18.9263 0.630859 18.5716C0.630859 17.1825 0.630859 15.8229 0.630859 14.4337C0.630859 13.9608 0.837756 13.7539 1.31066 13.7539C1.6949 13.7539 2.07914 13.7539 2.49293 13.7539C2.49293 15.616 2.49293 17.478 2.49293 19.3106C2.02002 19.3106 1.54712 19.3106 1.07421 19.3106Z"
                                fill="inherit"></path><path
                                d="M11.5966 0.0117188C8.37494 0.0117188 5.71484 2.67182 5.71484 5.92305C5.71484 9.17428 8.34539 11.8344 11.5966 11.8344C14.8478 11.8344 17.4784 9.17428 17.4784 5.92305C17.4488 2.64226 14.8183 0.0117188 11.5966 0.0117188ZM12.2764 8.79004C12.2173 9.11517 11.9217 9.35162 11.5966 9.35162C11.2715 9.35162 10.9759 9.11517 10.9168 8.79004C10.4735 8.64226 10.0597 8.37625 9.82322 7.99201C9.61632 7.66689 9.70499 7.2531 10.0301 7.0462C10.3552 6.8393 10.769 6.92797 10.9759 7.2531C11.0646 7.40088 11.3011 7.54866 11.5966 7.54866C12.0991 7.54866 12.2764 7.22354 12.2764 7.07576C12.2764 6.92798 12.0991 6.60285 11.5966 6.60285C10.5917 6.60285 9.52765 5.89349 9.52765 4.77034C9.52765 3.88364 10.1483 3.26295 10.9168 3.0265C10.9759 2.70137 11.2715 2.46492 11.5966 2.46492C11.9217 2.46492 12.2173 2.70137 12.2764 3.0265C12.6015 3.11517 12.9267 3.32206 13.1631 3.55852C13.4291 3.82453 13.4291 4.26788 13.1631 4.53389C12.8971 4.7999 12.4538 4.7999 12.1877 4.53389C12.0695 4.41566 11.8626 4.32699 11.6262 4.32699C11.1237 4.32699 10.9464 4.65211 10.9464 4.7999C10.9464 4.94768 11.1237 5.2728 11.6262 5.2728C12.6311 5.2728 13.6951 5.98216 13.6951 7.10531C13.6656 7.9329 13.0153 8.55359 12.2764 8.79004Z"
                                fill="inherit"></path></svg></span><span
                            className="text-[16px] text-text-main font-[500]">IDOs</span></div>
                    </a>
                    <div className="mt-2 p-2 rounded-xl bg-neutral-800 shadow ">
                        <div className="rounded-xl shadow-[0_0_7.6px_0_rgba(229,49,29,0.70)] overflow-clip"><a
                            href="/rankings"><img alt="website popup" loading="lazy" width="880" height="880"
                                                  decoding="async" data-nimg="1"
                                                  className="object-cover rounded-xl overflow-clip"
                                                  srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffebruary-2024-campaign.6ff9353a.png&amp;w=1080&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffebruary-2024-campaign.6ff9353a.png&amp;w=1920&amp;q=75 2x"
                                                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffebruary-2024-campaign.6ff9353a.png&amp;w=1920&amp;q=75"
                                                  style={{color: "transparent"}}/></a></div>
                    </div>
                    <label
                        className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mt-3 text-text-main uppercase text-[14px] mb-[4px] font-[500]">CONTACT
                        US</label>
                    <div className="flex flex-row justify-between items-center"><a target="_blank"
                                                                                   href="https://t.me/WesterosCity"><img
                        alt="telegram icon" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftelegram.7344dbba.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftelegram.7344dbba.png&amp;w=64&amp;q=75 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftelegram.7344dbba.png&amp;w=64&amp;q=75"
                        style={{color: "transparent"}}/></a><a target="_blank" href="https://discord.gg/bJUUZpuz64"><img
                        alt="discord icon" loading="lazy" width="33" height="32" decoding="async" data-nimg="1"
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscord.e94c1add.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscord.e94c1add.png&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscord.e94c1add.png&amp;w=96&amp;q=75"
                        style={{color: "transparent"}}/></a><a target="_blank"
                                                               href="https://twitter.com/WesterosCity"><img
                        alt="x icon" loading="lazy" width="33" height="32" decoding="async" data-nimg="1"
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fx.6ff08626.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fx.6ff08626.png&amp;w=96&amp;q=75 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fx.6ff08626.png&amp;w=96&amp;q=75"
                        style={{color: "transparent"}}/></a><a target="_blank"
                                                               href="https://medium.com/@WesterosCity"><img
                        alt="medium icon" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                        srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedium.9ff0c6ad.png&amp;w=32&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedium.9ff0c6ad.png&amp;w=64&amp;q=75 2x"
                        src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedium.9ff0c6ad.png&amp;w=64&amp;q=75"
                        style={{color: "transparent"}}/></a></div>
                </div>
            </div>
            {/*end sidebar*/}
            {/*body*/}
            <div className="pt-[87px] pl-[240px]">
                <div dir="ltr" data-orientation="horizontal"
                     className="w-full h-[calc(100vh_-_87px)] pt-[20px] px-[50px] bg-[#101117]">
                    <div role="tablist" aria-orientation="horizontal"
                         className="items-center justify-center rounded-[12px] bg-background-gray h-[48px] text-[16px] grid grid-cols-2 font-medium text-subtitle1 lg:max-w-[400px] w-full"
                         data-orientation="horizontal" style={{outline: "none"}}><a href="/earn?tab=overview">
                        <button type="button" role="tab" aria-selected="true"
                                aria-controls="radix-:r1:-content-overview"
                                data-state="active" id="radix-:r1:-trigger-overview"
                                className="inline-flex items-center justify-center whitespace-nowrap px-[24px] py-[12px] text-text-secondary group"
                                data-orientation="horizontal" data-radix-collection-item="">
                            <div className="flex gap-2 items-center">
                                <svg
                                    className="w-4 h-4 fill-text-secondary hidden md:block group-data-[state=active]: text-[#d12e78] group-data-[state=active]:fill-primary"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M20.91 11.12V6.73c0-.82-.62-1.75-1.39-2.06l-5.57-2.28a5.187 5.187 0 0 0-3.91 0L4.47 4.67c-.76.31-1.38 1.24-1.38 2.06v4.39c0 4.89 3.55 9.47 8.4 10.81.33.09.69.09 1.02 0 4.85-1.34 8.4-5.92 8.4-10.81Zm-8.16 1.75v2.63c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.63A2.497 2.497 0 0 1 9.5 10.5a2.5 2.5 0 0 1 5 0c0 1.12-.74 2.05-1.75 2.37Z"
                                        fill="currentColor"></path>
                                </svg>
                                <p className="group-data-[state=active]:text-white">Overview</p></div>
                        </button>
                    </a><a href="/earn?tab=my-staking">
                        <button type="button" role="tab" aria-selected="false"
                                aria-controls="radix-:r1:-content-my-staking"
                                data-state="inactive" id="radix-:r1:-trigger-my-staking"
                                className="inline-flex items-center justify-center whitespace-nowrap px-[24px] py-[12px] text-text-secondary group"
                                data-orientation="horizontal" data-radix-collection-item="">
                            <div className="flex gap-2 items-center">
                                <svg
                                    className="w-4 h-4 fill-text-secondary hidden md:block group-data-[state=active]: text-[#d12e78] group-data-[state=active]:fill-primary"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <path
                                        d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5Z"
                                        fill="currentColor"></path>
                                </svg>
                                <p className="group-data-[state=active]:text-white">My Staking</p></div>
                        </button>
                    </a></div>
                    <div data-state="active" data-orientation="horizontal" role="tabpanel"
                         aria-labelledby="radix-:r1:-trigger-overview" id="radix-:r1:-content-overview"
                         className="mt-[20px]">
                        <div className="flex flex-col gap-6 lg:gap-10">
                            <div className="flex lg:flex-row flex-col-reverse justify-between gap-4">
                                <div className="flex flex-col items-center lg:items-start justify-start gap-3 ">
                                    <div className="flex flex-col justify-start gap-3">
                                        <div className="text-[34px] font-bold text-center lg:text-left"><span
                                            className="text-[#d12e78]">Earn</span> up to <span
                                            className="text-[#d12e78]">21% APR</span>
                                        </div>
                                        <div className="">Unlock the power of your crypto holdings and maximize your
                                            potential earnings by staking on LuckX platform - where opportunity meets
                                            innovation
                                        </div>
                                    </div>
                                    <div className=""><a href="/earn?tab=my-staking">
                                        <button
                                            className="rounded-[12px] text-[14px] lg:text-[16px] py-[10px] px-[33px] font-[500] lg:font[700] disabled:pointer-events-none disabled:bg-background-disable disabled:text-text-secondary text-white bg-[#d12e78] hover:bg-primary/90">From
                                            Monday, March 11, 2024. WLUCK staking will stop receiving new position!
                                        </button>
                                    </a></div>
                                </div>
                                <img alt="earn-header-image" loading="lazy" width="495" height="248" decoding="async"
                                     data-nimg="1"
                                     src="https://pro-luckx.renec.city/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fearn-header.f0dbd5d0.png&w=640&q=75"
                                     style={{color: "transparent"}}/></div>
                            <div className="flex flex-col lg:flex-row justify-between gap-3 lg:gap-0">
                                <div
                                    className="rounded-[20px] bg-background-secondary text-white shadow active_style lg:w-[304px] w-full p-6">
                                    <div className="flex flex-row justify-start items-start gap-3">
                                        <div className=" rounded-full bg-primary/10 p-2"><img alt="Glyph" loading="lazy"
                                                                                              width="26" height="26"
                                                                                              decoding="async"
                                                                                              data-nimg="1"
                                                                                              src="https://pro-luckx.renec.city/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGlyph.c2e3ac5a.png&w=32&q=75"
                                                                                              style={{color: "transparent"}}/>
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <div className="font-bold text-[17px]  text-[#d12e78]">Globally Staked WLUCK
                                            </div>
                                            <div className="font-bold text-[20px]" data-state="closed">16.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-[20px] bg-background-secondary text-white shadow active_style lg:w-[304px] w-full p-6">
                                    <div className="flex flex-row justify-start items-start gap-3">
                                        <div className=" rounded-full bg-primary/10 p-2"><img alt="security"
                                                                                              loading="lazy"
                                                                                              width="26" height="26"
                                                                                              decoding="async"
                                                                                              data-nimg="1"
                                                                                              src="https://pro-luckx.renec.city/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGlyph.c2e3ac5a.png&w=32&q=75"
                                                                                              style={{color: "transparent"}}/>
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <div className="font-bold text-[17px]  text-[#d12e78]">Your Staked WLUCK
                                            </div>
                                            <div className="font-bold text-[20px]">0.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="rounded-[20px] bg-background-secondary text-white shadow active_style lg:w-[304px] w-full p-6">
                                    <div className="flex flex-row justify-start items-start gap-3">
                                        <div className=" rounded-full bg-primary/10 p-2"><img alt="profits"
                                                                                              loading="lazy"
                                                                                              width="26" height="26"
                                                                                              decoding="async"
                                                                                              data-nimg="1"
                                                                                              src="https://pro-luckx.renec.city/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGlyph.c2e3ac5a.png&w=32&q=75"
                                                                                              style={{color: "transparent"}}/>
                                        </div>
                                        <div className="flex flex-col justify-start items-start gap-2">
                                            <div className="font-bold text-[17px]  text-[#d12e78]">Your Earned WLUCK
                                            </div>
                                            <div className="font-bold text-[20px]">0.00</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-state="inactive" data-orientation="horizontal" role="tabpanel"
                         aria-labelledby="radix-:r1:-trigger-my-staking" id="radix-:r1:-content-my-staking"
                         className="mt-[20px]"></div>
                </div>
            </div>
            {/*end body*/}
        </div>
    </div>;
}
