import type { Movie } from "./Movie.js";

export class Actor extends BaseModel {
    private name: string;
    private movies: Movie[]
}