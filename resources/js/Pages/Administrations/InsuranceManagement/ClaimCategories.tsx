import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";
import Table from "@/Components/Common/Table";
import { useAddEdit } from "@/Hooks/useAddEdit";
import AddEditClaimCategories from "@/Components/Administrations/AddEditClaimCategories";
import { FaEdit } from "react-icons/fa";

const ClaimCategories = ({insurance_type_id, claim_categories, benefit_packages}:any) => {
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
    } = useAddEdit("/administrations/insurance-types/claim-categories");

    // Adding the insurance type id to the values that are being submitted
    values.insurance_type_id = insurance_type_id;

    // Table headers
    const headers = [
        {id: 'code', label: 'Code'},
        {id: 'description', label: 'Description'},
        {id: 'parent_benefit_package', label: 'Parent Benefit'},
        {id: 'status', label: 'Status'},
        {id: 'action', label: ''},
    ];

    return (
        <MainLayout title="Insurance Setups | Claim Categories">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <Link className='text-blue-500' href={route('insurance-types.index')}>Insurance Management</Link> {'>'}
                    <Link className='text-blue-500' href={`/administrations/insurance-types/setups/${insurance_type_id}`}>Insurance Setups</Link> {'>'}
                    <h4>Claim Categories</h4>
                </div>
            } />

            <TopHeaderSection title="Claim Categories" onBtnClick={() => {setOpen(true); setValues({}); setItemId(''); setIsEditing(false)}} />

            <div className="mt-3">
                <Table
                    headers={headers}
                    rows={claim_categories?.data?.map((item:any) => (
                        {
                            code: item.code,
                            description: item.description,
                            parent_benefit_package: item?.benefit_package?.description,
                            status: item.status,
                            action: (
                                <div className='flex flex-row items-center gap-3'>
                                    <button 
                                        onClick={() => {
                                            setOpen(true);
                                            setItemId(item.id);
                                            setValues({
                                                description: item.description,
                                                benefit_package_id: item.benefit_package_id,
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

            <AddEditClaimCategories 
                open={open}
                setOpen={setOpen} 
                values={values}
                handleChange={handleChange}
                onSubmit={onSubmit}
                is_editing={is_editing}
                errors={errors}
                submitting={submitting}
                benefit_packages={benefit_packages}
            />
        </MainLayout>
    )
}

export default ClaimCategories;