import { ResponseDto } from "./ResponseDto.js";
import type { Movie } from "../models/Movie.js";

export class AddMovieResponseDto extends ResponseDto {
    public movie?: Movie;
}
