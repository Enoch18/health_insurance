<?php

namespace App\Models\Administrations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BenefitPackage extends Model
{
    use HasFactory;

    public function claimCategories() : HasMany {
        return $this->hasMany(ClaimCategory::class, 'benefit_package_id');
    }
}
