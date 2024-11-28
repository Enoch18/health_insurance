<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('premium_payments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('policy_holder_id')->constrained('policy_holders')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->date('payment_date')->nullable();
            $table->date('due_date');
            $table->decimal('amount_due', 15, 2);
            $table->decimal('amount_paid', 15, 2)->default(0.00);
            $table->string('payment_method')->nullable();
            $table->string('payment_status')->default('pending');
            $table->string('transaction_reference')->nullable();
            $table->string('currency', 3)->default('USD');
            $table->text('description')->nullable();
            $table->string('receipt_url')->nullable();
            $table->foreignId('processed_by')->nullable()->constrained('users')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('premium_payments');
    }
};
