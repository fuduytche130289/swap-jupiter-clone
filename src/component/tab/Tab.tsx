'use client';
import Swap from "@/component/swapDemo";
import SwapUI from "@/component/swapUI";
import {useState} from "react";
import Table from "@/component/table/table";

import Form from "@/component/form";
import Model3 from "@/component/modal/model3";
import TableSwap from "@/component/tableSwap";
import FormReactHook from "@/component/form/formReactHook";

export default function Tab() {
    const [activeTab, setActiveTab] = useState('Tab1');
    return (
        <div>
            <div className="w-full flex justify-center gap-5 m-5">
                <button onClick={() => setActiveTab('Tab1')}>SwapUI</button>
                <button onClick={() => setActiveTab('Tab2')}>SwapDemo</button>
            </div>
            {activeTab === 'Tab1' && <div><SwapUI/></div>}
            {activeTab === 'Tab2' && <div><Swap/></div>}
            {/*<FormReactHook/>*/}
        </div>
    );
}
