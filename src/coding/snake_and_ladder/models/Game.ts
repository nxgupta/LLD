import type { HandleMoveStrategy } from "../strategies/HandleMoveStrategy.js";
import type { UnlockButtonStrategy } from "../strategies/UnlockButtonStrategy.js";
import type { Board } from "./Board.js";
import type { Dice } from "./Dice.js";
import type { GameStatus } from "./enums/GameStatus.enums.js";
import type { Player } from "./Player.js";

export class Game {
    private board: Board;
    private dice: Dice;
    private winner: Player | null = null;
    private gameStatus: GameStatus;
    private unlockButtonStrategy: UnlockButtonStrategy;
    private handleMoveStrategy: HandleMoveStrategy;
    private queue: Player[];
    constructor(
        board: Board, dice: Dice, players: Player[], moveStrategy: HandleMoveStrategy, unlockStrategy: UnlockButtonStrategy
    ) {
        this.board = board;
        this.dice = dice;
        this.queue = players;
        this.unlockButtonStrategy = unlockStrategy;
        this.handleMoveStrategy = moveStrategy;
    }

    public play(): void {
        let turn = 1;
        console.log("=== GAME STARTED ===");
        while (!this.winner) {
            const currentPlayer = this.queue.shift();
            const roll = this.dice.roll();


            this.handleMoveStrategy.execute(currentPlayer!, roll, this.board, this.unlockButtonStrategy);

            if (currentPlayer?.hasWon()) {
                this.winner = currentPlayer;
                console.log(`\n🎉 ${currentPlayer.name} WON THE GAME at turn ${turn}! 🎉`);
                break;
            }

            this.queue.push(currentPlayer!);
            turn++;
        }
    }
}