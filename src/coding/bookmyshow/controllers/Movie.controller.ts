import type { promises } from "node:dns";
import type { MovieService } from "../services/Movie.service.js";
import { AddMovieResponseDto } from "../dtos/AddMovieResponse.dto.js";

export class MovieController {
    constructor(private movieService: MovieService) { }
    async addMovie(name: string, length: number, rating: number): Promise<AddMovieResponseDto> {
        const response = new AddMovieResponseDto();
        try {
            const movie = await this.movieService.addMovie(name, length, rating);
            response.movie = movie;
            response.status = "SUCCESS";
        } catch (error) {
            response.status = "FAILURE";
            response.errorMessage = error instanceof Error ? error.message : String(error);
        }
        return response;
    }
}
