<?php

namespace App\Models\Administrations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
