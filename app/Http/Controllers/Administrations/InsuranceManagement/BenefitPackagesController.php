<?php

namespace App\Http\Controllers\Administrations\InsuranceManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Administrations\BenefitPackage;

class BenefitPackagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($insurance_type_id)
    {
        $benefit_packages = BenefitPackage::where('insurance_type_id', '=', $insurance_type_id)->paginate(10);
        return Inertia::render('Administrations/InsuranceManagement/BenefitPackages', [
            'insurance_type_id' => $insurance_type_id,
            'benefit_packages' => $benefit_packages
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $insurance_type_id)
    {
        $request->validate([
            'insurance_type_id' => 'required|integer',
            'description' => 'required|string',
            'status' => 'required|string|in:active,inactive'
        ]);

        $benefitPackage = new BenefitPackage;
        $benefitPackage->insurance_type_id = $request->insurance_type_id;
        $benefitPackage->code = $this->benefitPackageCode();
        $benefitPackage->description = $request->description;
        $benefitPackage->status = $request->status;
        $benefitPackage->save();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $insurance_type_id, string $id)
    {
        $request->validate([
            'insurance_type_id' => 'required|integer',
            'description' => 'required|string',
            'status' => 'required|string|in:active,inactive'
        ]);

        $benefitPackage = BenefitPackage::find($id);
        $benefitPackage->description = $request->description;
        $benefitPackage->status = $request->status;
        $benefitPackage->save();
    }

    private function benefitPackageCode()
    {
        // Generating the member number
        $benefit_package_code = BenefitPackage::all()->last();
        $nextId = ($benefit_package_code === null ? 0 : $benefit_package_code->id) + 1;
    
        $suffix = str_pad($nextId, 3, '0', STR_PAD_LEFT);
    
        $benefit_package_code_id = $suffix;
    
        return $benefit_package_code_id;
    }
}
