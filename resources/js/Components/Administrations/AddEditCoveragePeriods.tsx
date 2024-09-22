import React from "react";
import CustomModal from "../Common/CustomModal";
import CustomTextInput from "../Common/CustomTextInput";
import CustomSelectBox from "../Common/CustomSelectbox";

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

const AddEditCoveragePeriods = ({open, setOpen, values, handleChange, onSubmit, is_editing, errors, submitting}: Props) => {

    return (
        <CustomModal
            open={open}
            setOpen={setOpen}
        >
            <h4 className="text-lg mb-2">{is_editing ? 'Edit Coverage Level' : 'Add Coverage level'}</h4><hr />

            <form onSubmit={onSubmit}>
                <CustomTextInput 
                    id={'name'} 
                    name="name" 
                    label='Name' 
                    setValue={handleChange} 
                    value={values?.name} 
                    error={errors?.name}
                />

                <CustomTextInput 
                    id={'number_of_months'} 
                    name="number_of_months" 
                    label='Number of Months' 
                    setValue={handleChange} 
                    value={values?.number_of_months} 
                    error={errors?.number_of_months}
                />

                <CustomSelectBox 
                    id={'status'} 
                    name="status" 
                    label='Status' 
                    data={[
                        {label: 'Active', value: 'active'},
                        {label: 'Inactive', value: 'inactive'},
                    ]} 
                    setValue={handleChange} 
                    value={values?.status} 
                    error={errors.status}
                />

                <button className='bg-blue-500 text-white px-5 py-2 rounded mt-3' disabled={submitting}>
                    {submitting ? 'Submiting...' : 'Submit'}
                </button>
            </form>
        </CustomModal>
    )
}

export default AddEditCoveragePeriods;