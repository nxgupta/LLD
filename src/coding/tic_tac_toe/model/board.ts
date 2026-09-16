import { Cell } from "./cell";

export class Board {
    private board: Cell[][];
    private dimension: number;

    constructor(dimension: number) {
        this.dimension = dimension;
        this.board = [];
        for (let row = 0; row < dimension; row++) {
            let rowCells: Cell[] = [];
            for (let col = 0; col < dimension; col++) {
                rowCells.push(new Cell(row, col));
            }
            this.board.push(rowCells);
        }
    }

    public getBoard(): Cell[][] {
        return this.board;
    }
    public getCell(row: number, col: number): Cell {
        return this.board[row]![col]!;
    }
    public printBoard() {
        console.log("\n" + "─".repeat(this.dimension * 4 + 1));
        for (let i = 0; i < this.board.length; i++) {
            let str = "│ "
            for (const cell of this.board[i]!) {
                str += (cell.getSign()?.getValue() ?? " ") + " │ "
            }
            console.log(str);
            console.log("─".repeat(this.dimension * 4 + 1));
        }
        console.log("");
    }
    public getDimension(): number {
        return this.dimension;
    }
}
