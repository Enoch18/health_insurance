import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';

const RolesAndPermissions = () => {
    return (
        <MainLayout title="User Management">
            <TopHeaderSection title='Roles' hideAddBtn={true} />
        </MainLayout>
    )
}

export default RolesAndPermissions;