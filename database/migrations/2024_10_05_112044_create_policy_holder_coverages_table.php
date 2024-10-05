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
        Schema::create('policy_holder_coverages', function (Blueprint $table) {
            $table->id();
            $table->morphs('coverable'); // with policy holder or dependant ids.
            $table->foreignId('coverage_level_id')->constrained('coverage_levels')->references('id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->decimal('premium_amount', 10, 2)->nullable();
            $table->decimal('outstanding_balance', 10, 2)->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->enum('status', ['active', 'inactive']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('policy_holder_coverages');
    }
};
