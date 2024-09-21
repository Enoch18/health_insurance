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

const AddEditCoverageAgeRanges = ({open, setOpen, values, handleChange, onSubmit, is_editing, errors, submitting}: Props) => {

    return (
        <CustomModal
            open={open}
            setOpen={setOpen}
        >
            <h4 className="text-lg mb-2">{is_editing ? 'Edit Coverage Age Range' : 'Add Coverage Age Range'}</h4><hr />

            <form onSubmit={onSubmit}>
                <CustomTextInput 
                    id={'min_age'} 
                    type="number"
                    name="min_age" 
                    label='Minimum Age' 
                    setValue={handleChange} 
                    value={values?.min_age} 
                    error={errors?.min_age}
                />
                <CustomTextInput 
                    id={'max_age'} 
                    type="number"
                    name="max_age" 
                    label='Maximum Age' 
                    setValue={handleChange} 
                    value={values?.max_age} 
                    error={errors?.max_age}
                />
                <CustomTextInput 
                    id={'description'} 
                    name="description" 
                    label='Description' 
                    setValue={handleChange} 
                    value={values?.description} 
                    error={errors?.description}
                />

                <button className='bg-blue-500 text-white px-5 py-2 rounded mt-3' disabled={submitting}>
                    {submitting ? 'Submiting...' : 'Submit'}
                </button>
            </form>
        </CustomModal>
    )
}

export default AddEditCoverageAgeRanges;