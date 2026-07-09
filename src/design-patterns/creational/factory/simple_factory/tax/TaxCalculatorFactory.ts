import NewTaxAlgorithm from "./algorithm/NewTaxAlgorithm.js";
import OldTaxAlgorithm from "./algorithm/OldTaxAlgorithm.js";
import type {TaxAlgorithm } from "./algorithm/TaxAlgorithm.js";
import TaxRegime from "./TaxRegime.js";

class TaxCalculatorFactory{
    public static getTaxAlgorithm(taxRegime: TaxRegime):TaxAlgorithm {
        switch (taxRegime) {
            case TaxRegime.NEW:
                return new NewTaxAlgorithm();
            case TaxRegime.OLD:
                return new OldTaxAlgorithm();
            default:
                throw new Error(`Unsupported tax regime: ${taxRegime}`);
        }
    }
}

export default TaxCalculatorFactory;