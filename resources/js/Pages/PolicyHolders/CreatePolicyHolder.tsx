import React, { useState } from "react";
import TopHeaderSection from "@/Components/Common/TopHeaderSection"
import MainLayout from "@/Layouts/MainLayout"
import Paper from "@/Components/Paper";
import { usePage } from "@inertiajs/react";
import CustomTextInput from "@/Components/Common/CustomTextInput";
import { router } from "@inertiajs/core";
import CustomSelectBox from "@/Components/Common/CustomSelectbox";
import { Alert } from "@mui/material";

const CreatePolicyHolder = ({coverage_periods, insurance_types, coverage_levels}: any) => {
    const { errors } = usePage().props;

    const [values, setValues] = useState<any>({insurance_type_id: 1});
    

    function handleChange(e:any) {
        const key = e.target.id;
        const value = e.target.value
        setValues((values:any) => ({
            ...values,
            [key]: value,
        }))
    }

    const onSubmit = (e:any) => {
        e.preventDefault();

        router.post(`/policy-holders`, values, {
            onSuccess: () => {
                router.visit('/policy-holders');
            }
        });
    }

    return (
        <MainLayout title="Create Policy Holder">
            <TopHeaderSection title='Create Policy Holders' hideAddBtn={true} />

            <Paper>
                <h4 className="text-lg font-semibold">Personal Information</h4><hr className="border-gray-500" />
                
                <form onSubmit={onSubmit} className="mt-2">
                    {errors?.error && (
                        <Alert variant="filled" severity="error">
                            {errors?.error}
                        </Alert>
                    )}
                    {/* <Alert variant="filled" severity="error">
                        This is a filled error Alert.
                    </Alert> */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <CustomTextInput 
                            id={'first_name'} 
                            type="text"
                            name="first_name" 
                            label='First Name *' 
                            setValue={handleChange} 
                            value={values?.first_name} 
                            error={errors?.first_name}
                        />

                        <CustomTextInput 
                            id={'last_name'} 
                            type="text"
                            name="last_name" 
                            label='Last Name *' 
                            setValue={handleChange} 
                            value={values?.last_name} 
                            error={errors?.last_name}
                        />

                        <CustomTextInput 
                            id={'date_of_birth'} 
                            type="date"
                            name="date_of_birth" 
                            label='Date of birth *' 
                            setValue={handleChange} 
                            value={values?.date_of_birth} 
                            error={errors?.date_of_birth}
                        />

                        <CustomSelectBox 
                            id={'gender'} 
                            name="gender" 
                            label='Gender *' 
                            data={[
                                {label: 'Male', value: 'male'},
                                {label: 'Female', value: 'female'},
                                {label: 'Other', value: 'other'}
                            ]}
                            setValue={handleChange} 
                            value={values?.gender} 
                            error={errors?.gender}
                        />

                        <CustomSelectBox 
                            id={'marital_status'} 
                            name="marital_status" 
                            label='Marital Status *' 
                            data={[
                                {label: 'Single', value: 'single'},
                                {label: 'Married', value: 'married'},
                                {label: 'Divorced', value: 'divorced'},
                                {label: 'Widowed', value: 'widowed'},
                                {label: 'Separated', value: 'separated'},
                            ]}
                            setValue={handleChange} 
                            value={values?.marital_status} 
                            error={errors?.marital_status}
                        />

                        <CustomTextInput 
                            id={'email'} 
                            type="email"
                            name="email" 
                            label='Email *' 
                            setValue={handleChange} 
                            value={values?.email} 
                            error={errors?.email}
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2">
                        <CustomTextInput 
                            id={'phone'} 
                            type="text"
                            name="phone" 
                            label='Phone Number *' 
                            setValue={handleChange} 
                            value={values?.phone} 
                            error={errors?.phone}
                        />
                    </div>

                    <h4 className="text-lg font-semibold mt-5">Residential Information</h4><hr className="border-gray-500" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <CustomTextInput 
                            id={'address'} 
                            type="text"
                            name="address" 
                            label='Address *' 
                            setValue={handleChange} 
                            value={values?.address} 
                            error={errors?.address}
                        />

                        <CustomTextInput 
                            id={'city'} 
                            type="text"
                            name="city" 
                            label='City' 
                            setValue={handleChange} 
                            value={values?.city} 
                            error={errors?.city}
                        />

                        <CustomTextInput 
                            id={'state'} 
                            type="text"
                            name="state" 
                            label='State' 
                            setValue={handleChange} 
                            value={values?.state} 
                            error={errors?.state}
                        />

                        <CustomTextInput 
                            id={'country'} 
                            type="text"
                            name="country" 
                            label='Country *' 
                            setValue={handleChange} 
                            value={values?.country} 
                            error={errors?.country}
                        />
                    </div>

                    <h4 className="text-lg font-semibold mt-5">Policy Information</h4><hr className="border-gray-500" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <CustomSelectBox 
                            id={'insurance_type_id'} 
                            name="insurance_type_id" 
                            label='Insurance Type *' 
                            data={insurance_types.map((item:any) => (
                                {label: item.name, value: item.id}
                            ))}
                            setValue={handleChange} 
                            value={values?.insurance_type_id} 
                            error={errors?.insurance_type_id}
                        />

                        <CustomSelectBox 
                            id={'coverage_period_id'} 
                            name="coverage_period_id" 
                            label='Coverage Period *' 
                            data={coverage_periods.map((item:any) => (
                                {label: item.name, value: item.id}
                            ))}
                            setValue={handleChange} 
                            value={values?.coverage_period_id} 
                            error={errors?.coverage_period_id}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                        <CustomSelectBox 
                            id={'coverage_level_id'} 
                            name="coverage_level_id" 
                            label='Coverage Level *'
                            data={coverage_levels.map((item:any) => (
                                {label: item.name, value: item.id}
                            ))}
                            setValue={handleChange} 
                            value={values?.coverage_level_id} 
                            error={errors?.coverage_level_id}
                        />
                    </div>

                    <h4 className="text-lg font-semibold mt-5">Other Information</h4><hr className="border-gray-500" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <CustomTextInput 
                            id={'employer_name'} 
                            type="text"
                            name="employer_name" 
                            label='Employer Name' 
                            setValue={handleChange} 
                            value={values?.employer_name} 
                            error={errors?.employer_name}
                        />

                        <CustomTextInput 
                            id={'family_size'} 
                            type="number"
                            name="family_size" 
                            label='Family Size' 
                            setValue={handleChange} 
                            value={values?.family_size} 
                            error={errors?.family_size}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                        <CustomSelectBox 
                            id={'policy_status'} 
                            name="policy_status" 
                            label='Policy Status *' 
                            data={[
                                {label: 'Active', value: 'active'},
                                {label: 'Inactive', value: 'inactive'},
                                {label: 'Pending', value: 'pending'},
                                {label: 'Suspended', value: 'suspended'},
                                {label: 'Terminated', value: 'terminated'},
                            ]}
                            setValue={handleChange} 
                            value={values?.policy_status} 
                            error={errors?.policy_status}
                        />
                    </div>

                    <button className="mt-5 bg-blue-500 px-20 py-2 rounded">
                        Next
                    </button>
                </form>
            </Paper>
        </MainLayout>
    )
}

export default CreatePolicyHolder;