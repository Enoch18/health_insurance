<?php
namespace App\Http\Controllers\PolicyHolders;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('/policy-holders')->middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function(){
    Route::resource('/', PolicyHoldersController::class)->names([
        'index' => 'policy-holders.index'
    ]);
});
