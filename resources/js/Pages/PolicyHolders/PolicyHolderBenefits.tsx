import Table from "@/Components/Common/Table";
import PolicyHolderLayout from "@/Layouts/PolicyHolderLayout";
import React from "react";

interface Props{
    policy_holder: any;
    benefits: any;
}

const PolicyHolderBenefits = ({policy_holder, benefits}: Props) => {

    return (
        <PolicyHolderLayout policy_holder={policy_holder?.data}>
            
            <h4>
                Benefits
            </h4><hr />

            <Table
                headers={[
                    {label: 'Code', id: 'code'},
                    {label: 'Description', id: 'description'}
                ]}
                rows={benefits}
                hideCheckbox={true}
            />
        </PolicyHolderLayout>
    )
}

export default PolicyHolderBenefits;