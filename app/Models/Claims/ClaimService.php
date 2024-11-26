<?php

namespace App\Models\Claims;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClaimService extends Model
{
    use HasFactory;

    protected $fillable = [
        'claim_id',
        'service_id',
        'claim_amount'
    ];

    public function claim(): BelongsTo{
        return $this->belongsTo(Claim::class, 'claim_id');
    }
}
