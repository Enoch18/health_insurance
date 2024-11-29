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
        $premium_payments = PremiumPayment::with(['policyHolder'])->paginate(50);
        return Inertia::render('Financials/PremiumPayments', [
            'premium_payments' => $premium_payments
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'amount_paid' => 'required|numeric'
        ]);
        $payment = PremiumPayment::find($id);
        $payment->amount_paid = $request->amount_paid;
        $payment->amount_due = 0;
        $payment->payment_status = 'paid';
        $payment->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
