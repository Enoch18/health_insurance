import React, { useState } from "react";
import KeyAndValue from "../Common/KeyAndValue";
import CustomModal from "../Common/CustomModal";
import { usePage } from "@inertiajs/react";
import CustomTextInput from "../Common/CustomTextInput";
import { router } from "@inertiajs/core";
import CustomSelectBox from "../Common/CustomSelectbox";
import { Alert } from "@mui/material";

interface MedicalInfoProps{
    item: any;
    policy_holder_id: number;
}

const SingleMedicalInfo = ({item, policy_holder_id}: MedicalInfoProps) => {
    const [open, setOpen] = useState(false);

    const [values, setValues] = useState<any>({});
    const [item_id, setItemId] = useState("");

    const [error, setError] = useState("");

    const { errors } = usePage().props;

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
        router.put(`/policy-holders/${policy_holder_id}/medical-information/${item_id}`, values, {
            onSuccess: () => {
                setOpen(false);
            },
            onError: (error) => {
                setError(error.error)
            }
        });
    }

    return (
        <div>
            <div className="flex flex-row items-center border-b border-gray-500">
                <div className="flex flex-row flex-1 items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-[100%]">
                        {item.condition !== 'No medical condition' ? (
                            <>
                                <KeyAndValue label="Condition" value={item.condition ?? 'N/A'} />
                                <KeyAndValue label="Notes" value={item.medical_history_notes ?? 'N/A'} />
                                <KeyAndValue label="Last Checkup" value={item.last_checkup_date ?? 'N/A'} />
                                <KeyAndValue label="Primary Physician" value={item.primary_physician ?? 'N/A'} />
                                <KeyAndValue label="Physician Email" value={item.physician_email ?? 'N/A'} />
                                <KeyAndValue label="Physician Phone" value={item.physician_phone ?? 'N/A'} />
                            </>
                        ) : (
                            <KeyAndValue label="Condition" value={item.condition} />
                        )}
                    </div>
                </div>

                <button onClick={() => {
                    setOpen(true);
                    setItemId(item.id);
                    setValues({
                        condition: item.condition ?? "",
                        medical_history_notes: item.medical_history_notes ?? "",
                        primary_physician: item.primary_physician ?? "",
                        physician_phone: item.physician_phone ?? "",
                        physician_email: item.physician_email ?? "",
                        last_checkup_date: item.last_checkup_date ?? "",
                        status: item.status ?? "",
                    });
                    
                    if(item.dependant_id){
                        setValues((values:any) => ({
                            ...values,
                            dependant_id: item.dependant_id,
                        }));
                    }else{
                        setValues((values:any) => ({
                            ...values,
                            policy_holder_id: item.policy_holder_id
                        }));
                    }
                }} className="bg-blue-500 p-2 rounded shadow">
                    Edit
                </button>
            </div>
            
            <form onSubmit={onSubmit}>
                <CustomModal
                    open={open}
                    setOpen={setOpen}
                >
                    <h4 className="text-lg font-bold">Edit Medical Condition</h4><hr />

                    {error !== "" && error !== undefined && <Alert severity="error" className="my-2">{error}</Alert>}

                    <CustomTextInput 
                        id={'condition'} 
                        name="condition"
                        label='Condition' 
                        setValue={handleChange} 
                        value={values?.condition} 
                        error={errors?.condition}
                    />
                    <CustomTextInput 
                        id={'primary_physician'} 
                        name="primary_physician"
                        label='Primary Physician' 
                        setValue={handleChange} 
                        value={values?.primary_physician} 
                        error={errors?.primary_physician}
                    />
                    <CustomTextInput 
                        id={'physician_email'} 
                        name="physician_email"
                        label='Physician Email' 
                        setValue={handleChange} 
                        value={values?.physician_email} 
                        error={errors?.physician_email}
                    />

                    <CustomTextInput 
                        id={'physician_phone'} 
                        name="physician_phone"
                        label='Physician Phone Number' 
                        setValue={handleChange} 
                        value={values?.physician_phone} 
                        error={errors?.physician_phone}
                    />

                    <CustomTextInput 
                        id={'last_checkup_date'} 
                        name="last_checkup_date"
                        label='Last Checkup Date' 
                        setValue={handleChange} 
                        value={values?.last_checkup_date} 
                        error={errors?.last_checkup_date}
                    />

                    <div className="mt-2">
                        <label className="text-sm">Notes</label>
                        <textarea id="medical_history_notes" name={"medical_history_notes"} value={values?.medical_history_notes} onChange={handleChange} className="w-[100%] rounded bg-gray-600"></textarea>
                        {errors?.medical_history_notes && <p className="text-red-500 -mt-2 text-sm">{errors?.medical_history_notes}</p>}
                    </div>

                    <CustomSelectBox 
                        id={'status'} 
                        name="status"
                        label='Status' 
                        data={[
                            {label: 'Ongoing', value: 'ongoing'},
                            {label: 'Current', value: 'current'},
                        ]}
                        setValue={handleChange} 
                        value={values?.status} 
                        error={errors?.status}
                    />

                    <button className="bg-blue-500 p-2 text-white rounded shadow mt-2 w-full">Submit</button>
                </CustomModal>
            </form>
        </div>
    )
}

export default SingleMedicalInfo;