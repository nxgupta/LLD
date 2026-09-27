export class GenerateBillResponse {
    private amount: number;

    getAmount(): number {
        return this.amount;
    }

    setAmount(amount: number): void {
        this.amount = amount;
    }
}