<?php

namespace App\Http\Controllers\PolicyHolders;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PolicyHolders\PolicyHolder;
use App\Models\PolicyHolders\Dependant;
use App\Http\Resources\PolicyHolders\PolicyHoldersResource;
use Inertia\Inertia;
use Illuminate\Support\Arr;

class DependantsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $policy_holder_id)
    {
        $policy_holder = PolicyHolder::find($policy_holder_id);
        return Inertia::render('PolicyHolders/Dependants', [
            'policy_holder' => new PolicyHoldersResource($policy_holder)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(string $policy_holder_id)
    {
        $policy_holder = PolicyHolder::with(['dependants'])->find($policy_holder_id);
        return Inertia::render('PolicyHolders/CreateDependants', [
            'policy_holder' => new PolicyHoldersResource($policy_holder)
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $policy_holder_id)
    {
        $request->validate([
            'dependants' => 'required|array',
            'dependants.*.first_name' => 'required|string',
            'dependants.*.last_name' => 'required|string',
            'dependants.*.gender' => 'required|string',
            'dependants.*.relationship_to_policy_holder' => 'required|string',
            'dependants.*.contact_number' => 'nullable|sometimes|string',
            'dependants.*.email' => 'nullable|sometimes|email',
            'dependants.*.address' => 'nullable|sometimes|string',
        ]);

        $dependant_ids = Arr::pluck($request->dependants, 'dependant_id');
        Dependant::whereNotIn('id', $dependant_ids)->delete();


        foreach($request->dependants as $item){
            $dependant = new Dependant;
            if(isset($item['dependant_id'])){
                $dependant = Dependant::find($item['dependant_id']);
            }
            $dependant->policy_holder_id = $policy_holder_id;
            $dependant->first_name = $item['first_name'];
            $dependant->last_name = $item['last_name'];
            $dependant->gender = $item['gender'];
            $dependant->date_of_birth = $item['date_of_birth'];
            $dependant->relationship_to_policy_holder = $item['relationship_to_policy_holder'];
            $dependant->contact_number =  isset($item['contact_number']) ? $item['contact_number'] : null;
            $dependant->email = isset($item['email']) ? $item['email'] : null;
            $dependant->address = isset($item['address']) ? $item['address'] : null;
            $dependant->save();
        }

        return redirect("/policy-holders/$policy_holder_id/medical-information/create");
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
}
