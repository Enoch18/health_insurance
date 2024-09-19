import React from "react";

interface TabProps{
    label: string;
    route?: string;
}

interface Props{
    tabs: TabProps[]
}

const CustomTabs = ({tabs}: Props) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-6 gap-2 bg-gray-300 dark:bg-gray-700 p-1 overflow-x-scroll'>
            {tabs.map((items:TabProps, index:number) => (
                <button className={`min-w-[110px] border rounded py-1 px-5`} key={index}>
                    {items.label}
                </button>
            ))}
        </div>
    )
}

export default CustomTabs;