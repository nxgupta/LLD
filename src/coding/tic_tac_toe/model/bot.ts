import { BotPlayingStrategyFactory } from "../factory/botPlayingStrategyFactory";
import { BotPlayingStrategy } from "../strategy/bot/botPlayingStrategy";
import type { BotDifficultyLevel } from "./enums/botDifficultyLevel";
import { PlayerType } from "./enums/playerType";
import { Player } from "./player";
import type { Board } from "./board";
import type { Move } from "./move";
import type { Sign } from "./sign";

export class Bot extends Player {
    private botPlayingStrategy: BotPlayingStrategy;
    private botDifficultyLevel: BotDifficultyLevel;
    constructor(sign: Sign, botDifficultyLevel: BotDifficultyLevel) {
        super(PlayerType.BOT, sign);
        this.botDifficultyLevel = botDifficultyLevel;
        this.botPlayingStrategy = new BotPlayingStrategyFactory().createBotPlayingStrategyForDifficultyLevel(this.botDifficultyLevel);
    }
    public makeMove(board: Board): Move {
        return this.botPlayingStrategy.makeNextMove(board, this);
    }
}
