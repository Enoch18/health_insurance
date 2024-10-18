import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import Paper from "@/Components/Paper";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

interface Props{
    policy_holder: any;
}

const CreateMedicalInformation = ({policy_holder}: Props) => {
    policy_holder = policy_holder?.data;

    return (
        <MainLayout title="Create Medicals">
            <TopHeaderSection title='Add Medicals' hideAddBtn={true} />

            <Paper>
                <h4 className="text-lg font-semibold"><span className="text-orange-500">{policy_holder.attributes.first_name} {policy_holder.attributes.last_name}</span> {'>'} Dependants</h4><hr className="border-gray-500" />

                
            </Paper>
        </MainLayout>
    )
}

export default CreateMedicalInformation;