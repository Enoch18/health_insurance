import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import { FaBell, FaBriefcase, FaClipboardList, FaEnvelope, FaFolderOpen, FaHeadset, FaUsers, FaUserShield } from 'react-icons/fa6';
import { FaBalanceScale, FaCogs } from 'react-icons/fa';
import useRoute from '@/Hooks/useRoute';
import { Link } from '@inertiajs/react';

const Administrations = () => {

    const route = useRoute();

    const links = [
        {label: 'User Management', icon: <FaUsers className='text-5xl' />, route: route('users-management.index')},
        {label: 'Role & Permissions', icon: <FaUserShield className='text-5xl' />, route: route('roles-and-permissions.index')},
        {label: 'Insurance Management', icon: <FaBriefcase className='text-5xl' />, route: route('insurance-types.index')},
        {label: 'System Settings', icon: <FaCogs className='text-5xl' />, route: route('users-management.index')},
        {label: 'Audit Logs', icon: <FaClipboardList className='text-5xl' />, route: route('users-management.index')},
        {label: 'Notifications & Alerts', icon: <FaBell className='text-5xl' />, route: route('users-management.index')},
        {label: 'Document Management', icon: <FaFolderOpen className='text-5xl' />, route: route('users-management.index')},
        {label: 'Audit & Compliance', icon: <FaBalanceScale className='text-5xl' />, route: route('users-management.index')},
        {label: 'Email Management', icon: <FaEnvelope className='text-5xl' />, route: route('users-management.index')},
        {label: 'Support & Helpdesk', icon: <FaHeadset className='text-5xl' />, route: route('users-management.index')}
    ];

    return (
        <MainLayout 
            title="Policy Holders"
        >
            <TopHeaderSection title='Administrations' hideAddBtn={true} />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                {links.map((item:any, index:number) => (
                    <Link href={item.route} className='flex flex-col items-center border rounded p-3 gap-2' key={index}>
                        {item.icon}
                        <h4 className='text-center'>{item.label}</h4>
                    </Link>
                ))}
            </div>
        </MainLayout>
    )
}

export default Administrations;