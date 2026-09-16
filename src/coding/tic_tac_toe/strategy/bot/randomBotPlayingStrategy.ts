import type { Board } from "../../model/board";
import { Move } from "../../model/move";
import type { Player } from "../../model/player";
import type { BotPlayingStrategy } from "./botPlayingStrategy";

export class RandomBotPlayingStrategy implements BotPlayingStrategy {
    makeNextMove(board: Board, player: Player): Move {
        const emptyCells = [];

        for (const cells of board.getBoard()) {
            for (const cell of cells) {
                if (cell.isEmpty()) {
                    emptyCells.push(cell);
                }
            }
        }

        if (emptyCells.length > 0) {
            const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]!;
            let move = new Move();
            move.setCell(randomCell)
            move.setPlayer(player)
            move.setSign(player.getSign())
            return move;
        }

        throw new Error("No empty cells available");
    }
}
