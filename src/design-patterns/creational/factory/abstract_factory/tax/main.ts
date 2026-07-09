import SalaryDetails from "../../simple_factory/tax/SalaryDetails.js";
import { OldRegimeFactory } from "./TaxSuiteFactory.js";


let oldRegimeSuite = new OldRegimeFactory();
let salary = new SalaryDetails(1000, 1000, 1000);
const tax = oldRegimeSuite.createAlgorithm().calculateTax(salary);

const totalDeduction = oldRegimeSuite.createDeductionPolicy().calculateDeduction(salary)

console.log(tax, totalDeduction);