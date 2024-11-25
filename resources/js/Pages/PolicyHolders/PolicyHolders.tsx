import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import CustomTabs from '@/Components/Common/CustomTabs';
import Table from '@/Components/Common/Table';
import { FaEye } from 'react-icons/fa';
import useRoute from '@/Hooks/useRoute';
import { Link } from '@inertiajs/react';
import { FaPlus } from 'react-icons/fa6';

const PolicyHolders = ({policy_holders}: any) => {
    const route = useRoute();

    const tabs = [
        {value: "all", label: 'All'},
        {value: "active", label: 'Active'},
        {value: "suspended", label: 'Suspended'},
        {value: "inactive", label: 'Inactive'},
        {value: "15_days_to_renewal", label: '15 Days To Renewal'},
        {value: "45_days_to_renewal", label: '45 Days To Renewal'},
    ];

    const headers = [
        {id: 'policy_number', label: 'Policy Number'},
        {id: 'first_name', label: 'First Name'},
        {id: 'last_name', label: 'Last Name'},
        {id: 'date_of_birth', label: 'Date of Birth'},
        {id: 'plan', label: 'Plan'},
        {id: 'group', label: 'Group'},
        {id: 'join_date', label: 'Join Date'},
        {id: 'status', label: 'Status'},
        {id: 'action', label: ''},
    ];

    return (
        <MainLayout 
            title="Policy Holders"
        >
            <TopHeaderSection title='Policy Holders' route_to={route('policy-holders.create')} hideAddBtn={true} />

            <div className='flex flex-row items-center gap-2'>
                <div className='flex-row flex-1'>
                    <CustomTabs tabs={tabs} defaultValue='all' />
                </div>

                <Link href={route('policy-holders.create')} className='px-5 bg-blue-500 text-white rounded flex flex-row items-center gap-1 h-10 mt-1'>
                    <FaPlus />
                    Add New
                </Link>
            </div>
            
            <Table 
                headers={headers} 
                rows={policy_holders?.data?.map((item:any) => (
                    {
                        policy_number: item?.attributes?.policy_number, 
                        first_name: item?.attributes?.first_name, 
                        last_name: item?.attributes?.last_name, 
                        date_of_birth: item?.attributes?.date_of_birth,
                        plan: item?.attributes?.coverage_level, 
                        group: 'Corporate', 
                        join_date: item?.attributes?.created_at, 
                        status: item?.attributes?.policy_status, 
                        action: (
                            <Link href={`/policy-holders/${item?.id}`}><FaEye className='text-xl' /></Link>
                        )
                    }
                ))} 
                paperClassName='mt-3' 
            />
        </MainLayout>
    )
}

export default PolicyHolders;