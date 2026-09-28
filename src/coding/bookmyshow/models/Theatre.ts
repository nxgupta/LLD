import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Auditorium } from "./Auditorium.js";
import { Show } from "./Show.js";
import { BaseModel } from "./BaseModel.js";
import { City } from "./City.js";

@Entity()
export class Theatre extends BaseModel {
    @Column({ name: "name", type: "varchar", length: 150 })
    private _name: string;

    @Column({ name: "address", type: "varchar", length: 300 })
    private _address: string;

    @ManyToOne(() => City, (city) => city.theatres, { nullable: false })
    @JoinColumn({ name: "city_id" })
    private _city: City;

    @OneToMany(() => Auditorium, (auditorium) => auditorium.theatre)
    private _auditoriums: Auditorium[];

    @OneToMany(() => Show, (show) => show.theatre)
    private _upcomingShows: Show[];

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }

    public get city(): City {
        return this._city;
    }
    public set city(value: City) {
        this._city = value;
    }

    public get auditoriums(): Auditorium[] {
        return this._auditoriums;
    }
    public set auditoriums(value: Auditorium[]) {
        this._auditoriums = value;
    }

    public get upcomingShows(): Show[] {
        return this._upcomingShows;
    }
    public set upcomingShows(value: Show[]) {
        this._upcomingShows = value;
    }
}