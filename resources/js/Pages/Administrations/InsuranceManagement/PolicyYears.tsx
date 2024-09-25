import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";
import Table from "@/Components/Common/Table";
import { useAddEdit } from "@/Hooks/useAddEdit";
import AddEditPolicyYears from "@/Components/Administrations/AddEditPolicyYears";
import { FaEdit } from "react-icons/fa";

const PolicyLevels = ({insurance_type_id, policy_years}:any) => {
    const route = useRoute();

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
    } = useAddEdit(`/administrations/insurance-types/${insurance_type_id}/policy-years`);

    values.insurance_type_id = insurance_type_id;

    const headers = [
        {id: 'year', label: 'Year'},
        {id: 'action', label: ''},
    ];

    return (
        <MainLayout title="Insurance Setups | Policy Years">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <Link className='text-blue-500' href={route('insurance-types.index')}>Insurance Management</Link> {'>'}
                    <Link className='text-blue-500' href={`/administrations/insurance-types/setups/${insurance_type_id}`}>Insurance Setups</Link> {'>'}
                    <h4>Policy Years</h4>
                </div>
            } />

            <TopHeaderSection title="Policy Years" onBtnClick={() => {setOpen(true); setValues({}); setItemId(''); setIsEditing(false)}} />

            <div className="mt-3">
                <Table
                    headers={headers}
                    rows={policy_years?.data?.map((item:any) => (
                        {
                            year: item.year,
                            action: (
                                <div className='flex flex-row items-center gap-3'>
                                    <button 
                                        onClick={() => {
                                            setOpen(true);
                                            setItemId(item.id);
                                            setValues({
                                                year: item.year
                                            });
                                            setOpen(true); 
                                            setIsEditing(true);
                                        }} 
                                        className='border p-1 rounded'>
                                        <FaEdit className='text-green-500 text-xl' />
                                    </button>
                                </div>
                            )
                        }
                    ))}
                />
            </div>

            <AddEditPolicyYears 
                open={open}
                setOpen={setOpen} 
                values={values}
                handleChange={handleChange}
                onSubmit={onSubmit}
                is_editing={is_editing}
                errors={errors}
                submitting={submitting}
            />
        </MainLayout>
    )
}

export default PolicyLevels;