import { Column, Entity, ManyToOne } from "typeorm";
import type { Relation } from "typeorm"
import { SeatType } from "./enums/SeatType.enum.js";
import { BaseModel } from "./BaseModel.js";
import { Auditorium } from "./Auditorium.js";

@Entity()
export class Seat extends BaseModel {
    @Column()
    private _seatNumber: string;

    @Column({
        type: "enum",
        enum: SeatType,
        default: SeatType.SILVER
    })
    private _seatType: SeatType;

    @ManyToOne(() => Auditorium, (auditorium) => auditorium.seats, { onDelete: "CASCADE" })
    private _auditorium: Relation<Auditorium>;

    public get seatNumber(): string {
        return this._seatNumber;
    }
    public set seatNumber(val: string) {
        this._seatNumber = val;
    }

    public get seatType(): SeatType {
        return this._seatType;
    }
    public set seatType(val: SeatType) {
        this._seatType = val;
    }

    // This public getter satisfies (seat: Seat) => seat.auditorium without 'any'
    public get auditorium(): Auditorium {
        return this._auditorium;
    }
    public set auditorium(val: Auditorium) {
        this._auditorium = val;
    }
}