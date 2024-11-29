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
            if($request->status == 'accepted'){
                PremiumPayment::create([
                    'policy_holder_id' => $request->policy_holder_id,
                    'transaction_reference' => $this->uniqueTransactionReference(),
                    'due_date' => date('y-m-d'),
                    'amount_due' => $this->premiumRate($policy_holder_id),
                    'amount_paid' => 0,
                    'currency' => 'USD',
                    'description' => "Premium Payment",
                ]);
            }
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

    private function premiumRate($policy_holder_id){
        $age_ranges = \App\Models\Administrations\CoverageAgeRange::all();

        // Policy Holder
        $policyHolder = \App\Models\PolicyHolders\PolicyHolder::find($policy_holder_id);

        $age = \Carbon\Carbon::parse($policyHolder->date_of_birth)->age;

        // Getting the age range
        $age_range = null;
        foreach($age_ranges as $item){
            if($age >= $item->min_age && $age <= $item->max_age){
                $age_range = $item;
            }
        }

        $coverage_level_id = $policyHolder->coverages()->where('status', '=', 'active')->first()?->coverage_level_id;

        // Premium Rates
        $premium_rates = \App\Models\Administrations\PremiumRate::where('coverage_level_id', '=', $coverage_level_id)
                            ->where('coverage_age_range_id', '=', $coverage_level_id)
                            ->orderBy('created_at', 'desc')
                            ->first();
        return $premium_rates?->individual_price;
    }

    
    /*
    Generating a unique transaction number
    */
    public function uniqueTransactionReference(){
        do {
            // Generate a random policy number
            $transactionReference = $this->generateRandomtransactionReference();
        } while ($this->transactionReferenceExists($transactionReference));

        return $transactionReference;
    }

    private function generateRandomtransactionReference(){
        // Generate a random 8-digit number
        $randomNumber = str_pad(rand(0, 99999999), 8, '0', STR_PAD_LEFT);
        return $randomNumber; // Prefix with "POL"
    }

    private function transactionReferenceExists($transactionReference){
        // Check if the policy number already exists in the database
        return PremiumPayment::where('transaction_reference', $transactionReference)->exists();
    }
}
