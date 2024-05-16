'use client';
import Swap from "@/component/swapDemo";
import SwapUI from "@/component/swapUI";
import {useState} from "react";
import Table from "@/component/table/table";

import Form from "@/component/form";
import Model3 from "@/component/modal/model3";
import TableSwap from "@/component/tableSwap";
import FormReactHook2 from "@/component/form/formReactHook2";
import Lucky from "@/component/lucky";
import Modal1 from "@/component/modal/modal1";
import Modal2 from "@/component/modal/modal2";
import FormResponsive from "@/component/form/formResponsive";

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
            {/*<Form/>*/}
            {/*<Model3/>*/}

            {/*<FormResponsive/>*/}
            {/*<FormReactHook2/>*/}
            {/*<Lucky/>*/}
        </div>
    );
}
