import type { Theatre } from "./Theatre.js";

export class City extends BaseModel {
    private name: string;
    private theatres: Theatre[];

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getTheatres(): Theatre[] {
        return this.theatres;
    }

    public setTheatres(theatres: Theatre[]): void {
        this.theatres = theatres;
    }
}