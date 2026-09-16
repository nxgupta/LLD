import type { Board } from "../../model/board";
import type { Move } from "../../model/move";
import type { Player } from "../../model/player";

export interface BotPlayingStrategy {
    makeNextMove(board: Board, player: Player): Move;
}
