import KeyAndValue from "@/Components/Common/KeyAndValue";
import PolicyHolderLayout from "@/Layouts/PolicyHolderLayout";
import React, { Fragment } from "react";

interface Props{
    policy_holder: any;
}

const Dependants = ({policy_holder}: Props) => {
    console.log(policy_holder.data.dependants)
    return (
        <PolicyHolderLayout policy_holder={policy_holder?.data}>
            <h4 className="text-lg">Dependants</h4><hr className="border-gray-500" />
            {policy_holder.data?.dependants?.map((item:any, index:number) => (
                <Fragment key={index}>
                    <h4 className="font-semibold uppercase mt-3 text-blue-300">{item.first_name} {item.last_name}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
                        <KeyAndValue label="Date of birth" value={item.date_of_birth} />
                        <KeyAndValue label="Gender" value={item.gender} />
                        <KeyAndValue label="Email Address" value={item.email ?? 'N/A'} />
                        <KeyAndValue label="Contact Number" value={item.contact_number ?? 'N/A'} />
                        <KeyAndValue label="Date of birth" value={item.date_of_birth} />
                        <KeyAndValue label="Relationship to Policy Holder" value={item.relationship_to_policy_holder} />
                    </div><hr className="border-gray-500" />
                </Fragment>
            ))}

            {policy_holder.data?.dependants.length === 0 && (<p className="text-center my-4">No dependants</p>)}
        </PolicyHolderLayout>
    )
}

export default Dependants;