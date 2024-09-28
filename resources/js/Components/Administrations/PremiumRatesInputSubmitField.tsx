import React, { useEffect, useRef, useState } from "react";
import { router } from "@inertiajs/core";
import { formatedPrice, removeCommasFromNumber } from "@/Helpers/helper";
import Loader from "../Common/Loader";

interface Props{
    coverage_level_id: number;
    policy_year_id: number;
    coverage_period_id: number;
    coverage_age_range_id: number;
    insurance_type_id: number;
    value_type: 'individual_price' | 'corporate_price' | 'tax_percentage',
    defaultLimitAmount: any;
}

const PremiumRatesInputSubmitField = ({coverage_level_id, policy_year_id, coverage_period_id, coverage_age_range_id, insurance_type_id, value_type, defaultLimitAmount}: Props) => {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const inputRef = useRef<any>(null);

    const submitCoverageLevelBenefitLimit = (amount: number) => {
        router.post(`/administrations/insurance-types/${insurance_type_id}/premium-rates`, {
            coverage_level_id,
            policy_year_id,
            coverage_period_id,
            coverage_age_range_id,
            value_type,
            amount
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
            setError(`Please enter a valid ${value_type}!`);
            setInputValue("");
            return;
        }
        setInputValue(removeCommasFromNumber(event.target.value)); // Update input value immediately on change
    };
    
    return (
        <form>
            <div className="flex flex-row items-center gap-2">
                <input ref={inputRef} type="text" onChange={handleChange} className="w-[100%] rounded dark:bg-gray-500 dark:text-white" defaultValue={formatedPrice(defaultLimitAmount) ?? "0.00"} placeholder="Enter benefit limit" />
                {submitting && <Loader />}
            </div>
            {error !== '' && <p className="text-red-500 font-semibold">{error}</p>}
        </form>
    )
}

export default PremiumRatesInputSubmitField;