<?php

namespace App\Http\Controllers\Administrations\InsuranceManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Administrations\CoverageLevel;

class CoverageLevelsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($insurance_type_id)
    {
        $coverage_levels = CoverageLevel::paginate(10);
        return Inertia::render('Administrations/InsuranceManagement/CoverageLevels', [
            'insurance_type_id' => $insurance_type_id,
            'coverage_levels' => $coverage_levels
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'insurance_type_id' => 'required|integer',
            'name' => 'required|string',
            'description' => 'nullable|sometimes|string',
            'tier_level' => 'required|string|in:1,2',
            'policy_type' => 'required|string|in:individual,corporate,any',
            'status' => 'required|string|in:active,inactive'
        ]);

        $coverageLevel = new CoverageLevel;
        $coverageLevel->code = $this->coverageLevelCode();
        $coverageLevel->insurance_type_id = $request->insurance_type_id;
        $coverageLevel->name = $request->name;
        $coverageLevel->description = $request->description;
        $coverageLevel->tier_level = $request->tier_level;
        $coverageLevel->policy_type = $request->policy_type;
        $coverageLevel->status = $request->status;
        $coverageLevel->save();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'insurance_type_id' => 'required|integer',
            'name' => 'required|string',
            'description' => 'nullable|sometimes|string',
            'tier_level' => 'required|string|in:1,2',
            'policy_type' => 'required|string|in:individual,corporate,any',
            'status' => 'required|string|in:active,inactive'
        ]);

        $coverageLevel = CoverageLevel::find($id);
        $coverageLevel->insurance_type_id = $request->insurance_type_id;
        $coverageLevel->name = $request->name;
        $coverageLevel->description = $request->description;
        $coverageLevel->tier_level = $request->tier_level;
        $coverageLevel->policy_type = $request->policy_type;
        $coverageLevel->status = $request->status;
        $coverageLevel->save();
    }

    private function coverageLevelCode()
    {
        // Generating the member number
        $coverage_level = CoverageLevel::all()->last();
        $nextId = ($coverage_level === null ? 0 : $coverage_level->id) + 1;
    
        $suffix = str_pad($nextId, 3, '0', STR_PAD_LEFT);
    
        $coverage_level_id = $suffix;
    
        return $coverage_level_id;
    }
}
