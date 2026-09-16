import type { Tip } from "../Tip";

export interface WritingMechaninsm {
    inkLevel: number;
    getColor(): string;
    drain(): boolean;
    getTip(): Tip;
}