<?php

namespace App\Models\Administrations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Claims\ClaimService;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'benefit_package_id',
        'insurance_type_id'
    ];

    public function benefit(){
        return $this->belongsTo(BenefitPackage::class, 'benefit_package_id');
    }

    public function claimServices(){
        return $this->belongsTo(ClaimService::class, 'service_id');
    }
}
