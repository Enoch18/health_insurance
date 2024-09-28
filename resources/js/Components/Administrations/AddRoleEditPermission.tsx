import { router } from "@inertiajs/core";
import React from "react";

interface Props{
    permission: string,
    module_id: number;
    permission_id: number;
    role_id: number;
    defaultChecked: boolean;
}

const AddRoleEditPermission = ({permission, module_id, permission_id, role_id, defaultChecked}: Props) => {
    const handleChange = (e:any) => {
        router.post('/administrations/role-permissions', {
            module_id,
            permission_id,
            role_id
        });
    }

    return (
        <form>
            <label className="flex flex-row items-center gap-2 cursor-pointer">
                <input type="checkbox" onChange={handleChange} name="permission_id" defaultChecked={defaultChecked} />
                {permission}
            </label>
        </form>
    )
}

export default AddRoleEditPermission;