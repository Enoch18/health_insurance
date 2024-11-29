<?php

namespace App\Http\Controllers\Claims;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Claims\ClaimService;

class ClaimServicesController extends Controller
{

    /**
     * Update
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'approved_amount' => 'required|numeric',
            'rejected_amount' => 'required|numeric'
        ]);

        $claimService = ClaimService::find($id);
        $claimService->approved_amount = $request->approved_amount;
        $claimService->rejected_amount = $request->rejected_amount;
        $claimService->save();
    }
}
