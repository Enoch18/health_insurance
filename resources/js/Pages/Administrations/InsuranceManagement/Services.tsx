import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";
import Table from "@/Components/Common/Table";
import { FaEdit } from "react-icons/fa";
import { useAddEdit } from "@/Hooks/useAddEdit";
import AddEditServices from "@/Components/Administrations/AddEditServices";

const Services = ({insurance_type_id, services, benefit_packages}:any) => {
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
    } = useAddEdit(`/administrations/insurance-types/${insurance_type_id}/services`);

    values.insurance_type_id = insurance_type_id;

    const headers = [
        {id: 'name', label: 'Name'},
        {id: 'benefitPackage', label: 'Benefit Package'},
        {id: 'action', label: ''},
    ];

    return (
        <MainLayout title="Insurance Setups | Coverage Periods">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <Link className='text-blue-500' href={route('insurance-types.index')}>Insurance Management</Link> {'>'}
                    <Link className='text-blue-500' href={`/administrations/insurance-types/setups/${insurance_type_id}`}>Insurance Setups</Link> {'>'}
                    <h4>Services</h4>
                </div>
            } />

            <TopHeaderSection title="Services" onBtnClick={() => {setOpen(true); setValues({}); setItemId(''); setIsEditing(false)}} />

            <div className="mt-3">
                <Table
                    headers={headers}
                    rows={services?.data?.map((item:any) => (
                        {
                            name: item.name,
                            benefitPackage: item.benefit_package,
                            action: (
                                <div className='flex flex-row items-center gap-3'>
                                    <button 
                                        onClick={() => {
                                            setOpen(true);
                                            setItemId(item.id);
                                            setValues({
                                                name: item.name,
                                                benefit_package_id: item.benefit_package_id,
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

            <AddEditServices 
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

export default Services;