<?php

namespace App\Http\Controllers\Administrations\InsuranceManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Administrations\CoveragePeriod;

class CoveragePeriodsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($insurance_type_id)
    {
        $coverage_periods = CoveragePeriod::where('insurance_type_id', '=', $insurance_type_id)->orderBy('number_of_months', 'DESC')->paginate(10);
        return Inertia::render('Administrations/InsuranceManagement/CoveragePeriods', [
            'insurance_type_id' => $insurance_type_id,
            'coverage_levels' => $coverage_periods
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $insurance_type_id)
    {
        $request->validate([
            'insurance_type_id' => 'required|integer',
            'name' => 'required|string',
            'number_of_months' => 'required|integer',
            'status' => 'required|string|in:active,inactive'
        ]);

        $coveragePeriod = new CoveragePeriod;
        $coveragePeriod->insurance_type_id = $request->insurance_type_id;
        $coveragePeriod->name = $request->name;
        $coveragePeriod->number_of_months = $request->number_of_months;
        $coveragePeriod->status = $request->status;
        $coveragePeriod->save();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $insurance_type_id, string $id)
    {
        $request->validate([
            'insurance_type_id' => 'required|integer',
            'name' => 'required|string',
            'number_of_months' => 'required|integer',
            'status' => 'required|string|in:active,inactive'
        ]);

        $coveragePeriod = CoveragePeriod::find($id);
        $coveragePeriod->insurance_type_id = $request->insurance_type_id;
        $coveragePeriod->name = $request->name;
        $coveragePeriod->number_of_months = $request->number_of_months;
        $coveragePeriod->status = $request->status;
        $coveragePeriod->save();
    }
}
