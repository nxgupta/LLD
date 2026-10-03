import { Movie } from "../models/Movie.js";
import type { IMovieRepository } from "../repositories/interfaces/IMovieRepository.js";

export class MovieService {
    constructor(private movieRepository: IMovieRepository) { }
    async addMovie(name: string, length: number, rating: number) {
        try {
            const movie = new Movie();
            movie.name = name;
            movie.length = length;
            movie.rating = rating;
            return this.movieRepository.save(movie);
        } catch (error) {
            throw new Error(`Unable to add movie '${name}'`, { cause: error })
        }
    }
}
