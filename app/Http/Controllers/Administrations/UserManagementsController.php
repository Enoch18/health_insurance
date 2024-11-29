<?php

namespace App\Http\Controllers\Administrations;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Administrations\Role;
use Illuminate\Support\Facades\Hash;

class UserManagementsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::paginate(10);
        $roles = Role::all();

        return Inertia::render('Administrations/UserManagement', [
            'users' => $users,
            'roles' => $roles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'role_id' => 'required|integer',
            'password' => 'nullable|sometimes|string|min:8'
        ]);


        try{
            if($request->password == '' || $request->password == 'undefined'){
                $request->merge(['password' => Hash::make("Admin@123")]);
            }else{
                $request->merge(['password' => Hash::make($request->password)]);
            }
            User::create($request->all());
        }catch(\Exception $e){
            return redirect()->back()->withErrors([
                'detailed_error' => $e->getMessage(),
                'error' => 'An error occurred while trying to save. Please try again later.',
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'role_id' => 'required|integer',
            'password' => 'nullable|sometimes|string|min:8'
        ]);


        try{
            $user =  User::find($id);
            if($request->password == '' || $request->password == 'undefined'){
                $request->merge(['password' => $user->password]);
            }else{
                $request->merge(['password' => Hash::make($user->password)]);
            }
           $user->update($request->all());
        }catch(\Exception $e){
            return redirect()->back()->withErrors([
                'detailed_error' => $e->getMessage(),
                'error' => 'An error occurred while trying to save. Please try again later.',
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
