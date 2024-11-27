<?php

namespace App\Http\Resources\Claims;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClaimServicesResource extends JsonResource
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
            'service' => $this->service?->name,
            'claim_amount' => $this->claim_amount,
            'benefit' => $this->service?->benefit?->description,
            'approved_amount' => $this->approved_amount,
            'rejected_amount' => $this->rejected_amount
        ];
    }
}
