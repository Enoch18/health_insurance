import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";
import Table from "@/Components/Common/Table";
import AddEditCoveragePeriods from "@/Components/Administrations/AddEditCoveragePeriods";
import { FaEdit } from "react-icons/fa";
import { useAddEdit } from "@/Hooks/useAddEdit";

const CoveragePeriods = ({insurance_type_id, coverage_levels}:any) => {
    const route = useRoute();
    
    const {
        open, setOpen,
        values, setValues,
        is_editing, setIsEditing,
        setItemId,
        submitting,
        errors,
        handleChange,
        onSubmit
    } = useAddEdit("/administrations/insurance-types/coverage-periods");

    values.insurance_type_id = insurance_type_id;

    const headers = [
        {id: 'name', label: 'Name'},
        {id: 'number_of_months', label: 'Number Of Months'},
        {id: 'status', label: 'Status'},
        {id: 'action', label: ''},
    ];

    return (
        <MainLayout title="Insurance Setups | Coverage Periods">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <Link className='text-blue-500' href={route('insurance-types.index')}>Insurance Management</Link> {'>'}
                    <Link className='text-blue-500' href={`/administrations/insurance-types/setups/${insurance_type_id}`}>Insurance Setups</Link> {'>'}
                    <h4>Coverage Periods</h4>
                </div>
            } />

            <TopHeaderSection title="Coverage Periods" onBtnClick={() => {setOpen(true); setValues({}); setItemId(''); setIsEditing(false)}} />

            <div className="mt-3">
                <Table
                    headers={headers}
                    rows={coverage_levels?.data?.map((item:any) => (
                        {
                            name: item.name,
                            number_of_months: <span>{item.number_of_months} Months</span>,
                            status: item.status,
                            action: (
                                <div className='flex flex-row items-center gap-3'>
                                    <button 
                                        onClick={() => {
                                            setOpen(true);
                                            setItemId(item.id);
                                            setValues({
                                                name: item.name,
                                                number_of_months: item.number_of_months,
                                                status: item.status,
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

            <AddEditCoveragePeriods 
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

export default CoveragePeriods;