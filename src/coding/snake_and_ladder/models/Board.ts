import type { Jump } from "./Jump.js";

export class Board {
    private jumps: Map<number, Jump> = new Map();
    private readonly size: number;
    constructor(size: number, jumpsList: Jump[]) {
        this.size = size
        for (const jump of jumpsList) {
            this.jumps.set(jump.from, jump);
        }
    }
    public getDimension(): number {
        return this.size;
    }

    public resolveDestination(targetPos: number): number {

        const jump = this.jumps.get(targetPos);
        if (jump) {
            if (targetPos > jump.to) {
                console.log(`Bitten by snake`)
            }
            else console.log(`Player takers the ladder`)
            return jump.to;
        }
        return targetPos;
    }
}