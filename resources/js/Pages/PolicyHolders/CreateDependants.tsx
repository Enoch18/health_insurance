import CustomModal from "@/Components/Common/CustomModal";
import CustomSelectBox from "@/Components/Common/CustomSelectbox";
import CustomTextInput from "@/Components/Common/CustomTextInput";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import Paper from "@/Components/Paper";
import MainLayout from "@/Layouts/MainLayout";
import { router } from "@inertiajs/core";
import { usePage } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

interface Props{
    policy_holder: any;
}

const CreateDependants = ({policy_holder}: Props) => {
    policy_holder = policy_holder?.data;

    const [dependants, setDependants] = useState([]);
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState<any>({});
    const [values, setValues] = useState<any>({});
    const formRef = useRef<any>(null);
    

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
        let err:any = {};
        if(!values?.first_name){
            err.first_name = 'First name is required';
        }
        if(!values?.last_name){
            err.last_name = 'Last name is required';
        }
        if(!values?.date_of_birth){
            err.date_of_birth = 'Date of birth is required';
        }
        if(!values?.gender){
            err.gender = 'Gender is required';
        }
        if(!values?.relationship_to_policy_holder){
            err.relationship_to_policy_holder = 'Relationship to policy holder is required';
        }

        if(Object.keys(err).length > 0){
            setErrors(err);
            return;
        }

        setDependants((currentValues:any):any => {
            const index = currentValues.findIndex((obj:any) => obj.first_name === values.first_name && obj.last_name === values.last_name && obj.date_of_birth === values.date_of_birth)
            if(index === -1){
                return [...currentValues, values];
            }else{
                return currentValues;
            }
        });

        setOpen(true);
    }

    const submitDependants = () => {
        router.post(`/policy-holders/${policy_holder.id}/dependants`, {dependants: dependants});
    }

    useEffect(() => {
        if(policy_holder?.dependants && policy_holder.dependants.length > 0){
            const transformedDependants = policy_holder.dependants.map((item:any) => ({
                dependant_id: item.id,
                first_name: item.first_name,
                last_name: item.last_name,
                gender: item.gender,
                date_of_birth: item.date_of_birth,
                relationship_to_policy_holder: item.relationship_to_policy_holder,
                contact_number: item.contact_number,
                email: item.email,
                address: item.address
            }));

            setDependants(transformedDependants);
            setValues(transformedDependants[transformedDependants.length - 1]);
        }
    }, []);

    const removeDependant = (item:any) => {
        const filteredDependants = dependants.filter((obj:any) => obj.first_name !== item.first_name && obj.last_name !== item.last_name && obj.date_of_birth !== item.date_of_birth);
        setDependants(filteredDependants);
    }

    return (
        <MainLayout title="Create Dependants">
            <TopHeaderSection title='Add Dependants' hideAddBtn={true} />

            <Paper>
                <h4 className="text-lg font-semibold"><span className="text-orange-500">{policy_holder.attributes.first_name} {policy_holder.attributes.last_name}</span> {'>'} Dependants</h4><hr className="border-gray-500" />

                <form ref={formRef} onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                            id={'relationship_to_policy_holder'} 
                            name="relationship_to_policy_holder" 
                            label='Relationship to policy holder *' 
                            data={[
                                {label: 'Spouse', value: 'spouse'},
                                {label: 'Child', value: 'child'},
                                {label: 'Parent', value: 'parent'},
                                {label: 'Sibling', value: 'sibling'},
                                {label: 'Other', value: 'other'}
                            ]}
                            setValue={handleChange} 
                            value={values?.relationship_to_policy_holder} 
                            error={errors?.relationship_to_policy_holder}
                        />

                        <CustomTextInput 
                            id={'contact_number'} 
                            type="text"
                            name="contact_number" 
                            label='Contact Number (Optional)' 
                            setValue={handleChange} 
                            value={values?.contact_number} 
                            error={errors?.contact_number}
                        />

                        <CustomTextInput 
                            id={'email'} 
                            type="email"
                            name="email" 
                            label='Email (Optional)' 
                            setValue={handleChange} 
                            value={values?.email} 
                            error={errors?.email}
                        />

                        <CustomTextInput 
                            id={'address'} 
                            type="text"
                            name="address" 
                            label='Address (Optional)' 
                            setValue={handleChange} 
                            value={values?.address} 
                            error={errors?.address}
                        />
                    </div>
                    
                    {dependants.length > 0 && (
                        <div className="mt-3">
                            <h4>Added Dependants</h4>

                            <div className="flex flex-row mt-2 gap-2">
                                {dependants.map((item:any, index:number) => (
                                    <div className="p-2 border rounded flex flex-row items-center justify-center gap-3" key={index}>
                                        <div>
                                            <h4>{item.first_name} {item.last_name}</h4>
                                            <h4>{item.date_of_birth}</h4>
                                        </div>
                                        
                                        <button onClick={() => removeDependant(item)} type="button"><MdCancel className="text-2xl text-red-500" /></button>
                                        <button onClick={() => setValues(item)} type="button"><FaEdit className="text-2xl text-green-500" /></button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-row justify-end gap-3 mt-3">
                        <button onClick={() => router.visit(`/policy-holders/${policy_holder.id}/medical-information/create`)} type="button" className="px-2 py-1 min-w-40 rounded border">Skip</button>
                        <button className="bg-green-500 px-2 py-1 min-w-40 rounded">Submit</button>
                    </div>
                </form>
            </Paper>

            <CustomModal
             open={open}
             setOpen={() => {}}
            >
                <div className="flex flex-col items-center justify-center">
                    <FaCheckCircle className="text-5xl text-green-300" />
                    <h4 className="text-center mt-3 text-lg">Dependant Added successfully!</h4>
                    <p className="mt-3 italic">Do you want to add another dependant?</p>

                    <div className="flex flex-row gap-3 mt-3">
                        <button 
                            onClick={() => {
                                setOpen(false);
                                setValues({});
                                formRef.current.reset();
                            }} 
                            className="bg-green-500 px-2 py-1 min-w-40 rounded"
                        >
                            Yes
                        </button>
                        <button onClick={submitDependants} className="bg-blue-500 px-2 py-1 min-w-40 rounded">Proceed to next</button>
                    </div>
                </div>
            </CustomModal>
        </MainLayout>
    )
}

export default CreateDependants;