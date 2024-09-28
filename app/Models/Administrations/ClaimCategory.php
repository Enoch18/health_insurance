<?php

namespace App\Models\Administrations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use OwenIt\Auditing\Contracts\Auditable;

class ClaimCategory extends Model implements Auditable
{
    use HasFactory;
    use \OwenIt\Auditing\Auditable;

    public function benefitPackage() : BelongsTo{
        return $this->belongsTo(BenefitPackage::class, 'benefit_package_id');
    }
}
