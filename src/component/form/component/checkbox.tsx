// Checkbox.tsx

import React from 'react';
import '../assets/css/style.css';

export default function Checkbox(props: {
    checked: boolean | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}) {
    return (
        <label className="custom-checkbox">
            <input type="checkbox" checked={props.checked} onChange={props.onChange}/>
            <span className="checkmark"></span>
        </label>
    );
}
