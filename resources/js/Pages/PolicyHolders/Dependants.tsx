import PolicyHolderLayout from "@/Layouts/PolicyHolderLayout";
import React from "react";

interface Props{
    policy_holder: any;
}

const Dependants = ({policy_holder}: Props) => {
    return (
        <PolicyHolderLayout policy_holder={policy_holder?.data}>
            
            <div>
                Dependants
            </div>
        </PolicyHolderLayout>
    )
}

export default Dependants;