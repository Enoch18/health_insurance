<?php

namespace App\Models\Administrations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class CoverageLevel extends Model implements Auditable
{
    use HasFactory;
    use \OwenIt\Auditing\Auditable;
}
