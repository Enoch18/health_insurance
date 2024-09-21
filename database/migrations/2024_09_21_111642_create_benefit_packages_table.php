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
        Schema::create('benefit_packages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('insurance_type_id')->constrained('insurance_types')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('code');
            $table->text('description');
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('benefit_packages');
    }
};
