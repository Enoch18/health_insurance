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
        Schema::create('claims', function (Blueprint $table) {
            $table->id();
            $table->foreignId('policy_holder_id')->constrained('policy_holders')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('service_provider');
            $table->date('claim_date');
            $table->decimal('total_claimed_amount', 10, 2);
            $table->decimal('approved_amount', 10, 2)->default(0);
            $table->string('rejection_reason')->nullable();
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('claims');
    }
};
