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
        Schema::create('underwriting_assessments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('policy_holder_id')->constrained('policy_holders')->references('id')->cascadeOnUpdate()->cascadeOnDelete();
            $table->enum('risk_level', ['low', 'moderate', 'high']);
            $table->text('notes')->nullable();
            $table->enum('status', ['accepted', 'rejected', 'pending']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('underwriting_assessments');
    }
};
