import { Column, Entity, ManyToOne } from "typeorm";
import { ShowSeatState } from "./enums/ShowSeatState.enum.js";
import { Seat } from "./Seat.js";
import { Show } from "./Show.js";
import { BaseModel } from "./BaseModel.js";

@Entity()
export class ShowSeat extends BaseModel {
    @ManyToOne(() => Show, { nullable: false, onDelete: "CASCADE" })
    private _show: Show;

    @ManyToOne(() => Seat, { nullable: false, onDelete: "CASCADE" })
    private _seat: Seat;

    @Column({
        name: "state",
        type: "enum",
        enum: ShowSeatState,
        default: ShowSeatState.AVAILABLE,
    })
    private _state: ShowSeatState;

    public get show(): Show {
        return this._show;
    }
    public set show(value: Show) {
        this._show = value;
    }

    public get seat(): Seat {
        return this._seat;
    }
    public set seat(value: Seat) {
        this._seat = value;
    }

    public get state(): ShowSeatState {
        return this._state;
    }
    public set state(value: ShowSeatState) {
        this._state = value;
    }
}