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
        Schema::create('premium_rates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('coverage_level_id')->constrained('coverage_levels')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('policy_year_id')->constrained('policy_years')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('coverage_period_id')->constrained('coverage_periods')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('coverage_age_range_id')->constrained('coverage_age_ranges')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->decimal('individual_price', 10, 2)->nullable();
            $table->decimal('corporate_price', 10, 2)->nullable();
            $table->double('tax_percentage')->nullable();
            $table->decimal('tax_amount', 10, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('premium_rates');
    }
};
