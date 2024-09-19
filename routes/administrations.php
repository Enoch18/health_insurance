<?php
namespace App\Http\Controllers\Administrations;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('/administrations')->middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function(){
    Route::resource('/main', AdministrationsController::class)->names([
        'index' => 'administrations.index'
    ]);
    Route::resource('/users-management', UserManagementsController::class)->names([
        'index' => 'users-management.index'
    ]);
    Route::resource('/roles-and-permissions', RolesAndPermissionsController::class)->names([
        'index' => 'roles-and-permissions.index'
    ]);

    // Insurance types group
    Route::prefix('/insurance-types')->group(function(){
        Route::resource('/home', \App\Http\Controllers\Administrations\InsuranceManagement\InsuranceTypesController::class)->names([
            'index' => 'insurance-types.index',
            'store' => 'insurance-types.store',
            'update' => 'insurance-types.update',
        ]);
        Route::resource('/setups', \App\Http\Controllers\Administrations\InsuranceManagement\InsuranceTypesController::class)->names([
            'index' => 'insurance-types.show'
        ]);
    });
});