import type { Movie } from "../../models/Movie.js";

export interface IMovieRepository {
    save(movie: Movie): Promise<Movie>;
    findById(movieId: number): Promise<Movie | null>;
}
