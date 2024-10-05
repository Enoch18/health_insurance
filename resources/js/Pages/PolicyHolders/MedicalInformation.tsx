import PolicyHolderLayout from "@/Layouts/PolicyHolderLayout";
import React from "react";

interface Props{
    policy_holder: any;
}

const MedicalInformation = ({policy_holder}: Props) => {
    return (
        <PolicyHolderLayout policy_holder={policy_holder?.data}>
            
            <div>
                MedicalInformation
            </div>
        </PolicyHolderLayout>
    )
}

export default MedicalInformation;