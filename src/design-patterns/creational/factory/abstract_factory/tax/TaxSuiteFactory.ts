import NewTaxAlgorithm from "../../simple_factory/tax/algorithm/NewTaxAlgorithm.js";
import OldTaxAlgorithm from "../../simple_factory/tax/algorithm/OldTaxAlgorithm.js";
import type { TaxAlgorithm } from "../../simple_factory/tax/algorithm/TaxAlgorithm.js";
import type { DeductionPolicy } from "../../simple_factory/tax/deductionPolicy/DeductionPolicy.js";
import NewDeductionPolicy from "../../simple_factory/tax/deductionPolicy/NewDeductionPolicy.js";
import OldDeductionPolicy from "../../simple_factory/tax/deductionPolicy/OldDeductionPolicy.js";

abstract class TaxSuiteFactory{
    abstract createAlgorithm(): TaxAlgorithm;
    abstract createDeductionPolicy(): DeductionPolicy;
}

export class OldRegimeFactory extends TaxSuiteFactory{
    createAlgorithm(): TaxAlgorithm {
        return new OldTaxAlgorithm();
    }
    createDeductionPolicy(): DeductionPolicy {
        return new OldDeductionPolicy();
    }
}

export class NewRegimeFactory extends TaxSuiteFactory{
    createAlgorithm(): TaxAlgorithm {
        return new NewTaxAlgorithm();
    }
    createDeductionPolicy(): DeductionPolicy {
        return new NewDeductionPolicy();
    }
}