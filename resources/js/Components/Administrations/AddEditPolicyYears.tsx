import React from "react";
import CustomModal from "../Common/CustomModal";
import CustomTextInput from "../Common/CustomTextInput";

interface Props{
    open: boolean;
    setOpen: Function;
    values: any;
    handleChange: Function;
    onSubmit: any;
    is_editing: boolean;
    errors: any;
    submitting: boolean;
}

const AddEditPolicyYears = ({open, setOpen, values, handleChange, onSubmit, is_editing, errors, submitting}: Props) => {

    return (
        <CustomModal
            open={open}
            setOpen={setOpen}
        >
            <h4 className="text-lg mb-2">{is_editing ? 'Edit Coverage Level' : 'Add Coverage level'}</h4><hr />

            <form onSubmit={onSubmit}>
                <CustomTextInput 
                    id={'year'} 
                    type="number"
                    name="year" 
                    label='Year' 
                    setValue={handleChange} 
                    value={values?.year} 
                    error={errors?.year}
                />

                <button className='bg-blue-500 text-white px-5 py-2 rounded mt-3' disabled={submitting}>
                    {submitting ? 'Submiting...' : 'Submit'}
                </button>
            </form>
        </CustomModal>
    )
}

export default AddEditPolicyYears;