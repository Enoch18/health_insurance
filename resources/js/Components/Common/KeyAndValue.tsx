import React from "react";

interface Props{
    label: string;
    value: string;    
}

const KeyAndValue = ({label, value}: Props) => {
    return (
        <div className="flex flex-row gap-2">
            <p className="font-semibold">{label}</p>
            <p className="font-normal">: {value}</p>
        </div>
    )
}

export default KeyAndValue;