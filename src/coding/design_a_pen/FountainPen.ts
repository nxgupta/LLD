import { PenType } from "./Enums/PenType.ts";
import { Pen } from "./Pen.ts";

export class FountainPen extends Pen {
    constructor() {
        super(PenType.FOUNTAIN)
    }
    public write(): string {
        if (!this.isCapOpen) return "Cannot write: Nib is covered.";
        if (!this.mechanism || !this.mechanism.drain()) return "Fountain pen out of ink!";
        return `Writing smoothly with ${this.mechanism.getColor()} fountain nib (${this.mechanism.getTip().sizeMm}mm).`;
    }

}