<?php
namespace App\Http\Controllers\Claims;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('/claims-management')->middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function(){
    Route::resource('/claims', ClaimsController::class)->names([
        'index' => 'claims.index'
    ]);
});
