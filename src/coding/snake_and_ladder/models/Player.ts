import type { Button } from "./Button.js";
import { ButtonStatus } from "./enums/ButtonStatus.enums.js";

export class Player {
    constructor(public readonly id: number,
        public readonly name: string,
        public readonly button: Button) {

    }
    public hasWon(): boolean {
        return this.button.status === ButtonStatus.COMPLETED;
    }
}