import SalaryDetails from "./SalaryDetails.js";
import TaxCalculatorFactory from "./TaxCalculatorFactory.js";
import TaxRegime from "./TaxRegime.js";

class TaxCalculator{
    public static calculateTax(taxRegime: TaxRegime, details: SalaryDetails): number {
        return TaxCalculatorFactory.getTaxAlgorithm(taxRegime).calculateTax(details);
    }
}
export default TaxCalculator;