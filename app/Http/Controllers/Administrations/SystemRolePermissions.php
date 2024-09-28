<?php

namespace App\Http\Controllers\Administrations;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrations\Role;
use App\Models\Administrations\Module;
use App\Models\Administrations\Permission;
use App\Models\Administrations\RolePermission;
use Inertia\Inertia;

class SystemRolePermissions extends Controller
{
    public function index(string $role_id){
        $role = Role::find($role_id)?->name;

        // Collecting all modules from the database
        $modules = Module::all();

        // Iterating over the modules
        $role_permissions = $modules->map(function($item) use ($role_id){
            $permissions = Permission::all();

            $module_id = $item->id;

            // Getting all permissions
            $role_permissions = $permissions->map(function($permission) use($module_id, $role_id){
                $exists = RolePermission::where('role_id', '=', $role_id)->where('module_id', '=', $module_id)->where('permission_id', '=', $permission->id)->exists();
                
                return collect([
                    'permission_id' => $permission->id,
                    'name' => $permission->name,
                    'description' => $permission->description,
                    'value' => $exists
                ]);
            });

            return collect([
                'module_id' => $item->id,
                'module' => $item->name,
                'permissions' => $role_permissions
            ]);
        });

        return Inertia::render('Administrations/Permissions', [
            'role_id' => $role_id,
            'role' => $role,
            'role_permissions' => $role_permissions
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $rolePermission = RolePermission::where('module_id', '=', $request->module_id)->where('permission_id', '=', $request->permission_id)->where('role_id', '=', $request->role_id)->first();
        if(!$rolePermission){
            $rolePermission = new RolePermission;
        }
        $rolePermission->role_id = $request->role_id;
        $rolePermission->module_id = $request->module_id;
        $rolePermission->permission_id = $request->permission_id;
        $rolePermission->save();
    }

    public function permissionRoles(){
        $roles = Role::all();

        return Inertia::render('Administrations/PermissionRoles', [
            'roles' => $roles
        ]);
    }
}
