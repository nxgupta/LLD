import type { Auditorium } from "./Auditorium.js";
import type { Language } from "./enums/Language.enum.js";
import type { ShowFeature } from "./enums/ShowFeature.enum.js";
import type { Movie } from "./Movie.js";
import type { ShowSeat } from "./ShowSeat.js";
import type { ShowSeatType } from "./ShowSeatType.js";

export class Show extends BaseModel {
    private movie: Movie;
    private startTime: Date;
    private endTime: Date;
    private auditorium: Auditorium;
    private showSeats: ShowSeat[];
    private showSeatTypes: ShowSeatType[];
    private language: Language;
    private showFeatures: ShowFeature[];

    getMovie(): Movie {
        return this.movie;
    }

    setMovie(movie: Movie): void {
        this.movie = movie;
    }

    getStartTime(): Date {
        return this.startTime;
    }

    setStartTime(startTime: Date): void {
        this.startTime = startTime;
    }

    getEndTime(): Date {
        return this.endTime;
    }

    setEndTime(endTime: Date): void {
        this.endTime = endTime;
    }

    getAuditorium(): Auditorium {
        return this.auditorium;
    }

    setAuditorium(auditorium: Auditorium): void {
        this.auditorium = auditorium;
    }

    getShowSeats(): ShowSeat[] {
        return this.showSeats;
    }

    setShowSeats(showSeats: ShowSeat[]): void {
        this.showSeats = showSeats;
    }

    getShowSeatTypes(): ShowSeatType[] {
        return this.showSeatTypes;
    }

    setShowSeatTypes(showSeatTypes: ShowSeatType[]): void {
        this.showSeatTypes = showSeatTypes;
    }

    getLanguage(): Language {
        return this.language;
    }

    setLanguage(language: Language): void {
        this.language = language;
    }

    getShowFeatures(): ShowFeature[] {
        return this.showFeatures;
    }

    setShowFeatures(showFeatures: ShowFeature[]): void {
        this.showFeatures = showFeatures;
    }

}