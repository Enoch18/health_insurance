<?php

namespace App\Models\Claims;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\PolicyHolders\PolicyHolder;

class Claim extends Model
{
    use HasFactory;

    protected $fillable = [
        'policy_holder_id',
        'service_provider',
        'claim_number',
        'claim_date',
        'total_claimed_amount',
        'approved_amount',
        'rejection_reason',
        'status'
    ];

    public function services(): HasMany{
        return $this->hasMany(ClaimService::class, 'claim_id');
    }

    public function policyHolder(): BelongsTo{
        return $this->belongsTo(PolicyHolder::class, 'policy_holder_id');
    }
}
