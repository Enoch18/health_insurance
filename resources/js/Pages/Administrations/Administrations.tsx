import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import { FaBell, FaBriefcase, FaClipboardList, FaEnvelope, FaFolderOpen, FaHeadset, FaUsers, FaUserShield } from 'react-icons/fa6';
import { FaBalanceScale, FaCogs } from 'react-icons/fa';
import useRoute from '@/Hooks/useRoute';
import { Link } from '@inertiajs/react';
import { MdLockOutline } from 'react-icons/md';

const Administrations = () => {

    const route = useRoute();

    const links = [
        {label: 'User Management', icon: <FaUsers className='text-5xl' />, route: route('users-management.index')},
        {label: 'System User Roles', icon: <FaUserShield className='text-5xl' />, route: route('roles.index')},
        {label: 'System Role Permissions', icon: <MdLockOutline className='text-5xl' />, route: route('permission.roles')},
        {label: 'Insurance Management', icon: <FaBriefcase className='text-5xl' />, route: route('insurance-types.index')},
        {label: 'System Settings', icon: <FaCogs className='text-5xl' />, route: '#'},
        {label: 'Audit Logs', icon: <FaClipboardList className='text-5xl' />, route: route('audit-logs.index')},
        {label: 'Notifications & Alerts', icon: <FaBell className='text-5xl' />, route: '#'},
        {label: 'Document Management', icon: <FaFolderOpen className='text-5xl' />, route: '#'},
        {label: 'Audit & Compliance', icon: <FaBalanceScale className='text-5xl' />, route: '#'},
        {label: 'Email Management', icon: <FaEnvelope className='text-5xl' />, route: '#'},
        {label: 'Support & Helpdesk', icon: <FaHeadset className='text-5xl' />, route: '#'}
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