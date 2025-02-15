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
    Route::resource('/roles', SystemUserRolesController::class)->names([
        'index' => 'roles.index'
    ]);

    Route::get('/role-permissions/{role_id}', [SystemRolePermissions::class, 'index'])->name('permissions.index');
    Route::post('/role-permissions', [SystemRolePermissions::class, 'store']);
    Route::get('/role-permission-roles', [SystemRolePermissions::class, 'permissionRoles'])->name('permission.roles');
    
    Route::resource('/audit-logs', AuditLogsController::class)->names([
        'index' => 'audit-logs.index'
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

    Route::prefix('/insurance-types/{insurance_type_id}')->group(function(){
        Route::resource('/benefit-limits', \App\Http\Controllers\Administrations\InsuranceManagement\BenefitLimitsController::class)->names([
            'index' => 'benefit-limits.index'
        ]);
        Route::post('/add-coverage-level-benefit-limit', [\App\Http\Controllers\Administrations\InsuranceManagement\BenefitLimitsController::class, 'addCoverageLevelBenefitLimit']);

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

        Route::resource('/coverage-periods', \App\Http\Controllers\Administrations\InsuranceManagement\CoveragePeriodsController::class)->names([
            'index' => 'coverage-periods.index'
        ]);

        Route::resource('/policy-years', \App\Http\Controllers\Administrations\InsuranceManagement\PolicyYearsController::class)->names([
            'index' => 'policy-years.index'
        ]);

        Route::resource('/services', \App\Http\Controllers\Administrations\InsuranceManagement\ServicesController::class);


        Route::get('/years', [\App\Http\Controllers\Administrations\InsuranceManagement\PremiumRatesController::class, 'premiumYearsOptions']);
        Route::get('/years/{year_id}/premium-coverage-levels', [\App\Http\Controllers\Administrations\InsuranceManagement\PremiumRatesController::class, 'premiumCoverageLevels']);
        Route::get('/years/{year_id}/premium-coverage-levels/{coverage_level_id}', [\App\Http\Controllers\Administrations\InsuranceManagement\PremiumRatesController::class, 'index']);
        Route::post('/premium-rates', [\App\Http\Controllers\Administrations\InsuranceManagement\PremiumRatesController::class, 'store']);
        // Route::resource('/years/{year_id}/premium-coverage-levels/{coverage_level_id}', \App\Http\Controllers\Administrations\InsuranceManagement\PremiumRatesController::class)->names([
        //     'index' => 'premium-rates.index'
        // ]);
    });
});