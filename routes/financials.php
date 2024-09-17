<?php
namespace App\Http\Controllers\Financials;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('/financials')->middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function(){
    Route::resource('/premium-payments', PremiumPaymentsController::class)->names([
        'index' => 'premiums.index'
    ]);;
});
