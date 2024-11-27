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
        Schema::table('claim_services', function (Blueprint $table) {
            $table->decimal('approved_amount', 10, 2)->after('claim_amount')->default(0);
            $table->decimal('rejected_amount', 10, 2)->after('approved_amount')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('claim_services', function (Blueprint $table) {
            $table->dropColumn('approved_amount');
            $table->dropColumn('rejected_amount');
        });
    }
};
