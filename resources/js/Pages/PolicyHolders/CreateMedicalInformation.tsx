import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import MedicalInformationFormContainer from "@/Components/PolicyHolders/MedicalInformationForm";
import MainLayout from "@/Layouts/MainLayout";
import React, { useState } from "react";

interface Props{
    policy_holder: any;
}

const CreateMedicalInformation = ({policy_holder}: Props) => {
    policy_holder = policy_holder?.data;
    const [dependantIndex, setDependantIndex] = useState(-1);

    return (
        <MainLayout title="Create Medicals">
            <TopHeaderSection title='Add Medicals' hideAddBtn={true} />

            <MedicalInformationFormContainer
                name={`${policy_holder?.attributes.first_name} ${policy_holder?.attributes.last_name}`}
                individual_type="Policy Holder"
                id_type={dependantIndex > -1 ? "dependant" : "policy_holder"}
                id={dependantIndex > -1 ? policy_holder?.dependants[dependantIndex].id : policy_holder.id}
                dependants={policy_holder?.dependants}
                dependantIndex={dependantIndex}
                setDependantIndex={setDependantIndex}
                policy_holder={policy_holder}
            />
        </MainLayout>
    )
}

export default CreateMedicalInformation;