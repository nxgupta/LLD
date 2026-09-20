export abstract class Jump {
    public readonly to: number;
    public readonly from: number;
    public readonly description: string;
    constructor(to: number, from: number, description: string) {
        this.to = to;
        this.from = from;
        this.description = description;
    }

    logAction() {
        console.log(this.description)
    }
}