import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";
import Table from "@/Components/Common/Table";
import { useAddEdit } from "@/Hooks/useAddEdit";
import AddEditCoverageAgeRanges from "@/Components/Administrations/AddEditCoverageAgeRanges";
import { FaEdit } from "react-icons/fa";

const CoverageAgeRanges = ({insurance_type_id, coverage_age_ranges}:any) => {
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
    } = useAddEdit(`/administrations/insurance-types/${insurance_type_id}/coverage-age-ranges`);

    // Adding the insurance type id to the values that are being submitted
    values.insurance_type_id = insurance_type_id;

    const headers = [
        {id: 'min_age', label: 'Min Age'},
        {id: 'max_age', label: 'Max Age'},
        {id: 'description', label: 'Description'},
        {id: 'action', label: ''},
    ];

    return (
        <MainLayout title="Insurance Setups | Coverage Age Ranges">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <Link className='text-blue-500' href={route('insurance-types.index')}>Insurance Management</Link> {'>'}
                    <Link className='text-blue-500' href={`/administrations/insurance-types/setups/${insurance_type_id}`}>Insurance Setups</Link> {'>'}
                    <h4>Coverage Age Ranges</h4>
                </div>
            } />

            <TopHeaderSection title="Coverage Age Ranges" onBtnClick={() => {setOpen(true); setValues({}); setItemId(''); setIsEditing(false)}} />

            <div className="mt-3">
                <Table
                    headers={headers}
                    rows={coverage_age_ranges?.data?.map((item:any) => (
                        {
                            min_age: item.min_age,
                            max_age: item.max_age,
                            description: item.description,
                            action: (
                                <div className='flex flex-row items-center gap-3'>
                                    <button 
                                        onClick={() => {
                                            setOpen(true);
                                            setItemId(item.id);
                                            setValues({
                                                min_age: item.min_age,
                                                max_age: item.max_age,
                                                description: item.description
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

            <AddEditCoverageAgeRanges 
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

export default CoverageAgeRanges;