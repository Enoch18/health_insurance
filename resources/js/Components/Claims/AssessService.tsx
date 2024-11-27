import React from "react";
import CustomModal from "../Common/CustomModal";
import CustomTextInput from "../Common/CustomTextInput";

interface Props{
    open: boolean;
    setOpen: Function;
    values: any;
    handleChange: Function;
    onSubmit: any;
    errors: any;
    submitting: boolean;
    title?: string;
}

const AssessService = ({open, setOpen, values, handleChange, onSubmit, errors, submitting, title}: Props) => {

    return (
        <CustomModal
            open={open}
            setOpen={setOpen}
        >
            <h4 className="text-lg mb-2">{`Assess ${title}`}</h4><hr />

            <form onSubmit={onSubmit}>
                <CustomTextInput 
                    id={'approved_amount'} 
                    name="approved_amount"
                    label='Approved Amount' 
                    setValue={handleChange} 
                    value={values?.approved_amount} 
                    error={errors?.approved_amount}
                />

                <CustomTextInput 
                    id={'rejected_amount'} 
                    name="rejected_amount"
                    label='Rejected Amount' 
                    setValue={handleChange} 
                    value={values?.rejected_amount} 
                    error={errors?.rejected_amount}
                />

                <button className='bg-blue-500 text-white px-5 py-2 rounded mt-3' disabled={submitting}>
                    {submitting ? 'Submiting...' : 'Submit'}
                </button>
            </form>
        </CustomModal>
    )
}

export default AssessService;