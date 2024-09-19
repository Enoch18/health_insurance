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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //InsuranceSetups
        $insurance_type = InsuranceType::find($id);

        return Inertia::render('Administrations/InsuranceManagement/InsuranceSetups', [
            'insurance_type' => $insurance_type
        ]);
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
