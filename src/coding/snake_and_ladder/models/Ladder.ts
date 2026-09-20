import { Jump } from "./Jump.js";

export class Ladder extends Jump {
    constructor(from: number, to: number) {
        if (to < from) throw new Error("Ladder's from should be smaller than to")
        super(to, from, "Climbed Ladder");
    }
}