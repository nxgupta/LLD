import { PenType } from "./Enums/PenType";
import { Pen } from "./Pen";


export class BallPen extends Pen {
    constructor() {
        super(PenType.BALL);
    }

    public write(): string {
        if (!this.isCapOpen) return "Cannot write: Pen is retracted/capped.";
        if (!this.mechanism || !this.mechanism.drain()) return "Pen is out of ink!";
        return `Writing with ${this.mechanism.getColor()} ballpoint tip (${this.mechanism.getTip().sizeMm}mm).`;
    }
}