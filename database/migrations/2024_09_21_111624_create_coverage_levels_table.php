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
        Schema::create('coverage_levels', function (Blueprint $table) {
            $table->id();
            $table->foreignId('insurance_type_id')->constrained('insurance_types')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('code');
            $table->string('name');
            $table->text('description')->nullable();
            $table->enum('tier_level', [1, 2])->default(1);
            $table->enum('policy_type', ['individual', 'corporate', 'any'])->default('any');
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coverage_levels');
    }
};
