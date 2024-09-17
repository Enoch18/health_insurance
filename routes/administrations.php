<?php
namespace App\Http\Controllers\Administrations;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('/administrations')->middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function(){
    Route::resource('/main', AdministrationsController::class)->names([
        'index' => 'administrations.index'
    ]);;
});