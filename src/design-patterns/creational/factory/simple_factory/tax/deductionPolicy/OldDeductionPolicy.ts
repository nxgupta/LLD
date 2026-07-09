import type SalaryDetails from "../SalaryDetails.js";
import type { DeductionPolicy } from "./DeductionPolicy.js";

class OldDeductionPolicy implements DeductionPolicy{
    private static readonly STANDARD_DEDUCTION = 50000;
    
    calculateDeduction(details: SalaryDetails): number {
        const base = details.getBasePay();
        const cappedStandard = Math.min(OldDeductionPolicy.STANDARD_DEDUCTION, base)
        return cappedStandard;
    }
}

export default OldDeductionPolicy