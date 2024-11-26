import React, { useState } from "react"
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import { router } from "@inertiajs/core";
import { usePage } from "@inertiajs/react";
import CustomTextInput from "@/Components/Common/CustomTextInput";
import CustomSelectBox from "@/Components/Common/CustomSelectbox";
import Paper from "@/Components/Paper";
import { FaPlus } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { Alert } from "@mui/material";

const CreateClaim = ({policy_holders, services}:any) => {
    const { errors } = usePage().props;
    const [error, setError] = useState("");

    const [values, setValues] = useState<any>({});
    const [serviceValues, setServiceValues] = useState([
        {id: 1, service_id: "", claim_amount: ""}
    ]);

    const handleServiceChange = (id:string, e: any) => {
        let data = serviceValues;
        let obj = data.find(item => Number(item.id) === Number(id));

        if (obj) {
            obj.service_id = e.target.name === "service_id" ? e.target.value : obj.service_id;
            obj.claim_amount = e.target.name === "claim_amount" ? e.target.value : obj.claim_amount;
        }

        setServiceValues(data);
    }

    const addTableRow = () => {
        const nextId = serviceValues[serviceValues.length - 1].id + 1;
        setServiceValues((value:any) => [...value, {id: nextId, service_id: "", claim_amount: ""}]);
    }
    
    const removeTableRow = (id: number) => {
        setServiceValues(() => serviceValues.filter((obj:any) => Number(obj.id) !== Number(id)));
    }

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

        values.claim_services = serviceValues;

        router.post(`/claims-management/claims`, values, {
            onSuccess: () => {
                router.visit("/claims-management/claims")
            },
            onError: (error) => {
                setError(error.error);
                setTimeout(() => {
                    setError("");
                }, 3000)
            }
        });
    }

    return (
        <MainLayout 
            title="Create New Claim"
        >
            <TopHeaderSection title='Add New Claim' hideAddBtn={true} />

            {error !== "" && <Alert severity="error" className="mb-2">{error}</Alert>}

            <Paper>
                <form onSubmit={onSubmit}>
                    <h4>Claim Details</h4><hr className="border-gray-500" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <CustomSelectBox
                            id={'policy_holder_id'} 
                            name="policy_holder_id" 
                            label='Policy Holder' 
                            data={policy_holders?.map((item:any) => (
                                {label: `${item.policy_number} - ${item.first_name} ${item.last_name}`, value: item.id}
                            ))}
                            setValue={handleChange} 
                            value={values?.policy_holder_id} 
                            error={errors?.policy_holder_id}
                        />

                        <CustomTextInput 
                            id={'service_provider'} 
                            type="text"
                            name="service_provider" 
                            label='Service Provider *' 
                            setValue={handleChange} 
                            value={values?.service_provider} 
                            error={errors?.service_provider}
                        />
                        
                        <CustomTextInput 
                            id={'claim_date'} 
                            type="date"
                            name="claim_date" 
                            label='Claim Date *' 
                            setValue={handleChange} 
                            value={values?.claim_date} 
                            error={errors?.claim_date}
                        />

                        <CustomTextInput 
                            id={'total_claimed_amount'} 
                            type="text"
                            name="total_claimed_amount" 
                            label='Total Claimed Amount *' 
                            setValue={handleChange} 
                            value={values?.total_claimed_amount} 
                            error={errors?.total_claimed_amount}
                        />
                    </div>
                    <hr className="border-gray-500 mt-3" />

                    <h4 className="mt-3">Claim Services</h4>
                    {errors?.claim_services && <p className="text-red-500 font-semibold">{errors?.claim_services}</p>}
                    <table className="w-full mt-2">
                        <thead>
                            <tr className="bg-gray-500 border-x border-x-gray-400 border-y-gray-400 border-y">
                                <td className="p-2">Service</td>
                                <td>Amount</td>
                                {serviceValues.length > 1 && <td></td>}
                            </tr>
                        </thead>

                        <tbody>
                            {serviceValues?.map((item:any, index:number) => (
                                <tr className="border-b-gray-400 border-b" key={index}>
                                    <td className="py-2 border-x border-x-gray-400">
                                        <CustomSelectBox
                                            id={'service_id'} 
                                            name="service_id" 
                                            label='Service' 
                                            hideLabel={true}
                                            data={services?.map((item:any) => (
                                                {label: item.name, value: item.id}
                                            ))}
                                            setValue={(e:any) => handleServiceChange(item.id, e)} 
                                            value={values?.service_id} 
                                            error={errors[`claim_services.${index}.service_id`]}
                                        />
                                    </td>
                                    <td className="py-2 border-x border-x-gray-400">
                                        <CustomTextInput 
                                            id={'claim_amount'} 
                                            type="text"
                                            name="claim_amount" 
                                            label='Service Amount *' 
                                            hideLabel={true}
                                            setValue={(e:any) => handleServiceChange(item.id, e)} 
                                            value={values?.claim_amount} 
                                            error={errors[`claim_services.${index}.claim_amount`]}
                                        />
                                    </td>
                                    {serviceValues.length > 1 && (
                                        <td className="border-r border-t border-gray-400">
                                            {index > 0 && (
                                                <button type="button" onClick={() => removeTableRow(item.id)} className="flex flex-row items-center justify-center w-[100%]">
                                                    <MdCancel className="text-3xl" />
                                                </button>
                                            )}
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex flex-row justify-end">
                        <button type="button" onClick={addTableRow} className="flex flex-row items-center justify-center w-11 h-11 bg-green-500 rounded-full shadow mt-2">
                            <FaPlus className="text-2xl text-white" />
                        </button>
                    </div>

                    <div className="mt-3">
                        <button className="bg-blue-500 text-white rounded p-2">Submit Claim</button>
                    </div>
                </form>
            </Paper>
        </MainLayout>
    )
}

export default CreateClaim;