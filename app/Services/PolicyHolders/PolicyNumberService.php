<?php
namespace App\Services\PolicyHolders;
use App\Models\PolicyHolders\PolicyHolder;

class PolicyNumberService{
    public function uniquePolicyNumber(){
        do {
            // Generate a random policy number
            $policyNumber = $this->generateRandomPolicyNumber();
        } while ($this->policyNumberExists($policyNumber));

        return $policyNumber;
    }

    private function generateRandomPolicyNumber(){
        // Generate a random 8-digit number
        $randomNumber = str_pad(rand(0, 99999999), 8, '0', STR_PAD_LEFT);
        return 'POL' . $randomNumber; // Prefix with "POL"
    }

    private function policyNumberExists($policyNumber){
        // Check if the policy number already exists in the database
        return PolicyHolder::where('policy_number', $policyNumber)->exists();
    }
}