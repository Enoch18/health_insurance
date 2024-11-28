<?php

namespace App\Models\PolicyHolders;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PremiumPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'policy_holder_id',
        'payment_date',
        'due_date',
        'amount_due',
        'amount_paid',
        'payment_method',
        'payment_status',
        'transaction_reference',
        'currency',
        'description',
        'receipt_url',
        'processed_by'
    ];

    public function policyHolder(): BelongsTo
    {
        return $this->belongsTo(PolicyHolder::class, 'policy_holder_id');
    }
}
