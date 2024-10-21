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
        Schema::create('medical_information', function (Blueprint $table) {
            $table->id();
            $table->morphs('medicable'); 
            $table->text('condition')->nullable();
            $table->boolean('is_pre_existing_condition');
            $table->text('medical_history_notes')->nullable();
            $table->string('primary_physician')->nullable();
            $table->string('physician_phone')->nullable();
            $table->string('physician_email')->nullable();
            $table->date('last_checkup_date')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('medical_information');
    }
};
