import type { NibType } from "./Enums/NibType";
export class Tip {
    constructor(
        public readonly type: NibType,
        public readonly sizeMm: number
    ) { }
}