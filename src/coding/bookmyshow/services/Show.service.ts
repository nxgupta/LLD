import { Language } from "../models/enums/Language.enum.js";
import { Show } from "../models/Show.js";
import { IAuditoriumRepository } from "../repositories/interfaces/IAudiRepository.js";
import { IMovieRepository } from "../repositories/interfaces/IMovieRepository.js";
import { IShowRepository } from "../repositories/interfaces/IShowRepository.js";

export class ShowService {
    constructor(
        private showRepository: IShowRepository,
        private movieRepository: IMovieRepository,
        private auditoriumRepository: IAuditoriumRepository
    ) { }

    async createShow(movieId: number, auditoriumId: number, startTime: Date, endTime: Date, language: Language = Language.ENGLISH): Promise<Show> {
        try {
            let movie = await this.movieRepository.findById(movieId);
            if (!movie) {
                throw new Error(`Movie not found with id: ${movieId}`);
            }

            const auditorium = await this.auditoriumRepository.findById(auditoriumId);
            if (!auditorium) {
                throw new Error(`Auditorium not found with id: ${auditoriumId}`);
            }

            const show = new Show();
            show.auditorium = auditorium;
            show.movie = movie;
            show.startTime = startTime;
            show.endTime = endTime;
            show.language = language;
            show.showFeatures = [];
            return await this.showRepository.save(show);
        } catch (error) {
            throw new Error("Unable to create show", { cause: error });
        }
    }
}