import SalaryDetails from "../../simple_factory/tax/SalaryDetails.js";
import { NewRegimeCalculator } from "./TaxCalculatorCreator.js";

let newTax = new NewRegimeCalculator().calculate(new SalaryDetails(10000, 10000, 10000));
console.log(newTax)