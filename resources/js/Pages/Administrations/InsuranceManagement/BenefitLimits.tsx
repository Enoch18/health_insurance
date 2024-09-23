import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";
import { FaFolder } from "react-icons/fa6";

const BenefitLimits = ({insurance_type_id, coverage_levels}: any) => {
    const route = useRoute();

    return (
        <MainLayout title="Insurance Setups | Benefit Limits">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <Link className='text-blue-500' href={route('insurance-types.index')}>Insurance Management</Link> {'>'}
                    <Link className='text-blue-500' href={`/administrations/insurance-types/setups/${insurance_type_id}`}>Insurance Setups</Link> {'>'}
                    <h4>Benefit Limits</h4>
                </div>
            } />

            <TopHeaderSection title="Benefit Limits" hideAddBtn={true} />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                {coverage_levels.map((item:any, index:number) => (
                    <Link href={`/administrations/insurance-types/1/benefit-limits/${item.id}`} className="flex flex-col items-center justify-center border p-3 gap-2 rounded" key={index}>
                        <FaFolder className="text-6xl text-yellow-400" />
                        <p className="text-lg">{item.name}</p>
                    </Link>
                ))}
            </div>

            {coverage_levels.length === 0 && (
                <div className="flex flex-row justify-center items-center mt-5">
                    <h4 className="text-orange-600">Please add coverages to coverage levels' section.</h4>
                </div>
            )}
        </MainLayout>
    )
}

export default BenefitLimits;