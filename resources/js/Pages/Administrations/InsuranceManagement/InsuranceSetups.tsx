import React from "react";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import { FaDollarSign, FaGift, FaHourglassHalf, FaMedal, FaTags, FaTrophy, FaUserClock } from "react-icons/fa6";
import { FaCalendarAlt, FaTachometerAlt } from "react-icons/fa";
import { parsePageId } from "@/Helpers/helper";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";

const InsuranceSetups = ({insurance_type}:any) => {
    const route = useRoute();

    const links = [
        {label: 'Coverage Levels', icon: <FaTrophy className='text-5xl' />, route: route('coverage-levels.index', {setup_id: parsePageId()})},
        {label: 'Benefits Packages', icon: <FaGift className='text-5xl' />, route: route('benefit-packages.index', {setup_id: parsePageId()})},
        {label: 'Claim Categories', icon: <FaTags className='text-5xl' />, route: route('claim-categories.index', {setup_id: parsePageId()})},
        {label: 'Policy Years', icon: <FaHourglassHalf className='text-5xl' />, route: route('policy-years.index', {setup_id: parsePageId()})},
        {label: 'Coverage Age Ranges', icon: <FaUserClock className='text-5xl' />, route: route('coverage-age-ranges.index', {setup_id: parsePageId()})},
        {label: 'Coverage Periods', icon: <FaCalendarAlt className='text-5xl' />, route: route('coverage-periods.index', {setup_id: parsePageId()})},
        {label: 'Premium Rates', icon: <FaDollarSign className='text-5xl' />, route: route('premium-rates.index', {setup_id: parsePageId()})},
        {label: 'Benefit Limits', icon: <FaTachometerAlt className='text-5xl' />, route: route('benefit-limits.index', {setup_id: parsePageId()})},
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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
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