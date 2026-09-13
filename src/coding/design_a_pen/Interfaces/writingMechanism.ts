import type { Tip } from "../Tip.ts";

export interface WritingMechaninsm {
    inkLevel: number;
    getColor(): string;
    drain(): boolean;
    getTip(): Tip;
}