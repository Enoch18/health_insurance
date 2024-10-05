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
        Schema::create('dependants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('policy_holder_id')->constrained('policy_holders')->references('id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('first_name');
            $table->string('last_name');
            $table->date('date_of_birth');
            $table->enum('relationship_to_policy_holder', ['spouse', 'child', 'parent', 'sibling', 'other']);
            $table->enum('gender', ['male', 'female', 'other']);
            $table->string('contact_number')->nullable();
            $table->string('email')->nullable();
            $table->text('address')->nullable();
            $table->enum('status', ['active', 'suspended', 'terminated'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dependants');
    }
};
