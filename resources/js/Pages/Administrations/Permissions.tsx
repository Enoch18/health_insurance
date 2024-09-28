import React from 'react';
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from '@/Components/Common/TopHeaderSection';
import Breadcrumbs from '@/Components/Common/Breadcrumbs';
import { Link } from '@inertiajs/react';
import useRoute from '@/Hooks/useRoute';
import AddRoleEditPermission from '@/Components/Administrations/AddRoleEditPermission';

const RolesAndPermissions = ({role_id, role, role_permissions}: any) => {
    const route = useRoute();
    
    return (
        <MainLayout title="User Management">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <h4>{role} Permissions</h4>
                </div>
            } />

            <TopHeaderSection title={`${role} Permissions`} hideAddBtn={true} />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                {role_permissions.map((item:any, index:number) => (
                    <div className='p-3 bg-gray-50 dark:bg-gray-600 rounded shadow' key={index}>
                        <h4 className='text-lg font-semibold'>{item.module} Permissions</h4><hr />

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-3'>
                            {item.permissions.map((permission:any, pIndex: number) => (
                                <div key={pIndex}>
                                    <AddRoleEditPermission
                                        permission={permission.description}
                                        permission_id={permission.permission_id}
                                        module_id={item.module_id}
                                        role_id={role_id}
                                        defaultChecked={permission.value}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </MainLayout>
    )
}

export default RolesAndPermissions;