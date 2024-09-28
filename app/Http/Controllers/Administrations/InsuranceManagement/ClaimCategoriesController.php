<?php

namespace App\Http\Controllers\Administrations\InsuranceManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Administrations\ClaimCategory;
use App\Models\Administrations\BenefitPackage;

class ClaimCategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($insurance_type_id)
    {
        $claim_categories = ClaimCategory::with('benefitPackage')->where('insurance_type_id', '=', $insurance_type_id)->paginate(10);
        $benefit_packages = BenefitPackage::where('insurance_type_id', '=', $insurance_type_id)->get();
        return Inertia::render('Administrations/InsuranceManagement/ClaimCategories', [
            'insurance_type_id' => $insurance_type_id,
            'claim_categories' => $claim_categories,
            'benefit_packages' => $benefit_packages
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $insurance_type_id)
    {
        $request->validate([
            'insurance_type_id' => 'required|integer',
            'benefit_package_id' => 'required|integer',
            'description' => 'required|string',
            'status' => 'required|string|in:active,inactive'
        ]);

        $claimCategory = new ClaimCategory;
        $claimCategory->insurance_type_id = $request->insurance_type_id;
        $claimCategory->benefit_package_id = $request->benefit_package_id;
        $claimCategory->code = $this->claimCategoriesCode();
        $claimCategory->description = $request->description;
        $claimCategory->status = $request->status;
        $claimCategory->save();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $insurance_type_id, string $id)
    {
        $request->validate([
            'insurance_type_id' => 'required|integer',
            'benefit_package_id' => 'required|integer',
            'description' => 'required|string',
            'status' => 'required|string|in:active,inactive'
        ]);

        $claimCategory = ClaimCategory::find($id);
        $claimCategory->insurance_type_id = $request->insurance_type_id;
        $claimCategory->benefit_package_id = $request->benefit_package_id;
        $claimCategory->code = $this->claimCategoriesCode();
        $claimCategory->description = $request->description;
        $claimCategory->status = $request->status;
        $claimCategory->save();
    }

    private function claimCategoriesCode()
    {
        // Generating the member number
        $claim_categories_code = ClaimCategory::all()->last();
        $nextId = ($claim_categories_code === null ? 0 : $claim_categories_code->id) + 1;
    
        $suffix = str_pad($nextId, 3, '0', STR_PAD_LEFT);
    
        $claim_categories_code_id = $suffix;
    
        return $claim_categories_code_id;
    }
}
