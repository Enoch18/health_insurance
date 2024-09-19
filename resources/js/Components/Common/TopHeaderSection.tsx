import React from "react";
import { FaPlus } from "react-icons/fa";

interface Props{
    title: any;
    hideAddBtn?: boolean;
    addBtnRoute?: string;
}

const TopHeaderSection = ({title, hideAddBtn, addBtnRoute}: Props) => {
    return (
        <div className='flex flex-row my-2 items-center'>
            <h4 className="text-xl font-semibold">{title}</h4>
            
            {!hideAddBtn && (
                <div className='flex flex-row justify-end flex-1'>
                    <button className='px-5 py-2 bg-blue-500 text-white rounded flex flex-row items-center gap-1'>
                        <FaPlus />
                        Add New
                    </button>
                </div>
            )}
        </div>
    )
}

export default TopHeaderSection;