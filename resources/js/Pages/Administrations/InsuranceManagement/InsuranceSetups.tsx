import React from "react";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import { FaDollarSign, FaGift, FaHourglassHalf, FaMedal, FaTags, FaTrophy, FaUserClock } from "react-icons/fa6";
import { FaCalendarAlt, FaTachometerAlt, FaTools } from "react-icons/fa";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";

const InsuranceSetups = ({insurance_type_id, insurance_type}:any) => {
    const route = useRoute();

    const links = [
        {label: 'Coverage Levels', icon: <FaTrophy className='text-5xl' />, route: `/administrations/insurance-types/${insurance_type_id}/coverage-levels`},
        {label: 'Benefits Packages', icon: <FaGift className='text-5xl' />, route: `/administrations/insurance-types/${insurance_type_id}/benefit-packages`},
        {label: 'Claim Categories', icon: <FaTags className='text-5xl' />, route: `/administrations/insurance-types/${insurance_type_id}/claim-categories`},
        {label: 'Policy Years', icon: <FaHourglassHalf className='text-5xl' />, route: `/administrations/insurance-types/${insurance_type_id}/policy-years`},
        {label: 'Coverage Age Ranges', icon: <FaUserClock className='text-5xl' />, route: `/administrations/insurance-types/${insurance_type_id}/coverage-age-ranges`},
        {label: 'Coverage Periods', icon: <FaCalendarAlt className='text-5xl' />, route: `/administrations/insurance-types/${insurance_type_id}/coverage-periods`},
        {label: 'Premium Rates', icon: <FaDollarSign className='text-5xl' />, route: `/administrations/insurance-types/${insurance_type_id}/years`},
        {label: 'Services', icon: <FaTools className='text-5xl' />, route: `/administrations/insurance-types/${insurance_type_id}/services`},
        {label: 'Benefit Limits', icon: <FaTachometerAlt className='text-5xl' />, route: `/administrations/insurance-types/${insurance_type_id}/benefit-limits`},
    ];

    return (
        <MainLayout title="Insurance Setups">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <Link className='text-blue-500' href={route('insurance-types.index')}>Insurance Management</Link> {'>'}
                    <h4>Insurance Setups</h4>
                </div>
            } />

            <TopHeaderSection title={insurance_type.name} hideAddBtn={true} />

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                {links.map((item:any, index:number) => (
                    <Link href={item.route} className='flex flex-col items-center border rounded p-3 gap-2' key={index}>
                        {item.icon}
                        <h4>{item.label}</h4>
                    </Link>
                ))}
            </div>
        </MainLayout>
    )
}

export default InsuranceSetups;