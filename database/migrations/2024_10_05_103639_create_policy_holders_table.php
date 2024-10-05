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
        Schema::create('policy_holders', function (Blueprint $table) {
            $table->id(); // Primary Key
            $table->foreignId('insurance_type_id')->constrained('insurance_types')->references('id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignId('coverage_period_id')->constrained('coverage_periods')->references('id')->cascadeOnDelete()->cascadeOnUpdate();
            
            $table->string('policy_number')->unique();

            $table->string('first_name');
            $table->string('last_name');
            $table->date('date_of_birth');
            $table->enum('gender', ['male', 'female', 'other']);
            $table->enum('marital_status', ['single', 'married', 'divorced', 'widowed', 'separated']);
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->text('address')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();

            $table->date('policy_start_date')->nullable();
            $table->date('policy_end_date')->nullable();
            $table->decimal('premium_amount', 10, 2)->nullable();

            $table->string('employer_name')->nullable();
            $table->integer('family_size')->default(0);

            $table->date('last_payment_date')->nullable();
            $table->date('next_payment_due')->nullable();
            $table->decimal('outstanding_balance', 10, 2)->nullable();

            $table->enum('policy_status', ['active', 'inactive', 'pending', 'suspended', 'terminated'])->default('pending');

            $table->timestamps(); // Created at and updated at
            $table->softDeletes(); // Soft deletes column (if using soft deletes)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('policy_holders');
    }
};
