<?php

namespace App\Http\Requests\PolicyHolder;

use Illuminate\Foundation\Http\FormRequest;

class PolicyHoldersRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $policy_holder_id = $this->route('policy_holder') ? $this->route('policy_holder')->id : null;

        return [
            'insurance_type_id' => 'required|integer',
            'coverage_period_id' => 'required|integer',
            'coverage_level_id' => 'required|integer',

            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'date_of_birth' => 'required|date',
            'gender' => 'required|string',
            'marital_status' => 'required|string',
            'email' => 'required|email|unique:policy_holders,email' . ($policy_holder_id ? ",$policy_holder_id" : ''),
            'phone' => 'required|string',
            'address' => 'required|string',
            'city' => 'nullable|sometimes|string',
            'state' => 'nullable|sometimes|string',
            'country' => 'required|string',

            'policy_start_date' => 'nullable|sometimes|string',
            'policy_end_date' => 'nullable|sometimes|string',
            'premium_amount' => 'nullable|sometimes|string',

            'employer_name' => 'nullable|sometimes|string',
            'family_size' => 'nullable|sometimes|string',

            'last_payment_date' => 'nullable|sometimes|string',
            'next_payment_due' => 'nullable|sometimes|string',
            'outstanding_balance' => 'nullable|sometimes|string',
            'policy_status' => 'required|string|in:active,inactive,pending,suspended,terminated',

            'dependants' => 'nullable|sometimes|array',
            'dependants.*.first_name' => 'nullable|sometimes|string',
            'dependants.*.last_name' => 'nullable|sometimes|string',
            'dependants.*.date_of_birth' => 'nullable|sometimes|date',
            'dependants.*.relationship_to_policy_holder' => 'nullable|sometimes|string|in:spouse,child,parent,sibling,other',
            'dependants.*.gender' => 'nullable|sometimes|string|in:male,female,other',
            'dependants.*.contact_number' => 'nullable|sometimes|string|in:male,female,other',
            'dependants.*.email' => 'nullable|sometimes|string|in:male,female,other',
            'dependants.*.address' => 'nullable|sometimes|string|in:male,female,other',
            'dependants.*.status' => 'nullable|sometimes|string|in:male,female,other'
        ];
    }
}
