import CustomModal from "@/Components/Common/CustomModal";
import CustomSelectBox from "@/Components/Common/CustomSelectbox";
import CustomTextInput from "@/Components/Common/CustomTextInput";
import SingleIndividualExclusion from "@/Components/PolicyHolders/SingleIndividualExclusion";
import PolicyHolderLayout from "@/Layouts/PolicyHolderLayout";
import { router } from "@inertiajs/core";
import { usePage } from "@inertiajs/react";
import { Alert } from "@mui/material";
import React, { useState } from "react";

interface Props{
    policy_holder: any;
}

const Underwriting = ({policy_holder}: Props) => {
    const [open, setOpen] = useState(false);

    const [values, setValues] = useState<any>({policy_holder_id: policy_holder?.data?.id});

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
        router.post(`/policy-holders/${policy_holder.data.id}/underwriting`, values, {
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

    return (
        <PolicyHolderLayout policy_holder={policy_holder?.data}>
            <div className="flex flex-row items-center">
                <div className="flex flex-row flex-1">
                    <h2 className="text-lg font-bold">Underwriting</h2>
                </div>

                <button onClick={() => setOpen(true)} className={`${!!policy_holder?.data?.underwriting ? 'bg-green-200 text-gray-500 font-semibold' : 'bg-blue-500 text-white'} py-2 px-5 rounded shadow`} disabled={!!policy_holder?.data?.underwriting}>
                    {!!policy_holder?.data?.underwriting ? 'Underwritten!!!' : 'Underwrite'}
                </button>
            </div><hr className="border-gray-500 mt-1" />

            <SingleIndividualExclusion 
                excluded_name={`${policy_holder.data.attributes.first_name} ${policy_holder.data.attributes.last_name}`}
                policy_holder_id={policy_holder.data.id}
                exclusions={policy_holder.data.exclusions}
                is_underwritten={!!policy_holder?.data?.underwriting}
            />

            {policy_holder.data.dependants.length > 0 && policy_holder.data.dependants.map((item:any, index:number) => (
                <SingleIndividualExclusion 
                    excluded_name={`${item.first_name} ${item.last_name}`}
                    dependant_id={item.id}
                    exclusions={item.exclusions}
                    key={index}
                    is_underwritten={!!policy_holder?.data?.underwriting}
                />
            ))}

            <form onSubmit={onSubmit}>
                <CustomModal
                    open={open}
                    setOpen={setOpen}
                >
                    <h4 className="text-lg mb-2">Underwrite Policy Holder</h4><hr />
                    {error !== "" && error !== undefined &&  <Alert severity="error" className="mb-2">{error}</Alert>}
                    <CustomSelectBox 
                        id={'risk_level'} 
                        name="risk_level"
                        label='Risk Level' 
                        data={[
                            {label: 'Low', value: 'low'},
                            {label: 'Moderate', value: 'moderate'},
                            {label: 'High', value: 'high'},
                        ]}
                        setValue={handleChange} 
                        value={values?.risk_level} 
                        error={errors?.risk_level}
                    />

                    <CustomTextInput 
                        id={'notes'} 
                        name="notes"
                        label='Notes' 
                        setValue={handleChange} 
                        value={values?.notes} 
                        error={errors?.notes}
                    />

                    <CustomSelectBox 
                        id={'status'} 
                        name="status"
                        label='Status' 
                        data={[
                            {label: 'Pending', value: 'pending'},
                            {label: 'Accepted', value: 'accepted'},
                            {label: 'Rejected', value: 'rejected'},
                        ]}
                        setValue={handleChange} 
                        value={values?.status} 
                        error={errors?.status}
                    /> 
                    
                    <button className="bg-blue-500 p-2 text-white rounded shadow mt-2 w-full">Submit</button>
                </CustomModal>
            </form>
        </PolicyHolderLayout>
    )
}

export default Underwriting;