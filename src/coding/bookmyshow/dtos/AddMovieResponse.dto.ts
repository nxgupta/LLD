import type { Movie } from "../models/Movie.js";

export class AddMovieResponseDto {
    public status: "SUCCESS" | "FAILURE";
    public movie?: Movie;
    public errorMessage?: string;
}
