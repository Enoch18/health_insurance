import React, { useContext, useState } from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import Table from '@/Components/Common/Table';
import { Link, usePage } from '@inertiajs/react';
import { ToastContext } from '@/Contexts/ToastContext';
import CustomModal from '@/Components/Common/CustomModal';
import CustomTextInput from '@/Components/Common/CustomTextInput';
import CustomSelectBox from '@/Components/Common/CustomSelectbox';
import { router } from '@inertiajs/core';
import useRoute from '@/Hooks/useRoute';
import Breadcrumbs from '@/Components/Common/Breadcrumbs';
import { Alert } from '@mui/material';

const UserManagement = ({users, roles}: any) => {
    const [open, setOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const {setType, setMessage} = useContext(ToastContext);
    const [error, setError] = useState("");

    const route = useRoute();

    const { errors } = usePage().props;

    const [values, setValues] = useState<any>({
        name: "",
        email: "",
        role: "",
        password: "",
        confirm_password: ""
    });

    function handleChange(e:any) {
        const key = e.target.id;
        const value = e.target.value
        setValues((values:any) => ({
            ...values,
            [key]: value,
        }))
    }

    const headers = [
        {id: 'id', label: 'ID'},
        {id: 'name', label: 'Name'},
        {id: 'role', label: 'Role'},
        {id: 'email', label: 'Email'},
        {id: 'action', label: ''},
    ];

    const onSubmit = (e:any) => {
        e.preventDefault();
        setSubmitting(true);
        router.post(route('users-management.store'), values, {
            onSuccess: () => {
                setSubmitting(false);
                setOpen(false);
                setMessage("User added successfully!");
                setType("success");
            },
            onError: (error) => {
                setError(error?.error);
            },
            onFinish: () => {
                setSubmitting(false);
            }
        });
    }

    return (
        <MainLayout title="User Management">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <h4>User Management</h4>
                </div>
            } />

            <TopHeaderSection title='User Management' onBtnClick={() => setOpen(true)} />

            <Table
                headers={headers}
                rows={users.data.map((item:any) => (
                    {
                        id: item.id,
                        name: item.name,
                        email: item.email
                    }
                ))}
                hideCheckbox={true}
            />

            <CustomModal
                open={open}
                setOpen={setOpen}
            >
                <form onSubmit={onSubmit}>
                    <h4 className='text-xl'>Add User</h4><hr />
                    {error !== "" && error !== undefined && <Alert severity="error" className="mb-2">{error}</Alert>}
                    <CustomTextInput 
                        id={'name'} 
                        name="name" 
                        label='Name' 
                        setValue={handleChange} 
                        value={values.name} 
                        error={errors.name}
                    />
                    <CustomTextInput 
                        id={'email'} 
                        name="email" 
                        label='Email' 
                        setValue={handleChange} 
                        value={values.email} 
                        error={errors.email}
                    />
                    <CustomSelectBox 
                        id={'role_id'} 
                        name="role_id" 
                        label='Role' 
                        data={roles.map((item:any) => (
                            {label: item.name, value: item.id}
                        ))} 
                        setValue={handleChange} 
                        value={values.role_id} 
                        error={errors.role_id}
                    />

                    <h4 className='mt-5'>Password Details</h4>
                    <CustomTextInput 
                        id={'password'} 
                        type="password"
                        name="password" 
                        label='Password' 
                        setValue={handleChange} 
                        value={values.password} 
                        error={errors.password}
                    />
                    <CustomTextInput 
                        id={'password'} 
                        type="password"
                        name="password" 
                        label='Confirm Password'
                        setValue={handleChange}
                        value={values.confirm_password}
                        error={errors.confirm_password}
                    />

                    <button className='bg-blue-500 text-white px-5 py-2 rounded mt-3' disabled={submitting}>
                        {submitting ? 'Submiting...' : 'Submit'}
                    </button>
                </form>
            </CustomModal>
        </MainLayout>
    )
}

export default UserManagement;