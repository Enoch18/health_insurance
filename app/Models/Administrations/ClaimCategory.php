<?php

namespace App\Models\Administrations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClaimCategory extends Model
{
    use HasFactory;

    public function benefitPackage() : BelongsTo{
        return $this->belongsTo(BenefitPackage::class, 'benefit_package_id');
    }
}
