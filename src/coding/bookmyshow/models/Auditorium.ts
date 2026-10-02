import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import type { Relation } from "typeorm"
import { BaseModel } from "./BaseModel.js";
import { AuditoriumFeature } from "./enums/AuditoriumFeature.enum.js";
import { Seat } from "./Seat.js";
import { Theatre } from "./Theatre.js";
import { Show } from "./Show.js";

@Entity()
export class Auditorium extends BaseModel {
    @Column({ name: 'name' })
    private _name: string;

    @OneToMany(() => Seat, (seat) => seat.auditorium)
    private _seats: Relation<Seat>[];

    @Column({ name: "capacity", type: "int", default: 0 })
    private _capacity: number;

    @Column({ name: "auditorium_features", type: "enum", enum: AuditoriumFeature, array: true })
    private _auditoriumFeatures: AuditoriumFeature[];

    @ManyToOne(() => Theatre, (theatre: Theatre) => theatre.auditoriums, { onDelete: "CASCADE" })
    @JoinColumn({ name: "theatre_id" })
    private _theatre: Relation<Theatre>;

    @OneToMany(() => Show, (show) => show.auditorium)
    private _shows: Show[];

    public get name(): string {
        return this._name;
    }
    public set name(val: string) {
        this._name = val;
    }

    // This public getter satisfies (auditorium: Auditorium) => auditorium.seats without 'any'
    public get seats(): Seat[] {
        return this._seats;
    }
    public set seats(val: Seat[]) {
        this._seats = val;
    }

    public get capacity(): number {
        return this._capacity;
    }
    public set capacity(val: number) {
        this._capacity = val;
    }

    public get auditoriumFeatures(): AuditoriumFeature[] {
        return this._auditoriumFeatures;
    }
    public set auditoriumFeatures(val: AuditoriumFeature[]) {
        this._auditoriumFeatures = val;
    }

    public get theatre(): Theatre {
        return this._theatre;
    }
    public set theatre(val: Theatre) {
        this._theatre = val;
    }
    public get shows(): Show[] {
        return this._shows;
    }
    public set shows(value: Show[]) {
        this._shows = value;
    }
}