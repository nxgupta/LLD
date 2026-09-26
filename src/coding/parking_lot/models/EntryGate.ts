import type { DisplayBoard } from "./DisplayBoard.js";
import { Gate } from "./Gate.js";

export class EntryGate extends Gate {
    private displayBoard: DisplayBoard;

    public EntryGate(displayBoard: DisplayBoard) {
        this.displayBoard = displayBoard;
    }
}
