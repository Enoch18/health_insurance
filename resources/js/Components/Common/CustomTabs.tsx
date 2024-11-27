import React from "react";
import TextInput from "../TextInput";

interface TabProps{
    label: string;
    route?: string;
}

interface Props{
    tabs: TabProps[];
    defaultValue?: string;
}

const CustomTabs = ({tabs, defaultValue}: Props) => {
    return (
        <div className="flex flex-row mt-2">
            <div className="w-[300px]">
                <TextInput 
                    className="w-[100%] h-10"
                    placeholder="Search..."
                />
            </div>

            <div className="flex flex-row flex-1 justify-end">
                <select className="text-black w-[200px] rounded text-center h-10" defaultValue={defaultValue ?? ''}>
                    <option value={""}>--Filter By--</option>
                    {tabs.map((item:any, index: number) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default CustomTabs;