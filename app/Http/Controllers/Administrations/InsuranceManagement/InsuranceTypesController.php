<?php

namespace App\Http\Controllers\Administrations\InsuranceManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Administrations\InsuranceType;
use Inertia\Inertia;

class InsuranceTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $insurance_types = InsuranceType::paginate(10);

        return Inertia::render('Administrations/InsuranceManagement/InsuranceTypes', [
            'insurance_types' => $insurance_types
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:insurance_types',
            'description' => 'nullable|sometimes|string',
            'status' => 'required|string|in:active,inactive'
        ]);

        $insuranceType = new InsuranceType;
        $insuranceType->insurance_number = $this->insuranceNumber();
        $insuranceType->name = $request->name;
        $insuranceType->description = $request->description;
        $insuranceType->status = $request->status;
        $insuranceType->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //InsuranceSetups
        $insurance_type = InsuranceType::find($id);

        return Inertia::render('Administrations/InsuranceManagement/InsuranceSetups', [
            'insurance_type_id' => $id,
            'insurance_type' => $insurance_type
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|unique:insurance_types,name,' . $id,
            'description' => 'nullable|sometimes|string',
            'status' => 'required|string|in:active,inactive'
        ]);

        $insuranceType = InsuranceType::find($id);
        $insuranceType->name = $request->name;
        $insuranceType->description = $request->description;
        $insuranceType->status = $request->status;
        $insuranceType->save();
    }

    private function insuranceNumber()
    {
        // Generating the member number
        $insurance_number = InsuranceType::all()->last();
        $nextId = ($insurance_number === null ? 0 : $insurance_number->id) + 1;
    
        $suffix = str_pad($nextId, 4, '0', STR_PAD_LEFT);
    
        $insurance_number_id = 'IN'.$suffix;
    
        return $insurance_number_id;
    }
}
