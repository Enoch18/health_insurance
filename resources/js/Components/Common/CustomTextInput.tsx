import React from "react"

interface Props{
    id: string;
    label: string;
    type?: string;
    name: string;
    value: string;
    setValue: any;
    error?: string;
    required?: boolean;
}

const CustomTextInput = ({id, label, type, name, value, setValue, error, required}: Props) => {
    return (
        <div className="col-span-2 sm:col-span-1 mt-3">
            <label htmlFor={id} className="block text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input type={type ?? "text"} onChange={setValue} defaultValue={value} name={name} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter the description" required={required ?? false} />
            {error && <span className="text-red-500">{error}</span>}
        </div>
    )
}

export default CustomTextInput;