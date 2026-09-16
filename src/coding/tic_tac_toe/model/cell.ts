import type { Sign } from "./sign";


export class Cell {
    private sign: Sign | null = null;

    constructor(private row: number,
        private col: number) {
        this.row = row;
        this.col = col;
    }
    public isEmpty(): boolean {
        return this.sign == null;
    }
    public getSign(): Sign | null {
        return this.sign;
    }
    public setSign(sign: Sign): void {
        this.sign = sign;
    }
    public clearCell() {
        this.sign = null;
    }
    public getRow(): number {
        return this.row;
    }
    public getCol(): number {
        return this.col;
    }
}
