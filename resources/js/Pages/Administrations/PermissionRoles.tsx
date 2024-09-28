import React from "react"
import MainLayout from "@/Layouts/MainLayout"
import Breadcrumbs from "@/Components/Common/Breadcrumbs";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import { FaUserShield } from "react-icons/fa6";

const PermissionRoles = ({roles}: any) => {
    const route = useRoute();

    return (
        <MainLayout title="Permission Roles">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <h4>Permission Roles</h4>
                </div>
            } />
            <TopHeaderSection title='Permission Roles' hideAddBtn={true} />

            <div className="grid grid-cols-4 gap-3">
                {roles.map((item:any, index:number) => (
                    <Link href={`/administrations/role-permissions/${item.id}`} className='flex flex-col items-center border rounded p-3 gap-2' key={index}>
                        <FaUserShield className="text-5xl" />
                        <h4 className='text-center'>{item.name}</h4>
                    </Link>
                ))}
            </div>
        </MainLayout>
    )
}

export default PermissionRoles;