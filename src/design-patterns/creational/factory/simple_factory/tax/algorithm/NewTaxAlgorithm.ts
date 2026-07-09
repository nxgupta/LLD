import type SalaryDetails from "../SalaryDetails.js";
import type {TaxAlgorithm } from "./TaxAlgorithm.js";

class NewTaxAlgorithm implements TaxAlgorithm {
    calculateTax(details: SalaryDetails): number {
        return 0.4 * details.getBasePay() + 0.3 * details.getHra()
    }
}
export default NewTaxAlgorithm;

