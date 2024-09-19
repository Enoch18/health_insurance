<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use App\Models\Administrations\InsuranceType;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('insurance_types', function (Blueprint $table) {
            $table->id();
            $table->string('insurance_number')->unique();
            $table->string('name')->unique();
            $table->text('description')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
        });

        InsuranceType::insert([
            ['insurance_number' => 'IN0001', 'name' => 'Health Insurance', 'description' => 'This health insurance.', 'created_at' => now(), 'updated_at' => now()]
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('insurance_types');
    }
};
