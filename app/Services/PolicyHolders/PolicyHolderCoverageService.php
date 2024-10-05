<?php
namespace App\Services\PolicyHolders;
use App\Models\PolicyHolders\PolicyHolderCoverage;
use App\Models\PolicyHolders\PolicyHolder;
use Exception;

class PolicyHolderCoverageService{
    public function createPolicyLevelCoverage($parentData, $request){
        try{
            $policyHolderCoverage = new PolicyHolderCoverage([
                'coverage_level_id' => $request->coverage_level_id,
                'status' => 'active'
            ]);

            $policyHolder = PolicyHolder::find($parentData->id);
            $policyHolder->coverages()->save($policyHolderCoverage);
        }catch(Exception $e){
            \Log::error('An error occurred: ' . $e->getMessage());
            throw new Exception('An error occurred while trying to save coverage level ' . $e->getMessage());
        }
        /*
        $table->morphs('coverable'); // with policy holder or dependant ids.
            $table->foreignId('coverage_level_id')->constrained('coverage_levels')->references('id')->cascadeOnDelete()->cascadeOnUpdate();
            $table->decimal('premium_amount', 10, 2)->nullable();
            $table->decimal('outstanding_balance', 10, 2)->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->enum('status', ['active', 'inactive']);
        */
    }
}