<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Administrations\Role;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        Role::insert([
            ['name' => 'Super Admin', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Admin', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Underwriter', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Insurance Agent', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Claims Adjuster', 'created_at' => now(), 'updated_at' => now()]
        ]);

        /*
            Super Admin (highest privileges, including managing Admins)
            Admin
            Underwriter
            Insurance Agent
            Claims Adjuster
            Customer Service Representative
            Policyholder (customer, limited access)
            Read-Only Roles (e.g., Auditor, Compliance Officer)
        */
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('roles');
    }
};
