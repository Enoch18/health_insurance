import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import CustomTabs from '@/Components/Common/CustomTabs';
import Table from '@/Components/Common/Table';
import { FaEye } from 'react-icons/fa';

const PremiumPayments = () => {
    const tabs = [
        {label: 'All'},
        {label: 'Pending'},
        {label: 'Paid'},
        {label: 'Overdue'},
        {label: 'Failed'},
    ];

    const headers = [
        {id: 'payment_id', label: 'Payment ID'},
        {id: 'policy', label: 'Policy'},
        {id: 'policy_number', label: 'Policy Number'},
        {id: 'payment_date', label: 'Payment Date'},
        {id: 'payment_overdue_date', label: 'Payment Overdue Date'},
        {id: 'status', label: 'Status'},
        {id: 'action', label: ''},
    ];

    const rows = [
        {payment_id: '7872342', policy: 'Health Insurance', policy_number: '9898345', payment_date: '10 Sep 2024', payment_overdue_date: '10 Sep 2024', status: 'Approved', action: <button><FaEye /></button>}
    ]

    return (
        <MainLayout 
            title="Policy Holders"
        >
            <TopHeaderSection title='Premium Payments' />

            <CustomTabs tabs={tabs} />
            
            <Table headers={headers} rows={rows} paperClassName='mt-3' />
        </MainLayout>
    )
}

export default PremiumPayments;