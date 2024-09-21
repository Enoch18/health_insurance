<?php

namespace App\Models\Administrations;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RolePermission extends Model
{
    use HasFactory;

    public function role() : BelongsTo{
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function permission() : BelongsTo{
        return $this->belongsTo(Permission::class, 'permission_id');
    }

    public function module() : BelongsTo{
        return $this->belongsTo(Module::class, 'module_id');
    }
}
