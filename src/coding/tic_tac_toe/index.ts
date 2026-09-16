import { GameController } from "./controller/gameController.js";
import { Bot } from "./model/bot.js";
import { BotDifficultyLevel } from "./model/enums/botDifficultyLevel.js";
import { GameStatus } from "./model/enums/gameStatus.js";
import type { Game } from "./model/game.js";
import { HumanPlayer } from "./model/humanPlayer.js";
import type { Player } from "./model/player.js";
import { Sign } from "./model/sign.js";
import type { GameWinningStrategy } from "./strategy/winning/gameWinningStrategy.js";
import { OrderOneGameWinningStrategy } from "./strategy/winning/orderOneGameWinningStrategy.js";

function startGame() {
    const dimension = 3;
    const p1: Player = new HumanPlayer(new Sign("X"));
    const p2: Player = new Bot(new Sign("O"), BotDifficultyLevel.EASY);
    const strategy: GameWinningStrategy = new OrderOneGameWinningStrategy();

    let gameController = new GameController()
    let game: Game = gameController.createGame(dimension, [p1, p2], [strategy]);
    while (gameController.getGameStatus(game) === GameStatus.IN_PROGRESS) {
        gameController.display(game);
        gameController.makeMove(game);
    }

    // Display final state
    gameController.display(game);

    if (gameController.getGameStatus(game) === GameStatus.ENDED) {
        console.log(`Game won by: ${game.getGameWinner()?.getSignValue()}`);
    } else if (gameController.getGameStatus(game) === GameStatus.DRAW) {
        console.log("Game ended in a DRAW!");
    }
}

startGame();