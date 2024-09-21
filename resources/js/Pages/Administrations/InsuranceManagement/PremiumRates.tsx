import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import { queryString } from "@/Helpers/helper";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";

const PremiumRates = () => {
    const route = useRoute();

    return (
        <MainLayout title="Insurance Setups | Premium Rates">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <Link className='text-blue-500' href={route('insurance-types.index')}>Insurance Management</Link> {'>'}
                    <Link className='text-blue-500' href={`/administrations/insurance-types/setups/${queryString('setup_id')}`}>Insurance Setups</Link> {'>'}
                    <h4>Premium Rates</h4>
                </div>
            } />

            <TopHeaderSection title="Premium Rates" hideAddBtn={true} />
        </MainLayout>
    )
}

export default PremiumRates;