import type { Board } from "./board";
import type { PlayerType } from "./enums/playerType";
import type { Move } from "./move";
import type { Sign } from "./sign";

export abstract class Player {
    private name: string;
    private sign: Sign;
    private playerType: PlayerType

    constructor(playerType: PlayerType, sign: Sign) {
        this.playerType = playerType;
        this.sign = sign;
    }

    public getSign(): Sign {
        return this.sign;
    }

    // Shortcut method
    public getSignValue(): string {
        return this.sign.getValue();
    }

    public getPlayerType(): PlayerType {
        return this.playerType;
    }

    public abstract makeMove(board: Board): Move;
}
