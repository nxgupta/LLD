import { BotDifficultyLevel } from "../model/enums/botDifficultyLevel";
import type { BotPlayingStrategy } from "../strategy/bot/botPlayingStrategy";
import { RandomBotPlayingStrategy } from "../strategy/bot/randomBotPlayingStrategy";

export class BotPlayingStrategyFactory {
    public createBotPlayingStrategyForDifficultyLevel(difficultyLevel: BotDifficultyLevel): BotPlayingStrategy {
        console.log(difficultyLevel)
        switch (difficultyLevel) {
            case BotDifficultyLevel.EASY:
            case BotDifficultyLevel.MEDIUM:
            case BotDifficultyLevel.HARD:
                return new RandomBotPlayingStrategy();
            default:
                throw new Error("Unknown difficulty level")
        }
    }
}