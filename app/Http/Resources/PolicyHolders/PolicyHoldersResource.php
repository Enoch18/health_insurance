<?php

namespace App\Http\Resources\PolicyHolders;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PolicyHoldersResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'insurance_type_id' => $this->insurance_type_id,
            'coverage_period_id' => $this->coverage_period_id,
            'attributes' => [
                'policy_number' => $this->policy_number,
                'first_name' => $this->first_name,
                'last_name' => $this->last_name,
                'date_of_birth' => \Carbon\Carbon::parse($this->date_of_birth)->format('d M Y'),
                'gender' => $this->gender,
                'marital_status' => $this->marital_status,
                'email' => $this->email,
                'phone' => $this->phone,
                'address' => $this->address,
                'city' => $this->city,
                'state' => $this->state,
                'country' => $this->country,
                'coverage_level' => $this->coverages()?->where('status', '=', 'active')->orderBy('created_at', 'DESC')->first()?->coverageLevel?->name,
                'policy_start_date' => $this->policy_start_date,
                'policy_end_date' => $this->policy_end_date,
                'premium_amount' => $this->premium_amount,
                'employer_name' => $this->employer_name,
                'family_size' => $this->family_size,
                'last_payment_date' => $this->last_payment_date,
                'next_payment_due' => $this->next_payment_due,
                'outstanding_balance' => $this->outstanding_balance,
                'policy_status' => $this->policy_status,
                'created_at' => $this->created_at->format('d M Y'),
                'updated_at' => $this->updated_at
            ],
            'dependants' => $this->whenLoaded('dependants'),
            'exclusions' => $this->whenLoaded('exclusions'),
            'underwriting' => $this->whenLoaded('underwriting'),
        ];
    }
}
