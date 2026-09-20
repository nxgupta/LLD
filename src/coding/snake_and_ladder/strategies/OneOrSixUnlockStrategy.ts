import type { UnlockButtonStrategy } from "./UnlockButtonStrategy.js";

export class OneOrSixUnlockStrategy implements UnlockButtonStrategy {
    canUnlock(roll: number): boolean {
        return roll === 1 || roll === 6;
    }
}