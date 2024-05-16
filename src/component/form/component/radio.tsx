import React from 'react';
import '../assets/css/style.css';

// @ts-ignore
const RadioButton = ({label, name, value, checked, onChange}) => {
    return (
        <label className="radio-button">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <span className="radio-button__indicator"></span>
            {label}
        </label>
    );
};

export default RadioButton;
