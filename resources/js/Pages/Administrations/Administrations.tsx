import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import { FaBell, FaClipboardList, FaEnvelope, FaFolderOpen, FaHeadset, FaUsers, FaUserShield } from 'react-icons/fa6';
import { FaBalanceScale, FaCogs } from 'react-icons/fa';

const Administrations = () => {

    const links = [
        {label: 'User Management', icon: <FaUsers className='text-5xl' />},
        {label: 'Role & Permissions', icon: <FaUserShield className='text-5xl' />},
        {label: 'System Settings', icon: <FaCogs className='text-5xl' />},
        {label: 'Audit Logs', icon: <FaClipboardList className='text-5xl' />},
        {label: 'Notifications & Alerts', icon: <FaBell className='text-5xl' />},
        {label: 'Document Management', icon: <FaFolderOpen className='text-5xl' />},
        {label: 'Audit & Compliance', icon: <FaBalanceScale className='text-5xl' />},
        {label: 'Email Management', icon: <FaEnvelope className='text-5xl' />},
        {label: 'Support & Helpdesk', icon: <FaHeadset className='text-5xl' />}
    ];

    return (
        <MainLayout 
            title="Policy Holders"
        >
            <TopHeaderSection title='Administrations' hideAddBtn={true} />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                {links.map((item:any, index:number) => (
                    <button className='flex flex-col items-center border rounded p-3 gap-2' key={index}>
                        {item.icon}
                        <h4>{item.label}</h4>
                    </button>
                ))}
            </div>
        </MainLayout>
    )
}

export default Administrations;