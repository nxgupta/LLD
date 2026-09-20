export interface UnlockButtonStrategy {
    canUnlock(roll: number): boolean;
}