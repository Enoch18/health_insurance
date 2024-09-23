import React, { useEffect, useState } from "react";

interface Props{
    id: number
}

const LimitAmountInputField = ({id}: Props) => {
    const [inputValue, setInputValue] = useState(""); // Controlled input value
    const [debouncedValue, setDebouncedValue] = useState(inputValue); // Debounced value

    useEffect(() => {
        // Set a timeout to update the debounced value after 500ms
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500);

        // Cleanup timeout if inputValue changes (resets the timer)
        return () => {
        clearTimeout(handler);
        };
    }, [inputValue]);

    const handleChange = (event:any) => {
        setInputValue(event.target.value); // Update input value immediately on change
    };

    console.log(debouncedValue)
    
    return (
        <form>
            <input type="number" onChange={handleChange} className="w-[100%] rounded dark:bg-gray-500 dark:text-white" defaultValue="0.00" placeholder="Enter benefit limit" />
        </form>
    )
}

export default LimitAmountInputField;