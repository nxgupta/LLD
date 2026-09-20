import type { UnlockButtonStrategy } from "./UnlockButtonStrategy.js";

export class InstantUnlockStrategy implements UnlockButtonStrategy {
    canUnlock(roll: number): boolean {
        return true;
    }
} 