import { Board } from "../models/Board.js";
import { Button } from "../models/Button.js";
import { Dice } from "../models/Dice.js";
import { Game } from "../models/Game.js";
import { Ladder } from "../models/Ladder.js";
import { Player } from "../models/Player.js";
import { Snake } from "../models/Snake.js";
import { HandleMoveStrategy } from "../strategies/HandleMoveStrategy.js";
import { OneOrSixUnlockStrategy } from "../strategies/OneOrSixUnlockStrategy.js";


export class GameController {
    public startGame() {
        const jumps = [new Snake(47, 99), new Snake(45, 62), new Snake(50, 77), new Ladder(27, 45), new Ladder(21, 22)]
        const board = new Board(100, jumps)
        const dice = new Dice(6);
        const player1 = new Player(1, 'neer', new Button("neer-btn"))
        const player2 = new Player(2, 'nitin', new Button("nitin-btn"));

        const unlockStrategy = new OneOrSixUnlockStrategy();
        const moveStrategy = new HandleMoveStrategy()
        const game = new Game(board, dice, [player1, player2], moveStrategy, unlockStrategy);
        game.play()
    }
}