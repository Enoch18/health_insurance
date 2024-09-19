import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';

const UserManagement = () => {
    return (
        <MainLayout title="User Management">
            <TopHeaderSection title='User Management' hideAddBtn={true} />
        </MainLayout>
    )
}

export default UserManagement;