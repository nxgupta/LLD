import type { WritingMechaninsm } from "./Interfaces/writingMechanism";
import type { Tip } from "./Tip";

export class Refill implements WritingMechaninsm {
    constructor(public color: string, public tip: Tip, public inkLevel: number = 100) {

    }
    getColor(): string {
        return this.color;
    }
    getTip(): Tip {
        return this.tip;
    }
    drain(): boolean {
        if (this.inkLevel) {
            this.inkLevel -= 1;
            return true;
        }
        return false;
    }
}