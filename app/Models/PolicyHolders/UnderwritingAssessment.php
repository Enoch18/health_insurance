<?php

namespace App\Models\PolicyHolders;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UnderwritingAssessment extends Model
{
    use HasFactory;

    protected $fillable = [
        'policy_holder_id',
        'risk_level',
        'notes',
        'status'
    ];

    public function medicable(): MorphTo
    {
        return $this->morphTo();
    }

    public function policyHolder(): BelongsTo
    {
        return $this->belongsTo(PolicyHolder::class, 'policy_holder_id');
    }
}
