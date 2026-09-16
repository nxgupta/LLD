import type { Board } from "../../model/board";
import type { Cell } from "../../model/cell.js";
import type { Player } from "../../model/player";
import type { GameWinningStrategy } from "./gameWinningStrategy";

export class OrderNSquareGameWinningStrategy implements GameWinningStrategy {
    public checkIfWon(board: Board, player: Player, moveCell: Cell): boolean {
        let dimension = board.getDimension()
        for (let row = 0; row < dimension; row++) {
            let sign = board.getCell(row, 0).getSign()?.getValue();
            if (!sign) continue;
            let rowMatch = true;
            for (let col = 1; col < dimension; col++) {
                if (board.getCell(row, col).getSign()?.getValue() !== sign) {
                    rowMatch = false;
                    break;
                }
            }
            if (rowMatch) return true;
        }

        for (let col = 0; col < dimension; col++) {
            let sign = board.getCell(0, col).getSign()?.getValue();
            if (!sign) continue;
            let colMatch = true;
            for (let row = 1; row < dimension; row++) {
                if (board.getCell(row, col).getSign()?.getValue() !== sign) {
                    colMatch = false;
                    break;
                }
            }
            if (colMatch) return true;
        }

        const mainDiagFirstSign = board.getCell(0, 0).getSign()?.getValue();
        if (mainDiagFirstSign) {
            let diagMatch = true;
            for (let diag = 1; diag < dimension; diag++) {
                let sign = board.getCell(diag, diag).getSign()?.getValue();
                if (!sign || sign !== mainDiagFirstSign) {
                    diagMatch = false;
                    break;
                };
            }
            if (diagMatch) return true;
        }


        const antiDiagFirstSign = board.getCell(dimension - 1, 0).getSign()?.getValue();
        if (antiDiagFirstSign != null) {
            let diagMatch = true;
            for (let diag = dimension - 2; diag >= 0; diag--) {
                let sign = board.getCell(diag, dimension - 1 - diag).getSign()?.getValue();
                if (!sign || sign !== antiDiagFirstSign) {
                    diagMatch = false;
                    break;
                };
            }
            if (diagMatch) return true;
        }

        return false;
    }
}
