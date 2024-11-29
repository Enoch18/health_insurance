import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import CustomTabs from '@/Components/Common/CustomTabs';
import Table from '@/Components/Common/Table';
import { useAddEdit } from '@/Hooks/useAddEdit';
import CustomModal from '@/Components/Common/CustomModal';
import CustomTextInput from '@/Components/Common/CustomTextInput';

const PremiumPayments = ({premium_payments}: any) => {
    const {
        open, setOpen,
        values, setValues,
        is_editing, setIsEditing,
        setItemId,
        submitting,
        errors,
        handleChange,
        onSubmit
    } = useAddEdit(`/financials/premium-payments`);

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
                        policy_number: item.policy_holder.policy_number,
                        policy_holder: `${item.policy_holder.first_name} ${item.policy_holder.last_name}`,
                        payment_date: item.payment_date ?? 'N/A',
                        description: item.description,
                        currency: item.currency,
                        amount_due: item.amount_due,
                        amount_paid: item.amount_paid,
                        due_date: item.due_date,
                        payment_status: item.payment_status,
                        action: (
                            <>
                                {item.amount_due > 0 && (
                                    <button 
                                        onClick={() => {
                                            setOpen(true);
                                            setItemId(item.id);
                                            setIsEditing(true);
                                            setValues({amount_paid: item.amount_due});
                                        }} 
                                        className='bg-green-500 text-white rounded p-1'
                                    >
                                        Process
                                    </button>
                                )}
                            </>
                        )
                    }
                ))} 
                paperClassName='mt-3' 
            />

            <CustomModal
                open={open}
                setOpen={setOpen}
            >
                <h4 className="text-lg mb-2">{is_editing ? 'Edit Benefit Package' : 'Add Benefit Package'}</h4><hr />

                <form onSubmit={onSubmit}>
                    <CustomTextInput 
                        id={'amount_paid'} 
                        name="amount_paid"
                        label='Pay' 
                        setValue={handleChange} 
                        value={values?.amount_paid} 
                        error={errors?.amount_paid}
                    />

                    <button className='bg-blue-500 text-white px-5 py-2 rounded mt-3' disabled={submitting}>
                        {submitting ? 'Submiting...' : 'Submit'}
                    </button>
                </form>
            </CustomModal>
        </MainLayout>
    )
}

export default PremiumPayments;