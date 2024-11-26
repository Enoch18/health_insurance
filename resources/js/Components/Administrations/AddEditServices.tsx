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
    benefit_packages: any;
}

const AddEditServices = ({open, setOpen, values, handleChange, onSubmit, is_editing, errors, submitting, benefit_packages}: Props) => {
    return (
        <CustomModal
            open={open}
            setOpen={setOpen}
        >
            <h4 className="text-lg mb-2">{is_editing ? 'Edit Service' : 'Add Service'}</h4><hr />

            <form onSubmit={onSubmit}>
                <CustomTextInput 
                    id={'name'} 
                    name="name" 
                    label='Name' 
                    setValue={handleChange} 
                    value={values?.name} 
                    error={errors?.name}
                />

                <CustomSelectBox 
                    id={'benefit_package_id'} 
                    name="benefit_package_id" 
                    label='Status' 
                    data={benefit_packages ? benefit_packages.map((item:any) => (
                        {
                            label: item.description,
                            value: item.id
                        }
                    )) : []} 
                    setValue={handleChange} 
                    value={values?.benefit_package_id} 
                    error={errors.benefit_package_id}
                />

                <button className='bg-blue-500 text-white px-5 py-2 rounded mt-3' disabled={submitting}>
                    {submitting ? 'Submiting...' : 'Submit'}
                </button>
            </form>
        </CustomModal>
    )
}

export default AddEditServices;