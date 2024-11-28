import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import CustomTabs from '@/Components/Common/CustomTabs';
import Table from '@/Components/Common/Table';
import { FaEye } from 'react-icons/fa';

const PremiumPayments = ({premium_payments}: any) => {
    const tabs = [
        {label: 'All'},
        {label: 'Pending'},
        {label: 'Paid'},
        {label: 'Overdue'},
        {label: 'Failed'},
    ];

    const headers = [
        {id: 'transaction_number', label: 'Transaction #'},
        {id: 'policy_number', label: 'Policy Number'},
        {id: 'policy_holder', label: 'Policy Holder'},
        {id: 'payment_date', label: 'Payment Date'},
        {id: 'description', label: 'Description'},
        {id: 'currency', label: 'Currency'},
        {id: 'amount_due', label: 'Amount Due'},
        {id: 'amount_paid', label: 'Amount Paid'},
        {id: 'due_date', label: 'Due Date'},
        {id: 'payment_date', label: 'Payment Date'},
        {id: 'payment_status', label: 'Payment Status'},
        {id: 'action', label: ''},
    ];

    const rows = [
        {payment_id: '7872342', policy: 'Health Insurance', policy_number: '9898345', payment_date: '10 Sep 2024', payment_overdue_date: '10 Sep 2024', status: 'Approved', action: <button><FaEye /></button>}
    ]

    console.log(premium_payments.data)

    return (
        <MainLayout 
            title="Policy Holders"
        >
            <TopHeaderSection title='Premium Payments' />

            <CustomTabs tabs={tabs} />
            
            <Table 
                headers={headers} 
                rows={premium_payments.data?.map((item:any) => (
                    {
                        transaction_number: item.transaction_reference,
                        policy_number: 'N/A',
                        policy_holder: 'N/A',
                        payment_date: item.payment_date ?? 'N/A',
                        description: item.description,
                        currency: item.currency,
                        amount_due: item.amount_due,
                        amount_paid: item.amount_paid,
                        due_date: item.due_date,
                        payment_status: item.payment_status,
                        action: (
                            <button className='bg-green-500 text-white rounded p-1'>Process</button>
                        )
                    }
                ))} 
                paperClassName='mt-3' 
            />
        </MainLayout>
    )
}

export default PremiumPayments;