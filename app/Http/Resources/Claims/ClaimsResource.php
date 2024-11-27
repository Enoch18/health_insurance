<?php

namespace App\Http\Resources\Claims;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClaimsResource extends JsonResource
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
            'policy_holder_id' => $this->policy_holder_id,
            'claim_number' => $this->claim_number,
            'service_provider' => $this->service_provider,
            'claim_date' => $this->claim_date,
            'total_claimed_amount' => $this->total_claimed_amount,
            'approved_amount' => $this->approved_amount,
            'rejection_reason' => $this->rejection_reason,
            'status' => $this->status,
            'policy_holder' => $this->policyHolder,
            'services' => ClaimServicesResource::collection($this->services)
        ];
    }
}
