import React, { useState } from "react";
import Table from "../Common/Table";
import { usePage } from "@inertiajs/react";
import CustomModal from "../Common/CustomModal";
import CustomTextInput from "../Common/CustomTextInput";
import { router } from "@inertiajs/core";
import { Alert } from "@mui/material";

interface ExclusionProps{
    excluded_name: string;
    policy_holder_id?: number;
    dependant_id?: number;
    exclusions: any;
    is_underwritten: boolean;
}

const SingleIndividualExclusion = ({excluded_name, policy_holder_id, dependant_id, exclusions, is_underwritten}: ExclusionProps) => {
    const headings = [
        {label: 'Exclusion name', id: 'exclusion_name'},
        {label: 'Exclusion Details', id: 'exclusion_details'},
        {label: '', id: 'actions', align: "right"}
    ];

    const [open, setOpen] = useState(false);

    const [values, setValues] = useState<any>({});

    const [error, setError] = useState("");

    const [item_id, setItemId] = useState("");

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
        if(item_id){
            router.put(`/policy-holders/${policy_holder_id}/exclusions/${item_id}`, values, {
                onSuccess: () => {
                    setOpen(false);
                },
                onError: (error) => {
                    setError(error.error);
                    setTimeout(() => {
                        setError("");
                    }, 3000);
                }
            });
        }else{
            router.post(`/policy-holders/${policy_holder_id}/exclusions`, values, {
                onSuccess: () => {
                    setOpen(false);
                },
                onError: (error) => {
                    setError(error.error);
                    setTimeout(() => {
                        setError("");
                    }, 3000);
                }
            });
        }
    }

    return (
        <div className="mt-5">
            <div className="flex flex-row justify-end mb-1">
                <div className="flex flex-row flex-1">
                    <h4>Exclusions for <span className="text-blue-300">{excluded_name}</span></h4>
                </div>

                {!is_underwritten && (
                    <button 
                        onClick={() => {
                            setOpen(true);
                            if(dependant_id){
                                setValues((values:any) => ({
                                    ...values,
                                    dependant_id: dependant_id,
                                }));
                            }else{
                                setValues((values:any) => ({
                                    ...values,
                                    policy_holder_id: policy_holder_id,
                                }));
                            }
                        }} 
                        className="bg-green-500 px-2 rounded shadow"
                    >
                        Add Exclusion
                    </button>
                )}
            </div>

            <Table
                headers={headings}
                rows={exclusions?.map((item:any) => (
                    {
                        exclusion_name: item.exclusion_name, 
                        exclusion_details: item.exclusion_details,
                        actions: (
                            <>
                                {!is_underwritten && (
                                    <button 
                                        onClick={() => {
                                            setOpen(true);
                                            setItemId(item.id)
                                            setValues({
                                                exclusion_name: item.exclusion_name, 
                                                exclusion_details: item.exclusion_details,
                                            });
                                        }}
                                        className="border text-white p-1 rounded shadow float-right"
                                    >
                                        Edit
                                    </button>
                                )}
                            </>
                        )
                    }
                ))}
                hideCheckbox={true}
                not_found={`No exclusions found!`}
            />

            <form onSubmit={onSubmit}>
                <CustomModal
                    open={open}
                    setOpen={setOpen}
                >
                    <h4 className="text-lg mb-2">Add Exclusion</h4><hr />
                    {error !== "" && error !== undefined &&  <Alert severity="error" className="mb-2">{error}</Alert>}
                    <CustomTextInput 
                        id={'exclusion_name'} 
                        name="exclusion_name"
                        label='Exclusion Name' 
                        setValue={handleChange} 
                        value={values?.exclusion_name} 
                        error={errors?.exclusion_name}
                    />

                    <CustomTextInput 
                        id={'exclusion_details'} 
                        name="exclusion_details"
                        label='Exclusion Details' 
                        setValue={handleChange} 
                        value={values?.exclusion_details} 
                        error={errors?.exclusion_details}
                    />

                    <button className="bg-blue-500 p-2 text-white rounded shadow mt-2 w-full">Submit</button>
                </CustomModal>
            </form>
        </div>
    )
}

export default SingleIndividualExclusion;