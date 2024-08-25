<?php
namespace App\Http\Controllers\Financials;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('/policy-holders')->middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function(){
    
});
