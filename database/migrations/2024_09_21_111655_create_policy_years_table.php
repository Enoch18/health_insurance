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
        Schema::create('policy_years', function (Blueprint $table) {
            $table->id();
            $table->foreignId('coverage_level_id')->constrained('coverage_levels')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->integer('year');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('policy_years');
    }
};
