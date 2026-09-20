export class Dice {
    constructor(private readonly sides: number = 6) {

    }
    public roll(): number {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}