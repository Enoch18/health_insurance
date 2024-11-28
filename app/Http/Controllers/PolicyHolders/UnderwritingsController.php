<?php

namespace App\Http\Controllers\PolicyHolders;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PolicyHolders\PolicyHolder;
use App\Models\PolicyHolders\PremiumPayment;
use App\Models\PolicyHolders\UnderwritingAssessment;
use App\Http\Resources\PolicyHolders\PolicyHoldersResource;
use Inertia\Inertia;

class UnderwritingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $policy_holder_id)
    {
        $policy_holder = PolicyHolder::with(['dependants', 'dependants.exclusions', 'exclusions', 'underwriting'])->find($policy_holder_id);
        return Inertia::render('PolicyHolders/Underwriting', [
            'policy_holder' => new PolicyHoldersResource($policy_holder)
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
        $request->validate([
            'policy_holder_id' => 'required|integer',
            'risk_level' => 'required|string|in:low,moderate,high',
            'notes' => 'nullable|sometimes|string',
            'status' => 'required|string|in:pending,accepted,rejected'
        ]);

        try{        
            \DB::beginTransaction(); 
            $underwriting = UnderwritingAssessment::create($request->all());
            PremiumPayment::create([
                'policy_holder_id' => $request->policy_holder_id,
                'due_date' => date('y-m-d'),
                'amount_due' => 150,
                'amount_paid' => 0,
                'currency' => 'USD',
                'description' => "Premium Payment",
            ]);
            \DB::commit();
        }catch(\Exception $e){
            \DB::rollBack();
            $policy_holder = PolicyHolder::with('dependants')->find($policy_holder_id);

            return redirect()->back()->withErrors([
                'detailed_error' => $e->getMessage(),
                'error' => 'An error occurred while trying to save. Please try again later.',
            ]);
        }
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
}
