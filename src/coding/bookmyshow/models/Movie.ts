import type { Actor } from "./Actor.js";
import type { Language } from "./enums/Language.enum.js";
import type { MovieFeature } from "./enums/MovieFeature.enum.js";

export class Movie extends BaseModel {
    private name: string;
    private languages: Language[];
    private actors: Actor[];
    private length: number;
    private rating: number;
    private movieFeatures: MovieFeature[];

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getCasts(): Actor[] {
        return this.actors;
    }

    public setCasts(actors: Actor[]): void {
        this.actors = actors;
    }
}