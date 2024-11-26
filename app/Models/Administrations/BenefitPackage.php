<?php

namespace App\Models\Administrations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use OwenIt\Auditing\Contracts\Auditable;

class BenefitPackage extends Model implements Auditable
{
    use HasFactory;
    use \OwenIt\Auditing\Auditable;

    public function claimCategories() : HasMany {
        return $this->hasMany(ClaimCategory::class, 'benefit_package_id');
    }

    public function services(){
        return $this->hasMany(Service::class, 'benefit_package_id');
    }
}
