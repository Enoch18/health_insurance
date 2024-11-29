<?php

namespace App\Http\Controllers\PolicyHolders;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PolicyHolders\PolicyHolder;
use App\Http\Resources\PolicyHolders\PolicyHoldersResource;
use Inertia\Inertia;
use App\Models\Administrations\BenefitPackage;

class PolicyHolderBenefitsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $policy_holder_id)
    {
        $policy_holder = PolicyHolder::find($policy_holder_id);
        $benefits = BenefitPackage::all();
        return Inertia::render('PolicyHolders/PolicyHolderBenefits', [
            'policy_holder' => new PolicyHoldersResource($policy_holder),
            'benefits' => $benefits
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(string $policy_holder_id)
    {
        //
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
