import React from "react";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import { FaGift, FaLayerGroup, FaScaleBalanced, FaWrench } from "react-icons/fa6";
import { FaDonate, FaFileInvoiceDollar } from "react-icons/fa";

const InsuranceSetups = ({insurance_type}:any) => {
    const route = useRoute();

    const links = [
        {label: 'Insurance Plan', icon: <FaFileInvoiceDollar className='text-5xl' />, route: route('users-management.index')},
        {label: 'Plan Setup', icon: <FaWrench className='text-5xl' />, route: route('users-management.index')},
        {label: 'Benefits Management', icon: <FaGift className='text-5xl' />, route: route('roles-and-permissions.index')},
        {label: 'Policy Setup', icon: <FaLayerGroup className='text-5xl' />, route: route('insurance-types.index')},
        {label: 'Financial Limit', icon: <FaScaleBalanced className='text-5xl' />, route: route('users-management.index')},
        {label: 'Premium Plans', icon: <FaDonate className='text-5xl' />, route: route('users-management.index')}
    ];

    return (
        <MainLayout title="Insurance Setups">
            <TopHeaderSection 
                title={
                    <div className='flex flex-row gap-1 items-center'>
                        <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                        <Link className='text-blue-500' href={route('insurance-types.index')}>Insurance Management</Link> {'>'}
                        <h4>Insurance Setups</h4>
                    </div>
                }
                hideAddBtn={true}
            />

            <h4 className="text-xl font-semibold mb-2">{insurance_type.name}</h4>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
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