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
        Schema::create('policy_benefits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('policy_holder_coverage_id')->constrained('policy_holder_coverages')->references('id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->decimal('limit_amount', 10, 2);
            $table->decimal('limit_used', 10, 2)->default(0);
            $table->decimal('remaining_amount', 10, 2);
            $table->decimal('authorised_amount', 10, 2)->default(0);
            $table->decimal('claimed_amount', 10, 2)->default(0);
            $table->decimal('insurer_pay', 10, 2)->default(0);
            $table->decimal('policy_holder_pay', 10, 2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('policy_benefits');
    }
};
