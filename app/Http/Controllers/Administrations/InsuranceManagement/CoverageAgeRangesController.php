<?php

namespace App\Http\Controllers\Administrations\InsuranceManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Administrations\CoverageAgeRange;

class CoverageAgeRangesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($insurance_type_id)
    {
        $coverage_age_ranges = CoverageAgeRange::where('insurance_type_id', '=', $insurance_type_id)->paginate(10);
        return Inertia::render('Administrations/InsuranceManagement/CoverageAgeRanges', [
            'insurance_type_id' => $insurance_type_id,
            'coverage_age_ranges' => $coverage_age_ranges
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $insurance_type_id)
    {
        $request->validate([
            'insurance_type_id' => 'required|integer',
            'min_age' => 'required|integer',
            'max_age' => 'required|integer',
            'description' => 'required|string',
        ]);

        $coverageAgeRange = new CoverageAgeRange;
        $coverageAgeRange->insurance_type_id = $request->insurance_type_id;
        $coverageAgeRange->min_age = $request->min_age;
        $coverageAgeRange->max_age = $request->max_age;
        $coverageAgeRange->description = $request->description;
        $coverageAgeRange->save();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $insurance_type_id, string $id)
    {
        $request->validate([
            'insurance_type_id' => 'required|integer',
            'min_age' => 'required|integer',
            'max_age' => 'required|integer',
            'description' => 'required|string',
        ]);

        $coverageAgeRange = CoverageAgeRange::find($id);
        $coverageAgeRange->min_age = $request->min_age;
        $coverageAgeRange->max_age = $request->max_age;
        $coverageAgeRange->description = $request->description;
        $coverageAgeRange->save();
    }
}
