import type { WritingMechaninsm } from "./Interfaces/writingMechanism.ts";
import type { Tip } from "./Tip.ts";

export class InternalReservoir implements WritingMechaninsm {
    constructor(
        public color: string,
        public tip: Tip,
        public inkLevel: number = 100
    ) { }

    public getColor(): string {
        return this.color;
    }

    public getTip(): Tip {
        return this.tip;
    }

    public drain(): boolean {
        if (this.inkLevel > 0) {
            this.inkLevel -= 2; // Markers consume ink faster
            return true;
        }
        return false;
    }
}