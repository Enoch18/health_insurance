<?php

namespace App\Models\PolicyHolders;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class MedicalInformation extends Model
{
    use HasFactory;

    public function medicable(): MorphTo
    {
        return $this->morphTo();
    }
}
