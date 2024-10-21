<?php

namespace App\Http\Controllers\PolicyHolders;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PolicyHolders\PolicyHolder;
use App\Http\Resources\PolicyHolders\PolicyHoldersResource;
use Inertia\Inertia;

class MedicalInformationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $policy_holder_id)
    {
        $policy_holder = PolicyHolder::find($policy_holder_id);
        return Inertia::render('PolicyHolders/MedicalInformation', [
            'policy_holder' => new PolicyHoldersResource($policy_holder)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(string $policy_holder_id)
    {
        $policy_holder = PolicyHolder::with('dependants')->find($policy_holder_id);
        return Inertia::render('PolicyHolders/CreateMedicalInformation', [
            'policy_holder' => new PolicyHoldersResource($policy_holder)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $policy_holder_id)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $policy_holder_id, string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $policy_holder_id, string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $policy_holder_id, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $policy_holder_id, string $id)
    {
        //
    }
}
