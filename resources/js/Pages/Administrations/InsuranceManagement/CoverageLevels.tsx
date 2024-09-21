import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import { queryString } from "@/Helpers/helper";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";
import Table from "@/Components/Common/Table";
import AddEditCoverageLevels from "@/Components/Administrations/AddEditCoverageLevels";
import { FaEdit } from "react-icons/fa";
import { useAddEdit } from "@/Hooks/useAddEdit";

const CoverageLevels = ({coverage_levels}:any) => {
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
    } = useAddEdit("/administrations/insurance-types/coverage-levels");

    const insurance_type_id = queryString('setup_id');
    values.insurance_type_id = insurance_type_id;

    const headers = [
        {id: 'code', label: 'Code'},
        {id: 'name', label: 'Name'},
        {id: 'description', label: 'Description'},
        {id: 'tier_level', label: 'Tier Level'},
        {id: 'policy_type', label: 'Policy Type'},
        {id: 'status', label: 'Status'},
        {id: 'action', label: ''},
    ];

    return (
        <MainLayout title="Insurance Setups | Coverage Levels">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <Link className='text-blue-500' href={route('insurance-types.index')}>Insurance Management</Link> {'>'}
                    <Link className='text-blue-500' href={`/administrations/insurance-types/setups/${queryString('setup_id')}`}>Insurance Setups</Link> {'>'}
                    <h4>Coverage Levels</h4>
                </div>
            } />

            <TopHeaderSection title="Coverage Levels" onBtnClick={() => {setOpen(true); setValues({}); setItemId('')}} />

            <div className="mt-3">
                <Table
                    headers={headers}
                    rows={coverage_levels?.data?.map((item:any) => (
                        {
                            code: item.code,
                            name: item.name,
                            description: item.description,
                            tier_level: item.tier_level,
                            policy_type: item.policy_type,
                            status: item.status,
                            action: (
                                <div className='flex flex-row items-center gap-3'>
                                    <button 
                                        onClick={() => {
                                            setOpen(true);
                                            setItemId(item.id);
                                            setValues({
                                                name: item.name,
                                                description: item.description,
                                                tier_level: item.tier_level,
                                                policy_type: item.policy_type,
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

            <AddEditCoverageLevels 
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

export default CoverageLevels;