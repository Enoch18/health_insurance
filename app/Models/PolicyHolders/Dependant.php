<?php

namespace App\Models\PolicyHolders;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Dependant extends Model
{
    use HasFactory;

    public function coverages(): MorphMany{
        return  $this->morphMany(PolicyHolderCoverage::class, 'coverable');
    }

    public function medicals(): MorphMany{
        return  $this->morphMany(MedicalInformation::class, 'medicable');
    }

    public function policyHolder(): BelongsTo{
        return  $this->belongsTo(PolicyHolder::class, 'policy_holder_id');
    }

    public function exclusions(): MorphMany{
        return  $this->morphMany(Exclusion::class, 'exclusionable');
    }
}
