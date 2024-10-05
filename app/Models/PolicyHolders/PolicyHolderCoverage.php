<?php

namespace App\Models\PolicyHolders;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphToMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PolicyHolderCoverage extends Model
{
    use HasFactory;

    protected $fillable = [
        'coverable_id',
        'coverable_type',
        'coverage_level_id',
        'premium_amount',
        'outstanding_balance',
        'start_date',
        'end_date',
        'status'
    ];

    public function coverable(): MorphTo
    {
        return $this->morphTo();
    }

    public function coverageLevel (): BelongsTo{
        return $this->belongsTo(\App\Models\Administrations\CoverageLevel::class, 'coverage_level_id');
    }
}
