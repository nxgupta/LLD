import * as fs from "fs";
import { Board } from "./board";
import { PlayerType } from "./enums/playerType";
import { Move } from "./move";
import { Player } from "./player";
import { Sign } from "./sign";
import { User } from "./user";

function prompt(question: string): string {
    process.stdout.write(question + ": ");
    const buffer = Buffer.alloc(1024);
    const bytesRead = fs.readSync(0, buffer, 0, 1024, null);
    return buffer.toString("utf8", 0, bytesRead).trim();
}

export class HumanPlayer extends Player {

    constructor(sign: Sign) {
        super(PlayerType.HUMAN, sign)
    }
    public makeMove(board: Board): Move {
        const dimension = board.getDimension();
        while (true) {
            const rowStr = prompt("Enter the row where you want to make Move");
            const colStr = prompt("Enter the col where you want to make Move");
            if (!rowStr || !colStr) {
                console.log("Move input required");
                continue;
            }

            const row = parseInt(rowStr, 10) - 1;
            const col = parseInt(colStr, 10) - 1;

            if (isNaN(row) || isNaN(col) || row < 0 || row >= dimension || col < 0 || col >= dimension) {
                console.log(`Invalid position! Row and Col must be between 1 and ${dimension}. Please try again.\n`);
                continue;
            }

            let targetCell = board.getCell(row, col);
            if (!targetCell.isEmpty()) {
                console.log(`Cell (${row + 1}, ${col + 1}) is already occupied! Please choose an empty cell.\n`);
                continue;
            }
            let move = new Move();
            move.setCell(targetCell)
            move.setPlayer(this);
            move.setSign(this.getSign())
            return move;
        }
    }
}
