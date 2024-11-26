import React from "react"
import MainLayout from "@/Layouts/MainLayout"
import TopHeaderSection from "@/Components/Common/TopHeaderSection";

const ShowClaim = () => {
    return (
        <MainLayout 
            title="Show Claim"
        >
            <TopHeaderSection title='Claim' hideAddBtn={true} />
        </MainLayout>
    )
}

export default ShowClaim;