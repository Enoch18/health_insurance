import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import CustomTabs from '@/Components/Common/CustomTabs';
import Table from '@/Components/Common/Table';
import { FaEye } from 'react-icons/fa';
import { Link } from '@inertiajs/react';
import { FaArrowRight } from 'react-icons/fa6';

const Claims = () => {
    const tabs = [
        {value: 'all', label: 'All'},
        {value: 'pending', label: 'Pending'},
        {value: 'approved', label: 'Approved'},
        {value: 'rejected', label: 'Rejected'},
        {value: 'paid', label: 'Paid'}
    ];

    const headers = [
        {id: 'claim_number', label: 'Claim Number'},
        {id: 'policy_holder', label: 'Policy Holder'},
        {id: 'policy_number', label: 'Policy Number'},
        {id: 'claim_type', label: 'Claim Type'},
        {id: 'claim_date', label: 'Claim Date'},
        {id: 'claim_amount', label: 'Claim Amount'},
        {id: 'amount_approved', label: 'Amount Approved'},
        {id: 'submission_method', label: 'Submission Method'},
        {id: 'status', label: 'Status'},
        {id: 'action', label: ''},
    ];

    const rows = [
        {claim_number: '7872342', policy_holder: 'Enock D Soko', policy_number: '9898345', claim_type: 'Out Patient', claim_date: '10 Sep 2024', claim_amount: '$10', amount_approved: '$10', submission_method: 'Online', status: 'Approved', action: (<div className='flex flex-row items-center gap-3'><Link href={`/claims-management/claims/1`} className='border p-1 rounded'><FaEye className='text-xl text-blue-500' /></Link></div>)}
    ]

    return (
        <MainLayout 
            title="Claims"
        >
            <TopHeaderSection title='Claims' route_to='/claims-management/claims/create' />

            <CustomTabs tabs={tabs} defaultValue='all' />
            
            <Table 
                headers={headers} 
                rows={rows} 
                paperClassName='mt-3' 
            />
        </MainLayout>
    )
}

export default Claims;