<?php

namespace App\Models\Administrations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CoverageLevel extends Model implements Auditable
{
    use HasFactory;
    use \OwenIt\Auditing\Auditable;

    public function policyHolderCoverages(): HasMany{
        return $this->hasMany(\App\Models\PolicyHolders\PolicyHolderCoverage, 'coverage_level_id');
    }
}
