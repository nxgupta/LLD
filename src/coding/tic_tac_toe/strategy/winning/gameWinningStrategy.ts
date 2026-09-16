import type { Board } from "../../model/board";
import type { Cell } from "../../model/cell.js";
import type { Player } from "../../model/player";

export interface GameWinningStrategy {
    checkIfWon(board: Board, player: Player, moveCell: Cell): boolean
}
