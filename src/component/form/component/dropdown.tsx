import React, {useState} from 'react';

const CustomSelect = ({options, defaultValue, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    const handleOptionClick = (value) => {
        setSelectedOption(value);
        onSelect(value);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <div className="w-full border border-[#DDD] rounded-[6px]"
                 style={{boxShadow: `0px 0px 20px 0px #0000000D`}} onClick={() => setIsOpen(!isOpen)}>
                <div className="w-full px-[12px] py-[15.5px]  flex justify-between cursor-pointer">
                    <p className="font-[500] text-[14px] leading-[16.71px]">{selectedOption}</p>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6L8 10L12 6" stroke="#999999" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="absolute top-[55px] z-[9999]">
                {isOpen && (
                    <ul className="w-[310px] bg-white rounded-[6px]" style={{boxShadow: `0px 0px 20px 0px #0000000D`}}>
                        {options.map((option, index) => (
                            <li className={`w-full ${option.value == selectedOption ? 'bg-[#F0F0F0]' : 'bg-white'} ${index == 0 ? 'rounded-t-[6px]' : ''} ${index == options.length - 1 ? 'rounded-b-[6px]' : ''}`}
                                key={index}
                                onClick={() => handleOptionClick(option.value)}>
                                <p className="w-full px-[12px] py-[15.5px] cursor-pointer font-[500] text-[14px] leading-[16.71px]">{option.label}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CustomSelect;
