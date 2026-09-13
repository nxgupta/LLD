import type { NibType } from "./Enums/NibType.ts";
export class Tip {
    constructor(
        public readonly type: NibType,
        public readonly sizeMm: number
    ) { }
}