import React, { useEffect, useState } from "react";
import Loader from "../Common/Loader";
import { router } from "@inertiajs/core";

interface Props{
    coverage_level_id: number;
    benefit_package_id: number;
    insurance_type_id: number;
    defaultLimitAmount: any;
    setSubmitting: Function;
}

const LimitAmountInputField = ({coverage_level_id, benefit_package_id, insurance_type_id, defaultLimitAmount, setSubmitting}: Props) => {
    const [inputValue, setInputValue] = useState(""); // Controlled input value

    const submitCoverageLevelBenefitLimit = (limit_amount: number) => {
        router.post(`/administrations/insurance-types/${insurance_type_id}/add-coverage-level-benefit-limit`, {
            coverage_level_id,
            benefit_package_id,
            limit_amount
        }, {
            onSuccess: () => {
                setSubmitting(false);
            }
        });
    }

    useEffect(() => {
        // Set a timeout to update the debounced value after 500ms
        const handler = setTimeout(() => {
            if(inputValue !== "" && Number(inputValue) > 0){
                setSubmitting(true);
                submitCoverageLevelBenefitLimit(Number(inputValue));
            }
        }, 500);

        // Cleanup timeout if inputValue changes (resets the timer)
        return () => {
        clearTimeout(handler);
        };
    }, [inputValue]);

    const handleChange = (event:any) => {
        setInputValue(event.target.value); // Update input value immediately on change
    };
    
    return (
        <form>
            <div className="flex flex-row items-center gap-2">
                <input type="number" onChange={handleChange} className="w-[100%] rounded dark:bg-gray-500 dark:text-white" defaultValue={defaultLimitAmount ?? "0.00"} placeholder="Enter benefit limit" />
            </div>
        </form>
    )
}

export default LimitAmountInputField;