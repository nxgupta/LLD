import type SalaryDetails from "../SalaryDetails.js";

export interface TaxAlgorithm{
    calculateTax(details: SalaryDetails): number;
}