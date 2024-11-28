<?php

namespace App\Http\Controllers\PolicyHolders;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PolicyHolders\PolicyHolder;
use App\Models\PolicyHolders\Dependant;
use Inertia\Inertia;

class ExclusionsController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $policy_holder_id)
    {
        $request->validate([
            'policy_holder_id' => 'nullable|sometimes|integer',
            'dependant_id' => 'nullable|sometimes|integer',
            'exclusion_name' => 'required|string',
            'exclusion_details' => 'required|string'
        ]);

        try{
            \DB::beginTransaction();
            if($request->dependant_id && $request->dependant_id != 'undefined'){
                Dependant::find($request->dependant_id)->exclusions()->create($request->all());
            }

            if($request->policy_holder_id && $request->policy_holder_id != 'undefined'){
                PolicyHolder::find($request->policy_holder_id)->exclusions()->create($request->all());
            }

            \DB::commit();
        }catch(\Exception $e){
            \DB::rollBack();
            $policy_holder = PolicyHolder::with('dependants')->find($policy_holder_id);

            return redirect()->back()->withErrors([
                'detailed_error' => $e->getMessage(),
                'error' => 'An error occurred while trying to save. Please try again later.',
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $policy_holder_id, string $id)
    {
        $request->validate([
            'policy_holder_id' => 'nullable|sometimes|integer',
            'dependant_id' => 'nullable|sometimes|integer',
            'exclusion_name' => 'required|string',
            'exclusion_details' => 'required|string'
        ]);

        try{
            \DB::beginTransaction();
            if($request->dependant_id && $request->dependant_id != 'undefined'){
                Dependant::find($request->dependant_id)->exclusions()->where('id', '=', $id)->update($request->all());
            }

            if($request->policy_holder_id && $request->policy_holder_id != 'undefined'){
                PolicyHolder::find($request->policy_holder_id)->exclusions()->where('id', '=', $id)->update($request->all());
            }

            \DB::commit();
        }catch(\Exception $e){
            \DB::rollBack();
            $policy_holder = PolicyHolder::with('dependants')->find($policy_holder_id);

            return redirect()->back()->withErrors([
                'detailed_error' => $e->getMessage(),
                'error' => 'An error occurred while trying to save. Please try again later.',
            ]);
        }
    }
}
