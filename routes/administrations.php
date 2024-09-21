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
        'index' => 'users-management.index',
        'store' => 'users-management.store'
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

        Route::resource('/benefit-limits', \App\Http\Controllers\Administrations\InsuranceManagement\BenefitLimitsController::class)->names([
            'index' => 'benefit-limits.index'
        ]);

        Route::resource('/benefit-packages', \App\Http\Controllers\Administrations\InsuranceManagement\BenefitPackagesController::class)->names([
            'index' => 'benefit-packages.index'
        ]);

        Route::resource('/claim-categories', \App\Http\Controllers\Administrations\InsuranceManagement\ClaimCategoriesController::class)->names([
            'index' => 'claim-categories.index'
        ]);

        Route::resource('/coverage-age-ranges', \App\Http\Controllers\Administrations\InsuranceManagement\CoverageAgeRangesController::class)->names([
            'index' => 'coverage-age-ranges.index'
        ]);

        Route::resource('/coverage-levels', \App\Http\Controllers\Administrations\InsuranceManagement\CoverageLevelsController::class)->names([
            'index' => 'coverage-levels.index'
        ]);

        Route::resource('/policy-years', \App\Http\Controllers\Administrations\InsuranceManagement\PolicyYearsController::class)->names([
            'index' => 'policy-years.index'
        ]);

        Route::resource('/premium-rates', \App\Http\Controllers\Administrations\InsuranceManagement\PremiumRatesController::class)->names([
            'index' => 'premium-rates.index'
        ]);
    });
});