import React from "react";
import MainLayout from "./MainLayout";
import Paper from "@/Components/Paper";
import KeyAndValue from "@/Components/Common/KeyAndValue";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import { Link, usePage } from "@inertiajs/react";

interface Props{
    policy_holder: any;
    children: any;
}

const PolicyHolderLayout = ({policy_holder, children}: Props) => {
    const {url} = usePage();
    
    return(
        <MainLayout title="Policy Holder Information">
            <TopHeaderSection title='Policy Holder' hideAddBtn={true} />

            <Paper>
                <h4 className="text-lg">Policy Holder Details</h4><hr className="border-gray-500 mt-1" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                    <KeyAndValue label="Policy Number" value={policy_holder?.attributes?.policy_number} />
                    <KeyAndValue label="First Name" value={policy_holder?.attributes?.first_name} />
                    <KeyAndValue label="Last Name" value={policy_holder?.attributes?.last_name} />
                    <KeyAndValue label="Date of birth" value={policy_holder?.attributes?.date_of_birth} />
                    <KeyAndValue label="Gender" value={policy_holder?.attributes?.gender} />
                    <KeyAndValue label="Email Address" value={policy_holder?.attributes?.email} />
                    <KeyAndValue label="Phone Number" value={policy_holder?.attributes?.phone} />
                    <KeyAndValue label="Marital Status" value={policy_holder?.attributes?.marital_status} />
                    <KeyAndValue label="Family Size" value={policy_holder?.attributes?.family_size} />
                    <KeyAndValue label="Coverage Level" value={policy_holder?.attributes?.coverage_level ?? 'N/A'} />
                    <KeyAndValue label="Policy Start Date" value={policy_holder?.attributes?.policy_start_date ?? 'N/A'} />
                    <KeyAndValue label="Policy End Date" value={policy_holder?.attributes?.policy_end_date ?? 'N/A'} />
                </div>
            </Paper>

            <div className="mt-10">
                <div className="flex flex-row">
                    <Link href={`/policy-holders/${policy_holder.id}`} className={`border-x border-t rounded-t border-x-gray-500 border-t-gray-500 px-5 py-2 ${!url.split('/policy-holders/')[1].includes('/') ? 'bg-blue-600' : ''}`}>Policy Holder</Link>
                    <Link href={`/policy-holders/${policy_holder.id}/dependants`} className={`border-x border-t rounded-t border-x-gray-500 border-t-gray-500 px-5 py-2 ${url.includes('dependants')  ? 'bg-blue-600' : ''}`}>Dependants</Link>
                    <Link href={`/policy-holders/${policy_holder.id}/medical-information`} className={`border-x border-t rounded-t border-x-gray-500 border-t-gray-500 px-5 py-2 ${url.includes('medical-information')  ? 'bg-blue-600' : ''}`}>Medical Information</Link>
                    <Link href={`/policy-holders/${policy_holder.id}/financials`} className={`border-x border-t rounded-t border-x-gray-500 border-t-gray-500 px-5 py-2 ${url.includes('financials')  ? 'bg-blue-600' : ''}`}>Financials Information</Link>
                    <Link href={`/policy-holders/${policy_holder.id}/policy-holder-benefits`} className={`border-x border-t rounded-t border-x-gray-500 border-t-gray-500 px-5 py-2 ${url.includes('policy-holder-benefits')  ? 'bg-blue-600' : ''}`}>Policy Benefits</Link>
                </div>

                <Paper>
                    {children}
                </Paper>
            </div>
        </MainLayout>
    )
}

export default PolicyHolderLayout;