import React from "react"

interface StatusProps{
    label: string;
    value: string | number;
}

interface Props{
    id: string;
    label: string;
    name: string;
    value: string;
    setValue: any;
    error?: string;
    required?: boolean;
    data: StatusProps[]
}

const CustomSelectBox = ({id, label, name, value, setValue, error, required, data}: Props) => {
    return (
        <div className="col-span-2 sm:col-span-1 mt-3">
            <label htmlFor={id} className="block text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <select onChange={setValue} defaultValue={value} name={name} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required={required ?? false}>
                <option value={''}>-- Select {name} --</option>
                {data.map((item:StatusProps, index:number) => (
                    <option value={item.value} key={index}>{item.label}</option>
                ))}
            </select>
            {error && <span className="text-red-500">{error}</span>}
        </div>
    )
}

export default CustomSelectBox;