<?php

namespace App\Models\PolicyHolders;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\MorphTo;

class Exclusion extends Model
{
    use HasFactory;

    protected $fillable = [
        'exclusionable_type',
        'exclusionable_id',
        'exclusion_name',
        'exclusion_details'
    ];

    public function medicable(): MorphTo
    {
        return $this->morphTo();
    }

    public function exclusionable(): MorphTo
    {
        return $this->morphTo();
    }
}
