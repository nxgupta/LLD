import type SalaryDetails from "../SalaryDetails.js";
import type {TaxAlgorithm } from "./TaxAlgorithm.js";

class OldTaxAlgorithm implements TaxAlgorithm{
    calculateTax(details: SalaryDetails): number {
        return 0.5 * details.getBasePay() + 0.2 * details.getHra() + 0.2 * details.getLta();
    }
}
export default OldTaxAlgorithm;