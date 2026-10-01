import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import type { Relation } from "typeorm"
import { Auditorium } from "./Auditorium.js";
import { Language } from "./enums/Language.enum.js";
import { ShowFeature } from "./enums/ShowFeature.enum.js";
import { Movie } from "./Movie.js";
import { ShowSeat } from "./ShowSeat.js";
import { ShowSeatType } from "./ShowSeatType.js";
import { BaseModel } from "./BaseModel.js";
import { Theatre } from "./Theatre.js";

@Entity()
export class Show extends BaseModel {
    @ManyToOne(() => Movie, (movie) => movie.shows)
    private _movie: Movie;

    @Column({ name: "start_time", type: "timestamp with time zone" })
    private _startTime: Date;

    @Column({ name: "end_time", type: "timestamp with time zone" })
    private _endTime: Date;

    @ManyToOne(() => Auditorium, (auditorium) => auditorium.shows, { nullable: false })
    private _auditorium: Auditorium;

    @ManyToOne(() => Theatre, (theatre) => theatre.upcomingShows, { nullable: true })
    private _theatre: Theatre;


    @OneToMany(() => ShowSeat, (showSeat) => showSeat.show, { cascade: true })
    private _showSeats: Relation<ShowSeat>[];

    @OneToMany(() => ShowSeatType, (showSeatType) => showSeatType.show, { cascade: true })
    private _showSeatTypes: ShowSeatType[];

    @Column({
        name: "language",
        type: "enum",
        enum: Language,
        default: Language.ENGLISH,
    })
    private _language: Language;

    @Column({
        name: "show_features",
        type: "enum",
        enum: ShowFeature,
        array: true,
        default: [],
    })
    private _showFeatures: ShowFeature[];

    public get movie(): Movie {
        return this._movie;
    }
    public set movie(value: Movie) {
        this._movie = value;
    }

    public get auditorium(): Auditorium {
        return this._auditorium;
    }
    public set auditorium(value: Auditorium) {
        this._auditorium = value;
    }

    public get theatre(): Theatre {
        return this._theatre;
    }
    public set theatre(value: Theatre) {
        this._theatre = value;
    }

    public get startTime(): Date {
        return this._startTime;
    }
    public set startTime(value: Date) {
        this._startTime = value;
    }

    public get endTime(): Date {
        return this._endTime;
    }
    public set endTime(value: Date) {
        this._endTime = value;
    }

    public get language(): Language {
        return this._language;
    }
    public set language(value: Language) {
        this._language = value;
    }

    public get showFeatures(): ShowFeature[] {
        return this._showFeatures;
    }
    public set showFeatures(value: ShowFeature[]) {
        this._showFeatures = value;
    }

    public get showSeats(): ShowSeat[] {
        return this._showSeats;
    }
    public set showSeats(value: ShowSeat[]) {
        this._showSeats = value;
    }

    public get showSeatTypes(): ShowSeatType[] {
        return this._showSeatTypes;
    }
    public set showSeatTypes(value: ShowSeatType[]) {
        this._showSeatTypes = value;
    }

}