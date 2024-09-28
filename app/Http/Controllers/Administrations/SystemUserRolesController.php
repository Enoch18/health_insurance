<?php

namespace App\Http\Controllers\Administrations;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrations\Role;

use Inertia\Inertia;

class SystemUserRolesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::all();
        return Inertia::render('Administrations/Roles', [
            'roles' => $roles
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string'
        ]);

        $role = new Role;
        $role->name = $request->name;
        $role->save();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string'
        ]);

        $role = Role::find($id);
        $role->name = $request->name;
        $role->save();
    }
}
