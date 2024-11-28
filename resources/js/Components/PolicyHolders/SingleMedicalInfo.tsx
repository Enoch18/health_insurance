import React from "react";
import KeyAndValue from "../Common/KeyAndValue";

interface MedicalInfoProps{
    item: any;
}

const SingleMedicalInfo = ({item}: MedicalInfoProps) => {
    console.log(item)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {item.condition !== 'No medical condition' ? (
                <>
                    <KeyAndValue label="Condition" value={item.condition} />
                </>
            ) : (
                <KeyAndValue label="Condition" value={item.condition} />
            )}
        </div>
    )
}

export default SingleMedicalInfo;