import type { Cell } from "./cell";
import type { Player } from "./player";
import type { Sign } from "./sign";

export class Move {
    private sign: Sign;
    private cell: Cell;
    private player: Player;

    public setSign(sign: Sign): void {
        this.sign = sign;
    }

    public setCell(cell: Cell): void {
        this.cell = cell;
    }

    public setPlayer(player: Player): void {
        this.player = player;
    }

    public getCell(): Cell {
        return this.cell;
    }

    public getSign(): Sign | null {
        return this.sign;
    }

    public getPlayer(): Player {
        return this.player;
    }
}
