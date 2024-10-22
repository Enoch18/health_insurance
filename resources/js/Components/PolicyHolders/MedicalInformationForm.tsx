import React, { useEffect, useRef, useState } from "react";
import Paper from "../Paper";
import CustomTextInput from "../Common/CustomTextInput";
import CustomSelectBox from "../Common/CustomSelectbox";
import { FaCheckCircle } from "react-icons/fa";
import CustomModal from "../Common/CustomModal";
import * as Yup from 'yup';

interface MedicalProps{
    name: string;
    individual_type: string;
    id_type: "policy_holder" | "dependant";
    id: number;
    dependants: any;
    dependantIndex: number;
    setDependantIndex: Function;
}

const MedicalInformationForm = ({name, individual_type, id_type, id, dependants, dependantIndex, setDependantIndex}: MedicalProps) => {
    const [errors, setErrors] = useState<any>({});
    const [values, setValues] = useState<any>({});
    const [open, setOpen] = useState(false);
    const [is_completing, setIsCompleting] = useState(false);
    const [no_medical_condition, setNoMedicalCondition] = useState(false);
    const [medical_conditions, setMedicalConditions] = useState([]);
    const formRef = useRef<any>(null);

    const validationSchema = Yup.object().shape({
        condition: Yup.string().required("Condition is required"),
        last_checkup_date: Yup.string().required("Last checkup date is required"),
        primary_physican: Yup.string().required("Primary physician is required"),
        physician_phone_number: Yup.string().required("Physician mobile number is required"),
        physician_email: Yup.string().required("Physician email is required"),
        notes: Yup.string().required("Notes are is required"),
        status: Yup.string().required("Status is required")
    });

    function handleChange(e:any) {
        const key = e.target.id;
        const value = e.target.value
        setValues((values:any) => ({
            ...values,
            [key]: value,
        }))
    }


    useEffect(() => {
        if(id_type === "dependant"){
            setValues((values:any) => ({...values, dependant_id: id}));
        }else{
            setValues((values:any) => ({...values, policy_holder_id: id}));
        }
    }, [dependantIndex]);

    const validateForm = async() => {
        try {
            await validationSchema.validate(values, { abortEarly: false });
            setErrors({}); // Clear errors if validation passes
            return true;
        } catch (err:any) {
            const newErrors:any = {};
            err.inner.forEach((validationError:any) => {
                newErrors[validationError.path] = validationError.message;
            });
            setErrors(newErrors); // Set validation errors
            return false;
        }
    }

    const addMedicalCondition = async() => {
        setErrors({});
        if(!no_medical_condition){
            const isValid = await validateForm();

            if(isValid){
                setOpen(true);
            }
        }else{
            setOpen(true);
        }
    }

    const nextMedicalInformation = () => {
        let maxIndex = dependants.length - 1;

        if(id_type === 'policy_holder'){
            setDependantIndex(0);
            setMedicalConditions((currentValues:any): any => {
                return [...currentValues, values];
            });
        }
        
        if(id_type === 'dependant'){
            if(dependantIndex <= maxIndex){
                let index = dependants.length === 1 ? 0 : dependantIndex + 1;
                setDependantIndex(index);
                setMedicalConditions((currentValues:any): any => {
                    return [...currentValues, values];
                });
            }else{
                setIsCompleting(true);
            }
        }

        if(maxIndex === -1){
            setIsCompleting(true);
        }

        setNoMedicalCondition(false);

        formRef.current?.reset();

        setValues({});

        setOpen(false);
    }

    console.log(id_type, medical_conditions)

    return (
        <div className="mt-3">
            <div className="flex flex-row items-center mb-3">
                <h4 className="text-xl font-semibold"><span className="text-orange-500">{name} ({individual_type})</span></h4>
                {dependants?.map((item:any, index:number) => (
                    <h4 className={`text-xl font-semibold ${dependantIndex >= index ? 'text-orange-500' : ''}`} key={index}>&nbsp;{' > '} {item.first_name} {item.last_name} ({item.relationship_to_policy_holder})</h4>
                ))}
            </div>

            <Paper>
                <h4 className="text-lg font-semibold">Medical Information</h4><hr className="border-gray-500 mb-3" />

                <label htmlFor="no_medical_codition" className="flex flex-row items-center gap-1 cursor-pointer">
                    <input type="checkbox" onChange={(e:any) => setNoMedicalCondition(e.target.checked)} id="no_medical_codition" name="no_medical_codition" checked={no_medical_condition} />
                    No medical condition
                </label>
                
                <div className="mt-3">
                    <form ref={formRef}>
                        <h4 className="border-t border-t-gray-500 mt-5 pt-2 text-xl text-green-300 -mb-2">Condition</h4>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                            <CustomTextInput 
                                id={'condition'} 
                                type="text"
                                name="condition" 
                                label='Condition' 
                                setValue={handleChange} 
                                value={values?.condition} 
                                error={errors?.condition}
                            />
                            <CustomTextInput 
                                id={'last_checkup_date'} 
                                type="date"
                                name="last_checkup_date" 
                                label='Last Checkup Date' 
                                setValue={handleChange} 
                                value={values?.last_checkup_date} 
                                error={errors?.last_checkup_date}
                            />
                            <CustomTextInput 
                                id={'primary_physican'} 
                                type="text"
                                name="primary_physican" 
                                label='Primary Physician' 
                                setValue={handleChange} 
                                value={values?.primary_physican} 
                                error={errors?.primary_physican}
                            />
                            <CustomTextInput 
                                id={'physician_phone_number'} 
                                type="text"
                                name="physician_phone_number" 
                                label='Physician Contact Number' 
                                setValue={handleChange} 
                                value={values?.physician_phone_number} 
                                error={errors?.physician_phone_number}
                            />

                            <CustomTextInput 
                                id={'physician_email'} 
                                type="text"
                                name="physician_email" 
                                label='Physician Email' 
                                setValue={handleChange} 
                                value={values?.physician_email} 
                                error={errors?.physician_email}
                            />
                            <CustomTextInput 
                                id={'notes'} 
                                type="text"
                                name="notes" 
                                label='Notes' 
                                setValue={handleChange} 
                                value={values?.notes} 
                                error={errors?.notes}
                            />
                            <CustomSelectBox 
                                id={'status'} 
                                name="status" 
                                label='Status *'
                                data={[
                                    {label: 'Current', value: 'current'},
                                    {label: 'Ongoing', value: 'ongoing'},
                                    {label: 'No Medical Condition', value: 'no_condition'}
                                ]}
                                setValue={handleChange} 
                                value={values?.status} 
                                error={errors?.status}
                            />
                        </div>

                        <div className="flex flex-row justify-end gap-3 mt-5 border-t pt-2 border-t-gray-500">
                            <button onClick={addMedicalCondition} type="button" className="bg-green-500 px-2 py-1 min-w-40 rounded">Submit</button>
                        </div>
                    </form>
                </div>
            </Paper>

            <CustomModal
             open={open}
             setOpen={() => {}}
            >
                <div className="flex flex-col items-center justify-center">
                    <FaCheckCircle className="text-5xl text-green-300" />
                    {no_medical_condition ? (
                        <>
                            <h4 className="text-center mt-3 text-lg">Member has no medical condition!</h4>
                            <p className="mt-3 italic">Do you want to add a condition?</p>
                        </>
                    ) : (
                        <>
                            <h4 className="text-center mt-3 text-lg">Medical condition added successfully!</h4>
                            <p className="mt-3 italic">Do you want to add another condition?</p>
                        </>
                    )}
                    
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
                        <button onClick={nextMedicalInformation} className="bg-blue-500 px-2 py-1 min-w-40 rounded">Proceed to next</button>
                    </div>
                </div>
            </CustomModal>
        </div>
    )
}

export default MedicalInformationForm;