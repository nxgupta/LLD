export class Sign {
    constructor(private readonly value: string) {
        if (!value || value.length !== 1) {
            throw new Error("Sign must be a single character.");
        }
    }
    public getValue(): string {
        return this.value;
    }
}