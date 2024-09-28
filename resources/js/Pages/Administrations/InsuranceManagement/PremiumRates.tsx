import React from "react";
import MainLayout from "@/Layouts/MainLayout";
import TopHeaderSection from "@/Components/Common/TopHeaderSection";
import { Link } from "@inertiajs/react";
import useRoute from "@/Hooks/useRoute";
import Breadcrumbs from "@/Components/Common/Breadcrumbs";
import Table from "@/Components/Common/Table";
import PremiumRatesInputSubmitField from "@/Components/Administrations/PremiumRatesInputSubmitField";

const PremiumRates = ({insurance_type_id, coverage_level_id, year_id, year, rates, coverage_level}:any) => {
    const route = useRoute();

    const headers = [
        {id: 'ageRange', label: 'Age Range'},
        {id: 'individualPrice', label: 'Individual Price'},
        {id: 'corporatePrice', label: 'Corporate Price'},
        {id: 'taxPercentage', label: 'Tax Percentage'}
    ];

    return (
        <MainLayout title="Insurance Setups | Premium Rates">
            <Breadcrumbs title={
                <div className='flex flex-row gap-1 items-center'>
                    <Link className='text-blue-500' href={route('administrations.index')}>Administrations</Link> {'>'}
                    <Link className='text-blue-500' href={route('insurance-types.index')}>Insurance Management</Link> {'>'}
                    <Link className='text-blue-500' href={`/administrations/insurance-types/setups/${insurance_type_id}`}>Insurance Setups</Link> {'>'}
                    <Link className='text-blue-500' href={`/administrations/insurance-types/${insurance_type_id}/years`}>Premium Rate Policy Years</Link> {'>'}
                    <Link className='text-blue-500' href={`/administrations/insurance-types/${insurance_type_id}/years/${year_id}/premium-coverage-levels`}>{year} {coverage_level} Premium Coverage Levels</Link> {'>'}
                    <h4>{year} {coverage_level} Premium Rates</h4>
                </div>
            } />

            <TopHeaderSection title={`${year} ${coverage_level} Premium Rates`} hideAddBtn={true} />

            <div className="mt-3">
                {rates.map((item:any, index:number) => (
                    <div key={index}>
                        <h4 className="text-lg font-semibold mt-5">{item.period}</h4>
                        <Table
                            headers={headers}
                            rows={item.rates.map((rate:any) => (
                                {
                                    ageRange: `${rate.min_age} - ${rate.max_age} Years`,
                                    individualPrice: (
                                        <PremiumRatesInputSubmitField 
                                            coverage_level_id={coverage_level_id}
                                            policy_year_id={year_id}
                                            coverage_period_id={item.coverage_period_id}
                                            coverage_age_range_id={rate.age_range_id}
                                            insurance_type_id={insurance_type_id}
                                            defaultLimitAmount={rate.individual_price}
                                            value_type="individual_price"
                                        />
                                    ),
                                    corporatePrice: (
                                        <PremiumRatesInputSubmitField 
                                            coverage_level_id={coverage_level_id}
                                            policy_year_id={year_id}
                                            coverage_period_id={item.coverage_period_id}
                                            coverage_age_range_id={rate.age_range_id}
                                            insurance_type_id={insurance_type_id}
                                            defaultLimitAmount={rate.corporate_price}
                                            value_type="corporate_price"
                                        />
                                    ),
                                    taxPercentage: (
                                        <div className="flex flex-row items-center gap-1">
                                            <PremiumRatesInputSubmitField 
                                                coverage_level_id={coverage_level_id}
                                                policy_year_id={year_id}
                                                coverage_period_id={item.coverage_period_id}
                                                coverage_age_range_id={rate.age_range_id}
                                                insurance_type_id={insurance_type_id}
                                                defaultLimitAmount={rate.tax_percentage}
                                                value_type="tax_percentage"
                                            />
                                            %
                                        </div>
                                    )
                                }
                            ))}
                        />
                    </div>
                ))}
            </div>
        </MainLayout>
    )
}

export default PremiumRates;