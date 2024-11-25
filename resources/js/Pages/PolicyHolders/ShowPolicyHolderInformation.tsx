import React from "react";
import PolicyHolderLayout from "@/Layouts/PolicyHolderLayout";
import KeyAndValue from "@/Components/Common/KeyAndValue";

const ShowPolicyHolderInformation = ({policy_holder}: any) => {
    console.log(policy_holder)
    return (
        <PolicyHolderLayout policy_holder={policy_holder?.data}>
            <h4 className="text-lg text-blue-300">Policy Holder Details</h4><hr className="border-gray-500" />

            <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
                <KeyAndValue label="Name" value={`${policy_holder?.data?.attributes?.first_name} ${policy_holder?.data?.attributes?.last_name}`} />
                <KeyAndValue label="Coverage Level" value={policy_holder?.data?.attributes?.coverage_level} />
                <KeyAndValue label="Premium Amount" value={policy_holder?.data?.attributes?.premium_amount ?? 'N/A'} />
                <KeyAndValue label="Policy Start Date" value={policy_holder?.data?.attributes?.policy_start_date ?? 'N/A'} />
                <KeyAndValue label="Policy End Date" value={policy_holder?.data?.attributes?.policy_end_date ?? 'N/A'} />
                <KeyAndValue label="Address" value={policy_holder?.data?.attributes?.address ?? 'N/A'} />
                <KeyAndValue label="City" value={policy_holder?.data?.attributes?.city ?? 'N/A'} />
                <KeyAndValue label="State" value={policy_holder?.data?.attributes?.state ?? 'N/A'} />
                <KeyAndValue label="Country" value={policy_holder?.data?.attributes?.country ?? 'N/A'} />
            </div>
        </PolicyHolderLayout>
    )
}

export default ShowPolicyHolderInformation;