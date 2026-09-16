import { Game } from "../model/game";
import { Player } from "../model/player";
import { GameWinningStrategy } from "../strategy/winning/gameWinningStrategy";

export class GameController {
    public createGame(dimension: number, players: Player[], strategies: GameWinningStrategy[]): Game {
        return Game.getBuilder().setDimension(dimension).addPlayers(players).addGameWinningStrategies(strategies).build();
    }

    public makeMove(game: Game): void {
        game.makeMove();
    }

    public undo(game: Game) {
        game.undo()
    }

    public getWinner(game: Game): Player | null {
        return game.getGameWinner()
    }

    public getGameStatus(game: Game) {
        return game.getGameStatus()
    }

    public display(game: Game) {
        return game.getBoard().printBoard()
    }
}
