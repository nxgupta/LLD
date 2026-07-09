import SalaryDetails from "./SalaryDetails.js";
import TaxCalculator from "./TaxCalculator.js";
import TaxRegime from "./TaxRegime.js";

let mySalary = new SalaryDetails(1250000, 50000, 120000)
let tax = TaxCalculator.calculateTax(TaxRegime.OLD, mySalary);
console.log(tax);