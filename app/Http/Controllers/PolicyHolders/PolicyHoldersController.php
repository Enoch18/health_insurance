<?php

namespace App\Http\Controllers\PolicyHolders;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\PolicyHolder\PolicyHoldersRequest;
use App\Services\PolicyHolders\PolicyHolderService;
use App\Models\Administrations\InsuranceType;
use App\Models\Administrations\CoveragePeriod;
use App\Models\Administrations\CoverageLevel;
use App\Models\PolicyHolders\PolicyHolder;
use App\Http\Resources\PolicyHolders\PolicyHoldersResource;
use Exception;

class PolicyHoldersController extends Controller
{
    protected $policyHolderService;

    public function __construct(PolicyHolderService $policyHolderService){
        $this->policyHolderService = $policyHolderService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $policy_holders = PolicyHolder::orderBy('created_at', 'DESC')->paginate(10);
        return Inertia::render('PolicyHolders/PolicyHolders', [
            'policy_holders' => PolicyHoldersResource::collection($policy_holders)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $coverage_periods = CoveragePeriod::where('insurance_type_id', '=', 1)->get();
        $insurance_types = InsuranceType::get();
        $coverage_levels = CoverageLevel::where('insurance_type_id', '=', 1)->get();

        return Inertia::render('PolicyHolders/CreatePolicyHolder', [
            'coverage_periods' => $coverage_periods,
            'insurance_types' => $insurance_types,
            'coverage_levels' => $coverage_levels
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PolicyHoldersRequest $request)
    {
        try{
            $policyHolder = $this->policyHolderService->createPolicyHolder($request, null);
            return redirect("/policy-holders/$policyHolder->id/dependants/create");
        }catch(Exception $e){
            $coverage_periods = CoveragePeriod::where('insurance_type_id', '=', 1)->get();
            $insurance_types = InsuranceType::get();
            $coverage_levels = CoverageLevel::where('insurance_type_id', '=', 1)->get();

            return redirect()->back()->withErrors([
                'detailed_error' => $e->getMessage(),
                'error' => 'An error occurred while trying to save. Please try again later.',
            ]);
            return response()->json(['error' => 'An error occurred while trying to save policy holder!']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $policy_holder = PolicyHolder::find($id);
        return Inertia::render('PolicyHolders/ShowPolicyHolderInformation', [
            'policy_holder' => new PolicyHoldersResource($policy_holder)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PolicyHoldersRequest $request, string $id)
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
