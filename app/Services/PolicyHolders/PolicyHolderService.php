<?php
namespace App\Services\PolicyHolders;
use App\Models\PolicyHolders\PolicyHolder;
use App\Models\PolicyHolders\MedicalInformation;
use App\Models\PolicyHolders\PolicyHolderCoverage;
use Exception;

class PolicyHolderService{
    protected $policyNumberService;
    protected $policyHolderCoverageService;

    public function __construct(
        PolicyNumberService $policyNumberService, 
        PolicyHolderCoverageService $policyHolderCoverageService
    ){
        $this->policyNumberService = $policyNumberService;
        $this->policyHolderCoverageService = $policyHolderCoverageService;
    }

    /**
     * Creating the policy holder
     */
    public function createPolicyHolder($request, $policy_holder_id){
        try{
            $policyHolder = new PolicyHolder;

            if($policy_holder_id){
                $policyHolder = PolicyHolder::find($policy_holder_id);
            }

            $policyHolder->policy_number = $this->policyNumberService->uniquePolicyNumber();
            $policyHolder->insurance_type_id = $request->insurance_type_id;
            $policyHolder->coverage_period_id = $request->coverage_period_id;
            $policyHolder->first_name = $request->first_name;
            $policyHolder->last_name = $request->last_name;
            $policyHolder->date_of_birth = $request->date_of_birth;
            $policyHolder->gender = $request->gender;
            $policyHolder->marital_status = $request->marital_status;
            $policyHolder->email = $request->email;
            $policyHolder->phone = $request->phone;
            $policyHolder->address = $request->address;
            $policyHolder->city = $request->city;
            $policyHolder->state = $request->state;
            $policyHolder->country = $request->country;
            $policyHolder->policy_start_date = $request->policy_start_date;
            $policyHolder->policy_end_date = $request->policy_end_date;
            $policyHolder->premium_amount = $request->premium_amount;
            $policyHolder->employer_name = $request->employer_name;
            $policyHolder->family_size = $request->family_size ?? 0;
            $policyHolder->last_payment_date = $request->last_payment_date;
            $policyHolder->next_payment_due = $request->next_payment_due;
            $policyHolder->outstanding_balance = $request->outstanding_balance;
            $policyHolder->policy_status = $request->policy_status;
            $policyHolder->save();

            // Saving the coverage service
            $this->policyHolderCoverageService->createPolicyLevelCoverage($policyHolder, $request);

            return $policyHolder;
        }catch(Exception $e){
            \Log::error('An error occurred: ' . $e->getMessage());
            throw new Exception('An error occurred while trying to save policy holder ' . $e->getMessage());
        }
    }
}