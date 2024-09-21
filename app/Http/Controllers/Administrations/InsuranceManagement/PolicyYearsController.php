<?php

namespace App\Http\Controllers\Administrations\InsuranceManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Administrations\PolicyYear;

class PolicyYearsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $policy_years = PolicyYear::paginate(10);
        return Inertia::render('Administrations/InsuranceManagement/PolicyYears', [
            'policy_years' => $policy_years
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'insurance_type_id' => 'required|integer',
            'year' => 'required|integer',
        ]);

        $policyYear = new PolicyYear;
        $policyYear->insurance_type_id = $request->insurance_type_id;
        $policyYear->year = $request->year;
        $policyYear->save();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'insurance_type_id' => 'required|integer',
            'year' => 'required|integer',
        ]);

        $policyYear = PolicyYear::find($id);
        $policyYear->year = $request->year;
        $policyYear->save();
    }
}
