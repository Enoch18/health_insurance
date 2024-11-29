import React, { useState } from "react";
import MainLayout from "@/Layouts/MainLayout";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import CustomTextInput from "@/Components/Common/CustomTextInput";
import { usePage } from "@inertiajs/react";

const ContactSuport = () => {
    const [values, setValues] = useState<any>({});

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
    }
    
    return (
        <MainLayout
            title="Contact Support"
        >
            <TopHeaderSection title='Contact Support' hideAddBtn={true} />

            <div className="flex flex-row justify-center">
                <form className="mt-2 max-w-[800px] w-[100%] border shadow p-3 rounded">
                    <h4 className="text-white mb-2 text-lg">Send us a message</h4><hr className="border-gray-500" />
                    <CustomTextInput 
                        id={'subject'} 
                        name="subject"
                        label='Subject' 
                        setValue={handleChange} 
                        value={values?.subject} 
                        error={errors?.subject}
                    />

                    <CustomTextInput 
                        id={'message'} 
                        name="message"
                        label='Description' 
                        setValue={handleChange} 
                        value={values?.message} 
                        error={errors?.message}
                    />

                    <button className="bg-blue-500 text-white p-2 rounded w-full mt-3">Send</button>
                </form>
            </div>
        </MainLayout>
    )
}

export default ContactSuport;