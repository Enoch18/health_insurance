import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import { Link } from '@inertiajs/react';
import useRoute from '@/Hooks/useRoute';
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import Table from '@/Components/Common/Table';
import LimitAmountInputField from '@/Components/Administrations/LimitAmountInputField';

const CoverageLevelBenefitLimits = ({benefit_packages, insurance_type_id, coverage_level}: any) => {
    const route = useRoute();

    const headers = [
        {id: 'code', label: 'Code'},
        {id: 'description', label: 'Description'},
        {id: 'currency', label: 'Currency'},
        {id: 'limitAmount', label: 'Limit Amount'},
    ];

    return (
        <MainLayout title="Insurance Setups | Coverage Level Benefit Limits">
            <div className='flex flex-row gap-1 items-center'>
                <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                <Link className='text-blue-500' href={route('insurance-types.index')}>Insurance Management</Link> {'>'}
                <Link className='text-blue-500' href={`/administrations/insurance-types/setups/${insurance_type_id}`}>Insurance Setups</Link> {'>'}
                <Link className='text-blue-500' href={`/administrations/insurance-types/${insurance_type_id}/benefit-limits`}>Benefit Limits</Link> {'>'}
                <h4>{coverage_level?.name}</h4>
            </div>

            <TopHeaderSection title={`${coverage_level?.name} Limits`} hideAddBtn={true} />

            <Table
                headers={headers}
                rows={benefit_packages?.map((item:any) => (
                    {
                        code: item.code,
                        description: item.description,
                        currency: 'USD',
                        limitAmount: <LimitAmountInputField id={item.id} />
                    }
                ))}
            />
        </MainLayout>
    )
}

export default CoverageLevelBenefitLimits;