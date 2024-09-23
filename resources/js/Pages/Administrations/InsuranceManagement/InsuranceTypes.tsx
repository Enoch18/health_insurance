import React, { useContext, useState } from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import { Link, usePage } from '@inertiajs/react';
import Table from '@/Components/Common/Table';
import { FaEdit, FaEye } from 'react-icons/fa';
import useRoute from '@/Hooks/useRoute';
import CustomModal from '@/Components/Common/CustomModal';
import CustomTextInput from '@/Components/Common/CustomTextInput';
import CustomSelectBox from '@/Components/Common/CustomSelectbox';
import { router } from '@inertiajs/core';
import { ToastContext } from '@/Contexts/ToastContext';

const InsuranceTypes = ({insurance_types}:any) => {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const {setType, setMessage} = useContext(ToastContext);

    const [values, setValues] = useState({
        name: "",
        description: "",
        status: "",
    });

    const route = useRoute();

    const { errors } = usePage().props;

    const headers = [
        {id: 'insurance_id', label: 'Insurance #'},
        {id: 'name', label: 'Insurance Name'},
        {id: 'description', label: 'Insurance Description'},
        {id: 'status', label: 'Status'},
        {id: 'action', label: ''},
    ];

    function handleChange(e:any) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    const statusData = [
        {label: 'Active', value: 'active'},
        {label: 'Inactive', value: 'inactive'},
    ];

    const onSubmit = (e:any) => {
        e.preventDefault();
        setSubmitting(true);
        
        if(id){
            router.put(`${route('insurance-types.store')}/${id}`, values, {
                onSuccess: () => {
                    setSubmitting(false);
                    setMessage('Insurance udpated successfully!');
                    setType('success');
                    setOpen(false);
                },
                onError: () => {
                    setMessage('An error occured while trying to save!');
                    setType('error');
                    setSubmitting(false);
                }
            });
        }else{
            router.post(route('insurance-types.store'), values, {
                onSuccess: () => {
                    setSubmitting(false);
                    setMessage('Insurance saved successfully!');
                    setType('success');
                    setOpen(false);
                },
                onError: () => {
                    setMessage('An error occured while trying to update!');
                    setType('error');
                    setSubmitting(false);
                }
            });
        }
    }

    return (
        <MainLayout title="Insurance Types">
            <TopHeaderSection 
                title={
                    <div className='flex flex-row gap-1 items-center'>
                        <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                        <h4>Insurance Management</h4>
                    </div>
                } 
                onBtnClick={() => {
                    setOpen(true);
                    setValues({
                        name: "",
                        description: "",
                        status: ""
                    });
                }}
            />

            <Table
                headers={headers}
                rows={insurance_types.data.map((item:any) => (
                    {
                        insurance_id: item.insurance_number,
                        name: item.name,
                        description: item.description,
                        status: item.status,
                        action: (
                            <div className='flex flex-row items-center gap-3'>
                                <Link className='border p-1 rounded' href={`/administrations/insurance-types/setups/${item.id}`}>
                                    <FaEye className='text-blue-500 text-xl' />
                                </Link>

                                <button 
                                    onClick={() => {
                                        setOpen(true);
                                        setId(item.id);
                                        setValues({
                                            name: item.name,
                                            description: item.description,
                                            status: item.status,
                                        });
                                    }} 
                                    className='border p-1 rounded'>
                                    <FaEdit className='text-green-500 text-xl' />
                                </button>
                            </div>
                        )
                    }
                ))}
            />

            <CustomModal
                open={open}
                setOpen={setOpen}
            >
                <form onSubmit={onSubmit}>
                    <h4 className='text-xl'>Add Insurance</h4><hr />
                    <CustomTextInput 
                        id={'name'} 
                        name="name" 
                        label='Name' 
                        setValue={handleChange} 
                        value={values.name} 
                        error={errors.name}
                    />
                    <CustomTextInput 
                        id={'description'} 
                        name="description" 
                        label='Description' 
                        setValue={handleChange} 
                        value={values.description} 
                        error={errors.description}
                    />
                    <CustomSelectBox 
                        id={'status'} 
                        name="status" 
                        label='Status' 
                        data={statusData} 
                        setValue={handleChange} 
                        value={values.status} 
                        error={errors.status}
                    />

                    <button className='bg-blue-500 text-white px-5 py-2 rounded mt-3' disabled={submitting}>
                        {submitting ? 'Submiting...' : 'Submit'}
                    </button>
                </form>
            </CustomModal>
        </MainLayout>
    )
}

export default InsuranceTypes;