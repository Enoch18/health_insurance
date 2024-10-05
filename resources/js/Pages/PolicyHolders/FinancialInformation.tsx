import PolicyHolderLayout from "@/Layouts/PolicyHolderLayout";
import React from "react";

interface Props{
    policy_holder: any;
}

const FinancialInformation = ({policy_holder}: Props) => {
    return (
        <PolicyHolderLayout policy_holder={policy_holder?.data}>
            
            <div>
                FinancialInformation
            </div>
        </PolicyHolderLayout>
    )
}

export default FinancialInformation;