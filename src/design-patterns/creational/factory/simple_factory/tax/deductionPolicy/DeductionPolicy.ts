import type SalaryDetails from "../SalaryDetails.js";

export interface DeductionPolicy{
    calculateDeduction(details: SalaryDetails): number;
}