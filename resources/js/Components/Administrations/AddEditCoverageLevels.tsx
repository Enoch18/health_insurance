import React, { useContext, useState } from "react";
import CustomModal from "../Common/CustomModal";
import { useAddEdit } from "@/Hooks/useAddEdit";
import CustomTextInput from "../Common/CustomTextInput";
import CustomSelectBox from "../Common/CustomSelectbox";
import { queryString } from "@/Helpers/helper";

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

const AddEditCoverageLevels = ({open, setOpen, values, handleChange, onSubmit, is_editing, errors, submitting}: Props) => {

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
                    id={'description'} 
                    name="description" 
                    label='Description' 
                    setValue={handleChange} 
                    value={values?.description} 
                    error={errors?.description}
                />

                <CustomSelectBox 
                    id={'tier_level'} 
                    name="tier_level" 
                    label='Tier Level' 
                    data={[
                        {label: 'Tier 1', value: '1'},
                        {label: 'Tier 2', value: '2'},
                    ]} 
                    setValue={handleChange} 
                    value={values?.tier_level} 
                    error={errors.tier_level}
                />

                <CustomSelectBox 
                    id={'policy_type'} 
                    name="policy_type" 
                    label='Policy Type' 
                    data={[
                        {label: 'Individual', value: 'individual'},
                        {label: 'Corporate', value: 'corporate'},
                        {label: 'Any', value: 'any'},
                    ]} 
                    setValue={handleChange} 
                    value={values?.policy_type} 
                    error={errors.policy_type}
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

export default AddEditCoverageLevels;