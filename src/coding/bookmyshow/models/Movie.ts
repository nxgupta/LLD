import { Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { Actor } from "./Actor.js";
import { Language } from "./enums/Language.enum.js";
import { MovieFeature } from "./enums/MovieFeature.enum.js";
import { BaseModel } from "./BaseModel.js";
import { Show } from "./Show.js";

@Entity()
export class Movie extends BaseModel {
    @Column({ name: "name" })
    private _name: string;

    @Column({ name: "languages", type: "enum", enum: Language, array: true, default: [] })
    private _languages: Language[];

    @ManyToMany(() => Actor, (actor) => actor.movies)
    private _actors: Actor[];

    @Column({ name: "length", type: "int" })
    private _length: number;
    @Column({ name: "rating", type: "int" })
    private _rating: number;

    @Column({ name: "movie_features", type: "enum", enum: MovieFeature, array: true, default: [] })
    private _movieFeatures: MovieFeature[];

    @OneToMany(() => Show, (show) => show.movie)
    private _shows: Show[];

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get languages(): Language[] {
        return this._languages;
    }
    public set languages(value: Language[]) {
        this._languages = value;
    }

    public get actors(): Actor[] {
        return this._actors;
    }
    public set actors(value: Actor[]) {
        this._actors = value;
    }

    public get casts(): Actor[] {
        return this._actors;
    }
    public set casts(value: Actor[]) {
        this._actors = value;
    }

    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    public get rating(): number {
        return this._rating;
    }
    public set rating(value: number) {
        this._rating = value;
    }

    public get movieFeatures(): MovieFeature[] {
        return this._movieFeatures;
    }
    public set movieFeatures(value: MovieFeature[]) {
        this._movieFeatures = value;
    }
    public get shows(): Show[] {
        return this._shows;
    }
    public set shows(value: Show[]) {
        this._shows = value;
    }
}