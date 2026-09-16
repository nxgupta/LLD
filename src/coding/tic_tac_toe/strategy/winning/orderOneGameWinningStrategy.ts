import type { Board } from "../../model/board";
import type { Cell } from "../../model/cell.js";
import type { Player } from "../../model/player";
import type { GameWinningStrategy } from "./gameWinningStrategy";

export class OrderOneGameWinningStrategy implements GameWinningStrategy {
    private rowCharCounts: Map<string, number>[];
    private colCharCounts: Map<string, number>[];
    private mainDiagCounts: Map<string, number> = new Map();
    private antiDiagCounts: Map<string, number> = new Map();
    private initialize(board: Board): void {
        this.rowCharCounts = new Array();
        this.colCharCounts = new Array();
        for (let i = 0; i < board.getDimension(); i++) {
            this.rowCharCounts.push(new Map());
            this.colCharCounts.push(new Map());
        }
    }
    public checkIfWon(board: Board, player: Player, moveCell: Cell): boolean {

        if (!this.rowCharCounts) {
            console.log("initialize board")
            this.initialize(board);
        }
        let sign = moveCell.getSign()!.getValue()
        let row = moveCell.getRow()
        let col = moveCell.getCol()
        let dimension = board.getDimension();

        if (!this.rowCharCounts[row]?.has(sign)) {
            this.rowCharCounts[row]!.set(sign, 0);
        }
        if (!this.colCharCounts[col]?.has(sign)) {
            this.colCharCounts[col]!.set(sign, 0)
        }
        if (row === col) this.mainDiagCounts.set(sign, (this.mainDiagCounts.get(sign) || 0) + 1);
        if (row + col === dimension - 1) this.antiDiagCounts.set(sign, (this.antiDiagCounts.get(sign) || 0) + 1);
        const currentRow = this.rowCharCounts[row]!.get(sign) || 0;
        this.rowCharCounts[row]!.set(sign, currentRow + 1);
        const currentCol = this.colCharCounts[col]!.get(sign) || 0;
        this.colCharCounts[col]!.set(sign, currentCol + 1);

        if (this.rowCharCounts[row]!.get(sign) === dimension) {
            return true;
        }
        if (this.colCharCounts[col]!.get(sign) === dimension) {
            return true;
        }
        if (this.mainDiagCounts.get(sign) === dimension) {
            return true;
        }
        if (this.antiDiagCounts.get(sign) === dimension) {
            return true;
        }
        return false
    }
}
