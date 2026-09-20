import { ButtonStatus } from "./enums/ButtonStatus.enums.js";

export class Button {
    constructor(
        public readonly id: string,
        public position: number = 1,
        public status: ButtonStatus = ButtonStatus.LOCKED
    ) {

    }
    public unlock(): void {
        this.status = ButtonStatus.IN_GAME;
        this.position = 1;
    }

    public markCompleted(): void {
        this.status = ButtonStatus.COMPLETED;
    }
}