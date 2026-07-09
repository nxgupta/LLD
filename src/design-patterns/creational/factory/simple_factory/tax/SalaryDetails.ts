class SalaryDetails{
    private basePay: number;
    private hra: number; 
    private lta: number;

    constructor(basePay: number, hra: number, lta: number) {
        this.basePay = basePay;
        this.hra = hra;
        this.lta = lta;
    }

    getBasePay(): number {
        return this.basePay;
    }

    getHra(): number {
        return this.hra;
    }

    getLta(): number {
        return this.lta;
    }
}

export default SalaryDetails;