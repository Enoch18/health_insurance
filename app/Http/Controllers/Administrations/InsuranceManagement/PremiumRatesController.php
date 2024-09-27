<?php

namespace App\Http\Controllers\Administrations\InsuranceManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Administrations\CoverageLevel;
use App\Models\Administrations\PolicyYear;
use App\Models\Administrations\CoveragePeriod;
use App\Models\Administrations\CoverageAgeRange;
use App\Models\Administrations\PremiumRate;

class PremiumRatesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($insurance_type_id, $year_id, $coverage_level_id)
    {
        $year = PolicyYear::find($year_id)?->year;
        $coverage_periods = CoveragePeriod::where('insurance_type_id', '=', $insurance_type_id)->get();
        $age_ranges = CoverageAgeRange::where('insurance_type_id', '=', $insurance_type_id)->orderBy('min_age', 'ASC')->get();

        $coverage_level = CoverageLevel::find($coverage_level_id)?->name;

        // Getting the premium rates for each age group in a particular year
        $rates = $coverage_periods->map(function($item) use ($age_ranges, $coverage_level_id, $year_id){
            $coverage_period_id = $item->id;

            // Iterating over age ranges to get premium information for the age range
            $age_rates = $age_ranges->map(function($age_range) use($coverage_level_id, $year_id, $coverage_period_id){
                $premium_rate = PremiumRate::where('coverage_level_id', '=', $coverage_level_id)
                                            ->where('policy_year_id', $year_id)
                                            ->where('coverage_period_id', '=', $coverage_period_id)
                                            ->first();

                // Collecting premium information for an age group
                return collect([
                    'min_age' => $age_range->min_age,
                    'max_age' => $age_range->max_age,
                    'individual_price' => $premium_rate?->individual_price,
                    'corporate_price' => $premium_rate?->corporate_price,
                    'tax_percentage' => $premium_rate?->tax_percentage,
                    'tax_amount' => $premium_rate?->tax_amount
                ]);
            });


            // Getting the coverage period and rates
            return collect([
                'period' => $item->name,
                'rates' => $age_rates
            ]);
        });

        return Inertia::render('Administrations/InsuranceManagement/PremiumRates', [
            'insurance_type_id' => $insurance_type_id,
            'coverage_level_id' => $coverage_level_id,
            'year_id' => $year_id,
            'year' => $year,
            'rates' => $rates,
            'coverage_level' => $coverage_level
        ]);
    }

    public function premiumCoverageLevels($insurance_type_id, $year_id){
        $coverage_levels = CoverageLevel::all();

        $year = PolicyYear::find($year_id)?->year;

        return Inertia::render('Administrations/InsuranceManagement/PremiumCoverageLevels', [
            'insurance_type_id' => $insurance_type_id,
            'coverage_levels' => $coverage_levels,
            'year_id' => $year_id,
            'year' => $year
        ]);
    }

    public function premiumYearsOptions($insurance_type_id){
        $years = PolicyYear::where('insurance_type_id', '=', $insurance_type_id)->orderBy('year', 'DESC')->get();

        return Inertia::render('Administrations/InsuranceManagement/PremiumYearsOptions', [
            'insurance_type_id' => $insurance_type_id,
            'years' => $years
        ]);
    }
}
