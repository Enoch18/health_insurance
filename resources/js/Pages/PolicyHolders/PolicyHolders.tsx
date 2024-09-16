import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import CustomTabs from '@/Components/Common/CustomTabs';
import Table from '@/Components/Common/Table';
import { FaEye } from 'react-icons/fa';

const PolicyHolders = () => {
    const tabs = [
        {label: 'All'},
        {label: 'Active'},
        {label: 'Suspended'},
        {label: 'Inactive'},
        {label: '15 Days To Renewal'},
        {label: '45 Days To Renewal'},
    ];

    const headers = [
        {id: 'policy_number', label: 'Policy Number'},
        {id: 'title', label: 'Title'},
        {id: 'first_name', label: 'First Name'},
        {id: 'last_name', label: 'Last Name'},
        {id: 'plan', label: 'Plan'},
        {id: 'group', label: 'Group'},
        {id: 'join_date', label: 'Join Date'},
        {id: 'status', label: 'Status'},
        {id: 'action', label: ''},
    ];

    const rows = [
        {policy_number: '7872342', title: 'MR', first_name: 'Enock', last_name: 'Soko', plan: 'Gold+', group: 'Corporate', join_date: '10 Jan 2024', status: 'Active', action: <button><FaEye /></button>}
    ]

    return (
        <MainLayout 
            title="Policy Holders"
        >
            <TopHeaderSection title='Policy Holders' />

            <CustomTabs tabs={tabs} />
            
            <Table headers={headers} rows={[]} paperClassName='mt-3' />
        </MainLayout>
    )
}

export default PolicyHolders;