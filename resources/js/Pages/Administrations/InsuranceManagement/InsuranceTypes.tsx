import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import { Link } from '@inertiajs/react';
import Table from '@/Components/Common/Table';
import { FaEdit, FaEye } from 'react-icons/fa';
import useRoute from '@/Hooks/useRoute';

const InsuranceTypes = ({insurance_types}:any) => {
    const route = useRoute();

    const headers = [
        {id: 'insurance_id', label: 'Insurance #'},
        {id: 'name', label: 'Insurance Name'},
        {id: 'description', label: 'Insurance Description'},
        {id: 'status', label: 'Status'},
        {id: 'action', label: ''},
    ];

    const rows = [
        {insurance_id: '7872342', name: 'Health Insurance', description: 'This is for health insurance', status: 'Active', action: <button><FaEye /></button>}
    ]

    return (
        <MainLayout title="Insurance Types">
            <TopHeaderSection 
                title={
                    <div className='flex flex-row gap-1 items-center'>
                        <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                        <h4>Insurance Management</h4>
                    </div>
                } 
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

                                <Link className='border p-1 rounded' href="#">
                                    <FaEdit className='text-green-500 text-xl' />
                                </Link>
                            </div>
                        )
                    }
                ))}
            />
        </MainLayout>
    )
}

export default InsuranceTypes;