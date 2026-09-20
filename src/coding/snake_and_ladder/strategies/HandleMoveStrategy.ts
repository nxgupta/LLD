import { Board } from "../models/Board.js";
import { ButtonStatus } from "../models/enums/ButtonStatus.enums.js";
import { Player } from "../models/Player.js";
import { UnlockButtonStrategy } from "./UnlockButtonStrategy.js";

export class HandleMoveStrategy {
    constructor(private readonly requireExactLanding: boolean = true) {
        this.requireExactLanding = requireExactLanding;
    }
    public execute(player: Player, roll: number, board: Board, unlockButtonStrategy: UnlockButtonStrategy) {
        let btn = player.button;
        if (btn.status === ButtonStatus.LOCKED) {
            if (unlockButtonStrategy.canUnlock(roll)) {
                btn.unlock();
                console.log(`${player.name}  -> Unlocked button! Entered board at cell ${btn.position}. for ${player.name}`);
            }
            else console.log(`${player.name}  -> Rolled ${roll}. Needs 1 or 6 to unlock. Remains LOCKED.`);
            return;
        }
        const targetPos = btn.position + roll;
        if (this.requireExactLanding && targetPos > board.getDimension()) {
            console.log(`${player.name}  -> Cannot make a move as targetPos is greater than board size`)
            return;
        }

        const dest = Math.min(targetPos, board.getDimension());
        const finalPos = board.resolveDestination(dest);
        console.log(`${player.name}  -> Moved from ${targetPos} to ${finalPos}.`);
        btn.position = finalPos;

        if (btn.position >= board.getDimension()) {
            btn.markCompleted();
            console.log(`${player.name}  -> Reached the final cell!`)
        }
    }
}
