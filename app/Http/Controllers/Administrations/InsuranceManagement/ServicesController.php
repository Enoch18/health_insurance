<?php

namespace App\Http\Controllers\Administrations\InsuranceManagement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Administrations\Service;
use App\Models\Administrations\BenefitPackage;
use App\Http\Resources\Administrations\ServicesResource;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($insurance_type_id)
    {
        $services = Service::where('insurance_type_id', '=', $insurance_type_id)->paginate(10);
        $benefit_packages = BenefitPackage::where('insurance_type_id', '=', $insurance_type_id)->get();
        return Inertia::render('Administrations/InsuranceManagement/Services', [
            'insurance_type_id' => $insurance_type_id,
            'services' => ServicesResource::collection($services),
            'benefit_packages' => $benefit_packages
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $insurance_type_id)
    {
        $request->validate([
            'name' => 'required|string',
            'benefit_package_id' => 'required|integer'
        ]);

        try{
            $attributes = [
                'name' => $request->name,
                'benefit_package_id' => $request->benefit_package_id,
                'insurance_type_id' => $insurance_type_id
            ];
            Service::create($attributes);
        }catch(\Exception $e){
            return response()->json(['error' => 'An error has occurred! ' . $e->getMessage()], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $insurance_type_id, string $id)
    {
        $request->validate([
            'name' => 'required|string',
            'benefit_package_id' => 'required|integer'
        ]);

        try{
            $attributes = [
                'name' => $request->name,
                'benefit_package_id' => $request->benefit_package_id,
                'insurance_type_id' => $insurance_type_id
            ];
            Service::find($id)->update($attributes);
        }catch(\Exception $e){
            return response()->json(['error' => 'An error has occurred! ' . $e->getMessage()], 500);
        }
    }
}
