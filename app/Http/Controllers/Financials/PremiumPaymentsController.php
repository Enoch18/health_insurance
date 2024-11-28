<?php

namespace App\Http\Controllers\Financials;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PolicyHolders\PremiumPayment;

use Inertia\Inertia;

class PremiumPaymentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $premium_payments = PremiumPayment::paginate(50);
        return Inertia::render('Financials/PremiumPayments', [
            'premium_payments' => $premium_payments
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
