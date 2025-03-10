import React, { useEffect, useRef, useState } from "react";
import { router } from "@inertiajs/core";
import { formatedPrice, removeCommasFromNumber } from "@/Helpers/helper";

interface Props{
    coverage_level_id: number;
    benefit_package_id: number;
    insurance_type_id: number;
    defaultLimitAmount: any;
    setSubmitting: Function;
}

const LimitAmountInputField = ({coverage_level_id, benefit_package_id, insurance_type_id, defaultLimitAmount, setSubmitting}: Props) => {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const inputRef = useRef<any>(null);

    const submitCoverageLevelBenefitLimit = (limit_amount: number) => {
        router.post(`/administrations/insurance-types/${insurance_type_id}/add-coverage-level-benefit-limit`, {
            coverage_level_id,
            benefit_package_id,
            limit_amount
        }, {
            onSuccess: () => {
                // setTimeout(() => {
                //     inputRef.current.value = formatedPrice(inputValue);
                // }, 5000);
                
                setSubmitting(false);
            }
        });
    }

    useEffect(() => {
        // Set a timeout to update the debounced value after 500ms
        const handler = setTimeout(() => {
            if(inputValue !== "" && Number(removeCommasFromNumber(inputValue)) > 0){
                let price:any = removeCommasFromNumber(inputValue);

                setSubmitting(true);
                submitCoverageLevelBenefitLimit(Number(price));
            }
        }, 500);

        // Cleanup timeout if inputValue changes (resets the timer)
        return () => {
        clearTimeout(handler);
        };
    }, [inputValue]);

    const handleChange = (event:any) => {
        setError("");
        if(isNaN(removeCommasFromNumber(event.target.value))){
            setError('Please enter a valid amount!');
            setInputValue("");
            return;
        }
        setInputValue(removeCommasFromNumber(event.target.value)); // Update input value immediately on change
    };
    
    return (
        <form>
            <div className="flex flex-row items-center gap-2">
                <input ref={inputRef} type="text" onChange={handleChange} className="w-[100%] rounded dark:bg-gray-500 dark:text-white" defaultValue={formatedPrice(defaultLimitAmount) ?? "0.00"} placeholder="Enter benefit limit" />
            </div>
            {error !== '' && <p className="text-red-500 font-semibold">{error}</p>}
        </form>
    )
}

export default LimitAmountInputField;