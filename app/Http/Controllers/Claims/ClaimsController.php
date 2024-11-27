<?php

namespace App\Http\Controllers\Claims;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Administrations\BenefitPackage;
use App\Models\Administrations\Service;
use App\Models\PolicyHolders\PolicyHolder;
use App\Models\Claims\Claim;
use App\Models\Claims\ClaimService;
use App\Http\Resources\Claims\ClaimsResource;

class ClaimsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $claims = Claim::with(['policyHolder'])->paginate(50);
        return Inertia::render('Claims/Claims', [
            'claims' => $claims
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Claims/CreateClaim', [
            'policy_holders' => PolicyHolder::all(),
            'services' => Service::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'policy_holder_id' => 'required|integer',
            'service_provider' => 'required|string',
            'claim_date' => 'required|date',
            'total_claimed_amount' => 'required|numeric',
            'claim_services' => 'required|array',
            'claim_services.*.service_id' => 'required|integer',
            'claim_services.*.claim_amount' => 'required|numeric'
        ]);

        try{
            \DB::beginTransaction();
            $request->merge(['claim_number' => $this->uniqueClaimNumber()]);
            $claim = Claim::create($request->all());

            foreach($request->claim_services as $service){
                $attributes = [
                    'claim_id' => $claim->id,
                    'service_id' => $service['service_id'],
                    'claim_amount' => $service['claim_amount']
                ];
                ClaimService::create($attributes);
            }
            \DB::commit();
        }catch(\Exception $e){
            \DB::rollBack();
            return Inertia::render('Claims/CreateClaim', [
                'policy_holders' => PolicyHolder::all(),
                'services' => Service::all(),
                'errors' => [
                    'detailed_error' => $e->getMessage(),
                    'error' => 'An error occurred while trying to save claim. Please try again later.',
                ],
            ])->with('error', 'An error occurred ' . $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $claim = Claim::with(['policyHolder'])->find($id);
        return Inertia::render('Claims/ShowClaim', [
            'claim' => new ClaimsResource($claim)
        ]);
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    /**
     * Generating a unique claim number
     */
    public function uniqueClaimNumber(){
        do {
            // Generate a random policy number
            $claimNumber = $this->generateRandomClaimNumber();
        } while ($this->claimNumberExists($claimNumber));

        return $claimNumber;
    }

    private function generateRandomClaimNumber(){
        // Generate a random 8-digit number
        $randomNumber = str_pad(rand(0, 99999999), 8, '0', STR_PAD_LEFT);
        return 'CL' . $randomNumber; // Prefix with "POL"
    }

    private function claimNumberExists($claimNumber){
        // Check if the policy number already exists in the database
        return Claim::where('claim_number', $claimNumber)->exists();
    }
}
