import React from "react";
import CustomModal from "../Common/CustomModal";

interface Props{
    open: boolean;
    setOpen: Function;
}

const CompleteAssessment = ({open, setOpen}: Props) => {
    return (
        <CustomModal
            open={open}
            setOpen={setOpen}
        >
            <h4 className="text-lg mb-2">{`Complete Assessment`}</h4><hr />

            <p className="mt-3 text-center text-orange-300">Are you sure you want to complete assessing this service?</p>

            <div className="flex flex-row justify-center items-center gap-3">
                <button onClick={() => setOpen(false)} className='border px-5 py-1 rounded mt-3'>
                    No
                </button>

                <button className='bg-blue-500 text-white px-5 py-1 border rounded mt-3'>
                    Yes
                </button>
            </div>
        </CustomModal>
    )
}

export default CompleteAssessment;