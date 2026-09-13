import { PenType } from "./Enums/PenType.ts";
import { Pen } from "./Pen.ts";

export class Marker extends Pen {
    constructor() {
        super(PenType.MARKER);
    }
    public write(): string {
        if (!this.isCapOpen) return "Cannot write: Marker cap is on.";
        if (!this.mechanism || !this.mechanism.drain()) return "Marker is dried out!";
        return `Drawing bold line with ${this.mechanism.getColor()} ${this.mechanism.getTip().sizeMm}mm felt tip.`;
    }
}