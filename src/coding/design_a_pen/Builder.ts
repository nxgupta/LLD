import type { WritingMechaninsm } from "./Interfaces/writingMechanism";
import type { Pen } from "./Pen";

export class PenBuilder<P extends Pen> {
    private pen: P;
    constructor(penInstance: P) {
        this.pen = penInstance;
    }
    public setBrand(brand: string): this {
        this.pen.brand = brand;
        return this;
    }
    public setMechanism(mechanism: WritingMechaninsm): this {
        this.pen.mechanism = mechanism;
        return this;
    }
    public build(): P {
        return this.pen;
    }
}