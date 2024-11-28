<?php
namespace App\Http\Controllers\PolicyHolders;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function(){
    Route::resource('/policy-holders', PolicyHoldersController::class)->names([
        'index' => 'policy-holders.index',
        'create' => 'policy-holders.create',
        'show' => 'policy-holders.show'
    ]);

    Route::prefix('/policy-holders/{policy_holder_id}')->group(function(){
        Route::resource('/dependants', DependantsController::class);
        Route::resource('/medical-information', MedicalInformationsController::class);
        Route::resource('/financials', FinancialsController::class);
        Route::resource('/policy-holder-benefits', PolicyHolderBenefitsController::class);
        Route::resource('/underwriting', UnderwritingsController::class);
        Route::resource('/exclusions', ExclusionsController::class);
    });
});
