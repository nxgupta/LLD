import { Jump } from "./Jump.js";

export class Snake extends Jump {
    constructor(to: number, from: number) {
        if (to > from) throw new Error("Snake's to should be smaller than from")
        super(to, from, "Bit by Snake");
    }
}