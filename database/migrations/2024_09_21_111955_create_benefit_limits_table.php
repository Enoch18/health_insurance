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
        Schema::create('benefit_limits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('coverage_level_id')->constrained('coverage_levels')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('benefit_package_id')->constrained('benefit_packages')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('policy_year_id')->constrained('policy_years')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->decimal('limit_amount', 10, 2);
            $table->boolean('can_deduct_from_overall')->default(false);
            $table->text('notes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('benefit_limits');
    }
};
