<?php

namespace App\Http\Controllers\PolicyHolders;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PolicyHolders\PolicyHolder;
use App\Models\PolicyHolders\Dependant;
use App\Models\PolicyHolders\MedicalInformation;
use App\Http\Resources\PolicyHolders\PolicyHoldersResource;
use App\Http\Resources\PolicyHolders\MedicalInformationsResource;
use Inertia\Inertia;

class MedicalInformationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $policy_holder_id)
    {
        $policy_holder = PolicyHolder::find($policy_holder_id);
        $dependants = Dependant::where('policy_holder_id', '=', $policy_holder_id)->get();
        $policy_holder = PolicyHolder::find($policy_holder_id);

        return Inertia::render('PolicyHolders/MedicalInformation', [
            'policy_holder' => new PolicyHoldersResource($policy_holder),
            'policy_holder_medicals' => $this->policyHolderMedicals($policy_holder),
            'dependant_medicals' => $this->dependantMedicals($dependants)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(string $policy_holder_id)
    {
        $policy_holder = PolicyHolder::with('dependants')->find($policy_holder_id);
        return Inertia::render('PolicyHolders/CreateMedicalInformation', [
            'policy_holder' => new PolicyHoldersResource($policy_holder)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $policy_holder_id)
    {
        $request->validate([
            'medicals' => 'required|array',
            'medicals.*.dependant_id' => 'nullable|sometimes|integer',
            'medicals.*.policy_holder_id' => 'nullable|sometimes|integer',
            'medicals.*.medical_history_notes' => 'nullable|sometimes|string',
            'medicals.*.primary_physician' => 'nullable|sometimes|string',
            'medicals.*.physician_phone' => 'nullable|sometimes|string',
            'medicals.*.physician_email' => 'nullable|sometimes|string',
            'medicals.*.last_checkup_date' => 'nullable|sometimes|string',
            'medicals.*.status' => 'nullable|sometimes|string',
        ]);

        try{
            // \DB::beginTransaction();
            foreach($request->medicals as $medical){
                $dependant_id = isset($medical['dependant_id']) && $medical['dependant_id'] != '' ? $medical['dependant_id'] : null;
                $policy_holder_id = isset($medical['policy_holder_id']) && $medical['policy_holder_id'] != '' ? $medical['policy_holder_id'] : null;

                $individual = null;
                if($dependant_id){
                    $individual = Dependant::find($dependant_id);
                }

                if($policy_holder_id){
                    $individual = PolicyHolder::find($policy_holder_id);
                }

                $no_medical_condition = isset($medical['no_medical_condition']) ? 'No medical condition' : null;

                $individual->medicals()->create([
                    'medical_history_notes' => isset($medical['medical_history_notes']) && $medical['medical_history_notes'] != null ? $medical['medical_history_notes'] : $no_medical_condition,
                    'primary_physician' => isset($medical['primary_physician']) && $medical['primary_physician'] != null ? $medical['primary_physician'] : null,
                    'physician_phone' => isset($medical['physician_phone']) && $medical['physician_phone'] != null ? $medical['physician_phone'] : null,
                    'physician_email' => isset($medical['physician_email']) && $medical['physician_email'] != null ? $medical['physician_email'] : null,
                    'last_checkup_date' => isset($medical['last_checkup_date']) && $medical['last_checkup_date'] != null ? $medical['last_checkup_date'] : null,
                    'status' => isset($medical['status']) && $medical['status'] != null ? $medical['status'] : 'ongoing'
                ]);
            }
            // \DB::commit();
        }catch(\Exception $e){
            \DB::rollBack();
            $policy_holder = PolicyHolder::with('dependants')->find($policy_holder_id);

            return Inertia::render('PolicyHolders/CreateMedicalInformation', [
                'policy_holder' => $policy_holder,
                'errors' => [
                    'detailed_error' => $e->getMessage(),
                    'error' => 'An error occurred while trying to save claim. Please try again later.',
                ],
            ])->with('error', 'An error occurred ' . $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $policy_holder_id, string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $policy_holder_id, string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $policy_holder_id, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $policy_holder_id, string $id)
    {
        //
    }

    private function dependantMedicals($dependants){
        return $dependants->map(function($item){
            $medical_informations = MedicalInformation::where('medicable_id', '=', $item->id)->where('medicable_type', '=', Dependant::class)->get();
            return collect([
                'dependant_id' => $item->id, 
                'dependant' => $item->first_name . ' ' . $item->last_name,
                'medicals' => $medical_informations->map(function($medical){
                    return collect([
                        'id' => $medical->id,
                        'condition' => $medical->condition,
                        'allergies' => $medical->allergies,
                        'medical_history_notes' => $medical->medical_history_notes,
                        'medications' => $medical->medications,
                        'primary_physician' => $medical->primary_physician,
                        'physician_email' => $medical->physician_email,
                        'status' => $medical->status,
                        'last_checkup_date' => $medical->last_checkup_date,
                    ]);
                })
            ]);
        });
    }

    private function policyHolderMedicals($policy_holder){
        $medical_informations = MedicalInformation::where('medicable_id', '=', $policy_holder->id)->where('medicable_type', '=', PolicyHolder::class)->get();

        return collect([
            'policy_holder_id' => $policy_holder->id, 
            'policy_holder' => $policy_holder->first_name . ' ' . $policy_holder->last_name,
            'medicals' => $medical_informations->map(function($medical){
                return collect([
                    'id' => $medical->id,
                    'condition' => $medical->condition,
                    'allergies' => $medical->allergies,
                    'medical_history_notes' => $medical->medical_history_notes,
                    'medications' => $medical->medications,
                    'primary_physician' => $medical->primary_physician,
                    'physician_email' => $medical->physician_email,
                    'status' => $medical->status,
                    'last_checkup_date' => $medical->last_checkup_date,
                ]);
            })
        ]);
    }
}
