<?php

namespace App\Models\PolicyHolders;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Claims\Claim;

class PolicyHolder extends Model
{
    use HasFactory;

    public function coverages(): MorphMany{
        return  $this->morphMany(PolicyHolderCoverage::class, 'coverable');
    }

    public function medicals(): MorphMany{
        return  $this->morphMany(MedicalInformation::class, 'medicable');
    }

    public function dependants(): HasMany{
        return  $this->hasMany(Dependant::class, 'policy_holder_id');
    }

    public function claims(): HasMany{
        return  $this->hasMany(Claim::class, 'policy_holder_id');
    }

    public function exclusions(): MorphMany{
        return  $this->morphMany(Exclusion::class, 'exclusionable');
    }

    public function underwriting(): HasOne{
        return  $this->hasOne(UnderwritingAssessment::class, 'policy_holder_id');
    }

    public function payments(): HasMany{
        return  $this->hasMany(PremiumPayment::class, 'policy_holder_id');
    }
}
