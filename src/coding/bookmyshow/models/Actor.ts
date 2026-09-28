import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseModel } from "./BaseModel.js";
import { Movie } from "./Movie.js";

@Entity()
export class Actor extends BaseModel {

    @Column({ name: "name", type: "varchar", length: 120 })
    private _name: string;

    @ManyToMany(() => Movie, (movie) => movie.actors)
    @JoinTable({ name: "movie_actors" })
    private _movies: Movie[]

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get movies(): Movie[] {
        return this._movies;
    }
    public set movies(value: Movie[]) {
        this._movies = value;
    }
}