import { Movie } from "../models/Movie.js";
import type { IMovieRepository } from "./interfaces/IMovieRepository.js";
import { AppDataSource } from "../data-source.js";

export class MovieRepository implements IMovieRepository {
    private movieRepo = AppDataSource.getRepository(Movie);
    async save(movie: Movie): Promise<Movie> {
        try {
            return this.movieRepo.save(movie);
        } catch (error) {
            throw new Error("Failed to save movie", { cause: error })
        }
    }
    async findById(movieId: number): Promise<Movie | null> {
        try {
            return await this.movieRepo.findOne({ where: { id: movieId } });
        } catch (error) {
            throw new Error("Failed to fetch movie", { cause: error });
        }
    }
}
