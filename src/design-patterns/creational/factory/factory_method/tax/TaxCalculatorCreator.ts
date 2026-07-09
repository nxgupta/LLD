import NewTaxAlgorithm from "../../simple_factory/tax/algorithm/NewTaxAlgorithm.js";
import OldTaxAlgorithm from "../../simple_factory/tax/algorithm/OldTaxAlgorithm.js";
import type { TaxAlgorithm } from "../../simple_factory/tax/algorithm/TaxAlgorithm.js";
import SalaryDetails from "../../simple_factory/tax/SalaryDetails.js";

abstract class TaxCalculatorCreator {
    abstract createAlgorithm(): TaxAlgorithm;
    calculate(details: SalaryDetails){
        return this.createAlgorithm().calculateTax(details);
    }
}

export class OldRegimeCalculator extends TaxCalculatorCreator{
    createAlgorithm(): TaxAlgorithm {
        return new OldTaxAlgorithm();
    }
}

export class NewRegimeCalculator extends TaxCalculatorCreator{
    createAlgorithm(): TaxAlgorithm {
        return new NewTaxAlgorithm();
    }
}



