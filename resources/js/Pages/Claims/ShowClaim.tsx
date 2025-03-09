import React, { useState } from "react"
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import Paper from "@/Components/Paper";
import KeyAndValue from "@/Components/Common/KeyAndValue";
import { FaClipboardCheck } from "react-icons/fa6";
import Table from "@/Components/Common/Table";
import AssessService from "@/Components/Claims/AssessService";
import { usePage } from "@inertiajs/react";
import CompleteAssessment from "@/Components/Claims/CompleteAssessment";
import { useAddEdit } from "@/Hooks/useAddEdit";

const ShowClaim = ({claim}: any) => {
    const [openServiceAssess, setOpenServiceAssess] = useState(false);
    const [openCompleteAssessment, setOpenCompleteAssessment] = useState(false);

    const [title, setTitle] = useState("");

    const serviceTableHeadings = [
        {label: 'Service', id: 'service'},
        {label: 'Benefit', id: 'benefit'},
        {label: 'Claimed Amount', id: 'claim_amount'},
        {label: 'Approved Amount', id: 'approved_amount'},
        {label: 'Rejected Amount', id: 'rejected_amount'},
        {label: 'Status', id: 'status'},
        {label: '', id: 'action'},
    ];

    const {
        open, setOpen,
        values, setValues,
        setIsEditing,
        is_editing,
        setItemId,
        submitting,
        errors,
        handleChange,
        onSubmit
    } = useAddEdit(`/claims-management/claim-services`);

    return (
        <MainLayout 
            title="Show Claim"
        >
            <TopHeaderSection title='Claim' hideAddBtn={true} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <Paper>
                    <h4 className="font-semibold">Claim Information</h4><hr className="border-gray-500" />
                    <KeyAndValue label="Claim Number" value={claim?.data?.claim_number} />
                    <KeyAndValue label="Claim Date" value={claim?.data?.claim_date} />
                    <KeyAndValue label="Service Provider" value={claim?.data?.service_provider} />
                    <KeyAndValue label="Approved Amount" value={claim?.data?.approved_amount} />
                    <KeyAndValue label="Total Claimed Amount" value={claim?.data?.total_claimed_amount} />
                </Paper>

                <Paper>
                    <h4 className="font-semibold">Policy Holder Information</h4><hr className="border-gray-500" />
                    <KeyAndValue label="Policy Number" value={claim?.data?.policy_holder?.policy_number} />
                    <KeyAndValue label="Full Name" value={`${claim?.data?.policy_holder?.first_name} ${claim?.data?.policy_holder?.last_name}`} />
                    <KeyAndValue label="Email" value={claim?.data?.policy_holder?.email} />
                    <KeyAndValue label="Phone Number" value={claim?.data?.policy_holder?.phone} />
                    <KeyAndValue label="Status" value={claim?.data?.policy_holder?.status ?? 'Active'} />
                </Paper>
            </div>

            <div className="mt-5">
                <div className="flex flex-row items-center">
                    <h4 className="font-semibold text-lg">Claim Services</h4>

                    <div className="flex flex-row flex-1 justify-end items-center">
                        <button onClick={() => setOpenCompleteAssessment(true)} className="flex flex-row items-center bg-blue-500 text-white p-1 rounded">
                            Complete Assessment
                            <FaClipboardCheck />
                        </button>
                    </div>
                </div>
                <hr className="border-gray-500 mt-1" />
            </div>

            <Table
                headers={serviceTableHeadings}
                rows={claim.data.services.map((item:any) => (
                    {
                        service: item.service,
                        benefit: item.benefit,
                        claim_amount: item.claim_amount,
                        approved_amount: item.approved_amount,
                        rejected_amount: item.rejected_amount,
                        status: (item.approved_amount > 0 || item.rejected_amount) ? 'Assessed' : 'Pending',
                        action: (
                            <button 
                                onClick={() => {
                                    setOpen(true); 
                                    setItemId(item.id); 
                                    setIsEditing(true);
                                    setValues({approved_amount: item.claim_amount, rejected_amount: 0})
                                }} 
                                className={`${(item.approved_amount > 0 || item.rejected_amount) ? 'bg-green-700' : 'bg-orange-700'} text-white px-2 py-1 rounded shadow`}
                            >
                                {(item.approved_amount > 0 || item.rejected_amount) ? "Re-Assess" : "Assess"}
                            </button>
                        )
                    }
                ))}
                hideCheckbox={true}
            />

            <AssessService
                title={title}
                open={open}
                setOpen={setOpen}
                handleChange={handleChange}
                onSubmit={onSubmit}
                values={values}
                errors={errors}
                submitting={false}
            />

            <CompleteAssessment
                open={openCompleteAssessment}
                setOpen={setOpenCompleteAssessment}
            />
        </MainLayout>
    )
}

export default ShowClaim;