<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Administrations\Permission;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->timestamps();
        });

        Permission::insert([
            ['name' => 'can_add', 'description' => 'Can Add', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_edit', 'description' => 'Can Edit', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_delete', 'description' => 'Can Delete', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_view', 'description' => 'Can View', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_export', 'description' => 'Can Export', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_import', 'description' => 'Can Import', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_approve', 'description' => 'Can Approve', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_reject', 'description' => 'Can Reject', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_publish', 'description' => 'Can Publish', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_unpublish', 'description' => 'Can Unpublish', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_archive', 'description' => 'Can Archive', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_restore', 'description' => 'Can Restore', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_download', 'description' => 'Can Download', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_print', 'description' => 'Can Print', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_assign_roles', 'description' => 'Can Assign Roles', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_remove_roles', 'description' => 'Can Remove Roles', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_search', 'description' => 'Can Search', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_lock', 'description' => 'Can Lock', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_unlock', 'description' => 'Can Unlock', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_suspend', 'description' => 'Can Suspend', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_activate', 'description' => 'Can Activate', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_deactivate', 'description' => 'Can Deactivate', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_view_logs', 'description' => 'Can View Logs', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_manage_settings', 'description' => 'Can Manage Settings', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_reset_password', 'description' => 'Can Reset Password', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_view_reports', 'description' => 'Can View Reports', 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'can_manage_notifications', 'description' => 'Can Manage Notifications', 'created_at' => now(), 'updated_at' => now()],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permissions');
    }
};
