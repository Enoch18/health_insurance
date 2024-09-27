import React from "react"
import Breadcrumbs from "@/Components/Common/Breadcrumbs"
import MainLayout from "@/Layouts/MainLayout"
import { Link } from "@inertiajs/react"
import useRoute from "@/Hooks/useRoute"
import TopHeaderSection from "@/Components/Common/TopHeaderSection"
import { FaFolder } from "react-icons/fa6"

const PremiumYearsOptions = ({insurance_type_id, years}:any) => {
    const route = useRoute();

    return (
        <MainLayout title="Insurance Setups | Premium Years Options">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <Link className='text-blue-500' href={route('insurance-types.index')}>Insurance Management</Link> {'>'}
                    <Link className='text-blue-500' href={`/administrations/insurance-types/setups/${insurance_type_id}`}>Insurance Setups</Link> {'>'}
                    <h4>Premium Rate Policy Years</h4>
                </div>
            } />

            <TopHeaderSection title="Premium Rate Policy Years" hideAddBtn={true} />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                {years.map((item:any, index:number) => (
                    <Link href={`/administrations/insurance-types/${insurance_type_id}/years/${item.id}/premium-coverage-levels`} className="flex flex-col items-center justify-center border p-3 gap-2 rounded" key={index}>
                        <FaFolder className="text-6xl text-yellow-400" />
                        <p className="text-lg">{item.year}</p>
                    </Link>
                ))}
            </div>

            {years.length === 0 && (
                <div className="flex flex-row justify-center items-center mt-5">
                    <h4 className="text-orange-600">Please add Policy Years to Policy Years' section.</h4>
                </div>
            )}
        </MainLayout>
    )
}

export default PremiumYearsOptions;