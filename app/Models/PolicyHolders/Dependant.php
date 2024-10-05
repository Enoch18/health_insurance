<?php

namespace App\Models\PolicyHolders;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Dependant extends Model
{
    use HasFactory;

    public function coverages(): MorphMany{
        return  $this->morphMany(PolicyHolderCoverage::class, 'coverable');
    }

    public function medicals(): MorphMany{
        return  $this->morphMany(MedicalInformation::class, 'medicable');
    }
}
