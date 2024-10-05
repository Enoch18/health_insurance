import React from "react";
import PolicyHolderLayout from "@/Layouts/PolicyHolderLayout";

const ShowPolicyHolderInformation = ({policy_holder}: any) => {
    return (
        <PolicyHolderLayout policy_holder={policy_holder?.data}>
            
            <div>
                Policy Holder
            </div>
        </PolicyHolderLayout>
    )
}

export default ShowPolicyHolderInformation;