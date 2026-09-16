import { MultipleBotError } from "../exceptions/multipleBotError";
import type { GameWinningStrategy } from "../strategy/winning/gameWinningStrategy";
import { Board } from "./board";
import { GameStatus } from "./enums/gameStatus";
import { PlayerType } from "./enums/playerType";
import { Move } from "./move";
import type { Player } from "./player";

export class Game {
    private readonly board: Board;
    private players: Player[];
    private moves: Move[];
    private gameWinningStrategies: GameWinningStrategy[];
    private lastPlayerMovedIndex: number;
    private gameStatus: GameStatus;
    private winner: Player | null;

    private constructor(builder: Builder) {
        this.board = new Board(builder.getDimension());
        this.players = builder.getPlayers();
        this.gameWinningStrategies = builder.getGameWinningStrategies();
        this.moves = [];
        this.lastPlayerMovedIndex = -1;
        this.gameStatus = GameStatus.IN_PROGRESS;
        this.winner = null;
    }

    public static fromBuilder(builder: Builder): Game {
        let game = new Game(builder);
        return game;
    }

    public static getBuilder(): Builder {
        return new Builder();
    }

    public undo(): boolean {
        if (this.moves.length === 0)
            throw new Error("Error: Cannot perform undo")
        let lastMove: Move = this.moves.pop()!;
        lastMove.getCell().clearCell();
        if (this.moves.length === 0) {
            this.lastPlayerMovedIndex = -1;
        } else {
            this.lastPlayerMovedIndex = (this.lastPlayerMovedIndex - 1 + this.players.length) % this.players.length;
        }
        this.gameStatus = GameStatus.IN_PROGRESS;
        this.winner = null;
        return true;
    }

    public makeMove(): void {
        if (this.gameStatus !== GameStatus.IN_PROGRESS) throw new Error("Cannot make move: Game is not in progress.")
        this.lastPlayerMovedIndex = (this.lastPlayerMovedIndex + 1) % this.players.length;
        const currentPlayer = this.players[this.lastPlayerMovedIndex]!;
        const move = currentPlayer.makeMove(this.board);
        move.getCell().setSign(move.getSign()!);
        this.moves.push(move);

        for (const strategy of this.gameWinningStrategies) {
            if (strategy.checkIfWon(this.board, currentPlayer, move.getCell())) {
                this.gameStatus = GameStatus.ENDED;
                this.winner = currentPlayer;
                break;
            }
        }
        if (this.isBoardFull()) {
            this.gameStatus = GameStatus.DRAW;
        }
    }

    public getGameStatus(): GameStatus {
        return this.gameStatus;
    }
    public getGameWinner(): Player | null {
        return this.winner;
    }

    public getBoard() {
        return this.board;
    }

    private isBoardFull(): boolean {
        return this.board.getBoard().every(row => row.every(cell => !cell.isEmpty()));
    }
}

class Builder {
    private players: Player[] = [];
    private gameWinningStrategies: GameWinningStrategy[] = [];
    private dimension: number = 3;

    public addPlayer(player: Player): Builder {
        this.players.push(player)
        return this;
    }
    public addPlayers(players: Player[]): Builder {
        this.players.push(...players)
        return this;
    }
    public getPlayers(): Player[] {
        return this.players;
    }
    public setDimension(dimension: number): Builder {
        this.dimension = dimension;
        return this;
    }
    public getDimension(): number {
        return this.dimension;
    }
    public addGameWinningStrategy(strategy: GameWinningStrategy): Builder {
        this.gameWinningStrategies.push(strategy);
        return this;
    }
    public addGameWinningStrategies(strategies: GameWinningStrategy[]): Builder {
        this.gameWinningStrategies.push(...strategies);
        return this;
    }
    public getGameWinningStrategies(): GameWinningStrategy[] {
        return this.gameWinningStrategies;
    }
    private checkIfSingleBotMax(): boolean {
        let count = 0;
        this.players.forEach(player => {
            if (player.getPlayerType() === PlayerType.BOT) count++;
        })
        return count <= 1;
    }
    private validate(): void {
        if (this.dimension < 3) {
            throw new Error("Board dimension must be 3 or greater.");
        }

        if (this.players.length !== this.dimension - 1) {
            if (this.players.length < 2) {
                throw new Error("At least 2 players are required.");
            }
        }

        if (!this.checkIfSingleBotMax()) {
            throw new MultipleBotError("A game can have at most one bot.");
        }

        const seenSigns = new Set<string>();
        for (const player of this.players) {
            const signChar = player.getSignValue();
            if (seenSigns.has(signChar)) {
                throw new Error(`Duplicate player sign detected: ${signChar}`);
            }
            seenSigns.add(signChar);
        }
    }
    public build(): Game {
        if (!this.checkIfSingleBotMax()) throw new MultipleBotError();
        this.validate();
        return Game.fromBuilder(this);
    }
}