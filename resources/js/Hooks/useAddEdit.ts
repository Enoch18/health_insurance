import { ToastContext } from "@/Contexts/ToastContext";
import { router } from "@inertiajs/core";
import { usePage } from "@inertiajs/react";
import { useContext, useState } from "react";

const useAddEdit = (route:string) => {
    const [submitting, setSubmitting] = useState(false);
    const [item_id, setItemId] = useState('');
    const [open, setOpen] = useState(false);
    const {setType, setMessage} = useContext(ToastContext);
    const [is_editing, setIsEditing] = useState(false);

    const [values, setValues] = useState<any>({});

    const { errors } = usePage().props;

    function handleChange(e:any) {
        const key = e.target.id;
        const value = e.target.value
        setValues((values:any) => ({
            ...values,
            [key]: value,
        }))
    }

    const onSubmit = (e:any) => {
        e.preventDefault();
        setSubmitting(true);

        if(is_editing){
            router.put(`${route}/${item_id}`, values, {
                onSuccess: () => {
                    setSubmitting(false);
                    setMessage('Updated successfully!');
                    setType('success');
                    setOpen(false);
                },
                onError: () => {
                    setMessage('An error occured while trying to update!');
                    setType('error');
                    setSubmitting(false);
                }
            });
        }else{
            router.post(route, values, {
                onSuccess: () => {
                    setSubmitting(false);
                    setMessage('Saved successfully!');
                    setType('success');
                    setOpen(false);
                },
                onError: () => {
                    setMessage('An error occured while trying to save!');
                    setType('error');
                    setSubmitting(false);
                }
            });
        }
    }

    return {
        open, setOpen,
        values, setValues,
        is_editing, setIsEditing,
        item_id,
        setItemId,
        submitting,
        errors,
        handleChange,
        onSubmit
    }
}

export {useAddEdit}