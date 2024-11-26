import React from "react"
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from "@/Components/Common/TopHeaderSection";

const CreateClaim = () => {
    return (
        <MainLayout 
            title="Create New Claim"
        >
            <TopHeaderSection title='Add New Claim' hideAddBtn={true} />
        </MainLayout>
    )
}

export default CreateClaim;