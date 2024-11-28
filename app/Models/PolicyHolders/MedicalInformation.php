<?php

namespace App\Models\PolicyHolders;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class MedicalInformation extends Model
{
    use HasFactory;

    protected $fillable = [
        'medicable_id',
        'medicable_type',
        'condition',
        'medical_history_notes',
        'primary_physician',
        'physician_phone',
        'physician_email',
        'last_checkup_date',
        'status'
    ];

    public function medicable(): MorphTo
    {
        return $this->morphTo();
    }
}
