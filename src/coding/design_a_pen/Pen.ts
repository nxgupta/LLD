import type { PenType } from "./Enums/PenType.ts"
import type { WritingMechaninsm } from "./Interfaces/writingMechanism.ts";

export abstract class Pen {
    public brand: string = "";
    public readonly type: PenType;
    public mechanism: WritingMechaninsm | null = null;
    public isCapOpen: boolean = false;

    constructor(type: PenType) {
        this.type = type;
    }
    public open(): void {
        this.isCapOpen = true;
    }

    public close(): void {
        this.isCapOpen = false;
    }

    public abstract write(): string;

}