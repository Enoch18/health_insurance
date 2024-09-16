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
        <div className='flex flex-row gap-3 items-center bg-gray-300 dark:bg-gray-700 p-1'>
            {tabs.map((items:TabProps, index:number) => (
                <button className={`min-w-[100px] border rounded py-1 px-5`} key={index}>
                    {items.label}
                </button>
            ))}
        </div>
    )
}

export default CustomTabs;