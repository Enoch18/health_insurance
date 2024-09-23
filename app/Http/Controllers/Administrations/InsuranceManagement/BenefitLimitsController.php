<?php

namespace App\Http\Controllers\Administrations\InsuranceManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Administrations\CoverageLevel;
use App\Models\Administrations\BenefitPackage;
use App\Models\Administrations\BenefitLimit;

class BenefitLimitsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($insurance_type_id)
    {
        $coverage_levels = CoverageLevel::all();
        return Inertia::render('Administrations/InsuranceManagement/BenefitLimits', [
            'insurance_type_id' => $insurance_type_id,
            'coverage_levels' => $coverage_levels
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $insurance_type_id, string $coverage_level_id)
    {
        $coverage_level = CoverageLevel::find($coverage_level_id);

        $packages = BenefitPackage::where('insurance_type_id', '=', $insurance_type_id)->get();
        $benefitPackages = $packages->map(function($item) use($coverage_level_id){
            $limit = BenefitLimit::where('benefit_package_id', '=', $item->id)->where('coverage_level_id', '=', $coverage_level_id)->first();
            return collect([
                'id' => $item->id,
                'code' => $item->code,
                'description' => $item->description,
                'status' => $item->status,
                'limit_amount' => $limit?->limit_amount
            ]);
        });

        return Inertia::render('Administrations/InsuranceManagement/CoverageLevelBenefitLimits', [
            'benefit_packages' => $benefitPackages,
            'insurance_type_id' => $insurance_type_id,
            'coverage_level' => $coverage_level
        ]);
    }
}
