import PolicyHolderLayout from "@/Layouts/PolicyHolderLayout";
import React from "react";

interface Props{
    policy_holder: any;
}

const PolicyHolderBenefits = ({policy_holder}: Props) => {
    return (
        <PolicyHolderLayout policy_holder={policy_holder?.data}>
            
            <div>
                PolicyHolderBenefits
            </div>
        </PolicyHolderLayout>
    )
}

export default PolicyHolderBenefits;