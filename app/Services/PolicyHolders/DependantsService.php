<?php
namespace App\Services\PolicyHolders;
use App\Models\PolicyHolders\Dependant;
use Exception;

class DependantsService{
    public function createDependant($request, $dependant_id, $policy_holder_id){
        try{
            $dependant = new Dependant;

            if($dependant_id){
                $dependant = Dependant::find($dependant_id);
            }

            $dependant->policy_holder_id = $policy_holder_id;
            $dependant->first_name = $request->first_name;
            $dependant->last_name = $request->last_name;
            $dependant->date_of_birth = $request->date_of_birth;
            $dependant->relationship_to_policy_holder = $request->relationship_to_policy_holder;
            $dependant->gender = $request->gender;
            $dependant->contact_number = $request->contact_number;
            $dependant->email = $request->email;
            $dependant->address = $request->address;
            $dependant->status = $request->status;
            $dependant->save();
        }catch(Exception $e){
            \Log::error('An error occurred: ' . $e->getMessage());
            throw new Exception('An error occurred while trying to save dependant ' . $e->getMessage());
        }
    }
}