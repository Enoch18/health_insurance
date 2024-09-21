import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import { queryString } from "@/Helpers/helper";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";
import Table from "@/Components/Common/Table";

const CoverageAgeRanges = () => {
    const route = useRoute();

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
                    <Link className='text-blue-500' href={`/administrations/insurance-types/setups/${queryString('setup_id')}`}>Insurance Setups</Link> {'>'}
                    <h4>Coverage Age Ranges</h4>
                </div>
            } />

            <TopHeaderSection title="Coverage Age Ranges" />

            <div className="mt-3">
                <Table
                    headers={headers}
                    rows={[]}
                />
            </div>
        </MainLayout>
    )
}

export default CoverageAgeRanges;