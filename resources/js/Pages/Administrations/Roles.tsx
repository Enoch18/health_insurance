import React, { useState } from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import Breadcrumbs from '@/Components/Common/Breadcrumbs';
import { Link } from '@inertiajs/react';
import useRoute from '@/Hooks/useRoute';
import Table from '@/Components/Common/Table';
import { FaEdit } from 'react-icons/fa';
import { useAddEdit } from '@/Hooks/useAddEdit';
import AddEditRoles from '@/Components/Administrations/AddEditRoles';

const RolesAndPermissions = ({roles}:any) => {
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
    } = useAddEdit(`/administrations/roles`);

    const headers = [
        {id: 'id', label: 'ID'},
        {id: 'role', label: 'Role'},
        {id: 'action', label: ''},
    ];
    
    return (
        <MainLayout title="User Management">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <h4>System User Roles</h4>
                </div>
            } />

            <TopHeaderSection title='System User Roles' onBtnClick={() => {setOpen(true); setValues({}); setItemId(''); setIsEditing(false);}} />

            <Table
                headers={headers}
                rows={roles.map((item:any) => (
                    {
                        id: item.id,
                        role: item.name,
                        action: (
                            <div className='flex flex-row items-center gap-3'>
                                <button 
                                    onClick={() => {
                                        setOpen(true);
                                        setItemId(item.id);
                                        setValues({
                                            name: item.name
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

            <AddEditRoles 
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

export default RolesAndPermissions;