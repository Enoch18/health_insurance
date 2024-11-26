import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import CustomTabs from '@/Components/Common/CustomTabs';
import Table from '@/Components/Common/Table';
import { FaEye } from 'react-icons/fa';
import { Link } from '@inertiajs/react';

const Claims = ({claims}:any) => {
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
        {id: 'claim_date', label: 'Claim Date'},
        {id: 'total_claim_amount', label: 'Total Claim Amount'},
        {id: 'approved_amount', label: 'Approved Amount'},
        {id: 'status', label: 'Status'},
        {id: 'action', label: ''},
    ];

    return (
        <MainLayout 
            title="Claims"
        >
            <TopHeaderSection title='Claims' route_to='/claims-management/claims/create' />

            <CustomTabs tabs={tabs} defaultValue='all' />
            
            <Table 
                headers={headers} 
                rows={claims?.data?.map((item:any) => (
                    {
                        claim_number: item?.claim_number,
                        policy_holder: `${item?.policy_holder?.first_name} ${item?.policy_holder?.last_name}`,
                        policy_number: item?.policy_holder?.policy_number,
                        claim_date: item?.claim_date,
                        total_claim_amount: item?.total_claimed_amount,
                        approved_amount: item?.approved_amount,
                        status: item?.status,
                        action: (
                            <div className='flex flex-row items-center gap-3'>
                                <Link href={`/claims-management/claims/${item?.id}`} className='border p-1 rounded'>
                                    <FaEye className='text-xl text-blue-500' />
                                </Link>
                            </div>
                        )
                    }
                ))} 
                paperClassName='mt-3' 
            />
        </MainLayout>
    )
}

export default Claims;