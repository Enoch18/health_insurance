import SingleMedicalInfo from "@/Components/PolicyHolders/SingleMedicalInfo";
import PolicyHolderLayout from "@/Layouts/PolicyHolderLayout";
import React from "react";

interface Props{
    policy_holder: any;
    policy_holder_medicals: any;
    dependant_medicals: any;
}

const MedicalInformation = ({policy_holder, policy_holder_medicals, dependant_medicals}: Props) => {
    return (
        <PolicyHolderLayout policy_holder={policy_holder?.data}>
            <h2 className="text-lg font-bold">Family Medical Information</h2><hr className="border-gray-500" />

            <div className="mt-2 border-b border-gray-500">
                <h4 className="font-semibold text-blue-300">{policy_holder_medicals.policy_holder}</h4>
                
                {policy_holder_medicals?.medicals?.map((medicalItem: any, medIndex: number) => (
                    <SingleMedicalInfo item={medicalItem} key={medIndex} />
                ))}
            </div>

            {dependant_medicals.length > 0 && (
                <div>
                    {dependant_medicals?.map((item:any, index: number) => (
                        <div className="border-b border-gray-500" key={index}>
                            <h4 className="font-semibold text-blue-300 mt-3">{item.dependant}</h4>
                            
                            {item?.medicals?.map((medicalItem: any, medIndex: number) => (
                                <SingleMedicalInfo item={medicalItem} key={medIndex} />
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </PolicyHolderLayout>
    )
}

export default MedicalInformation;