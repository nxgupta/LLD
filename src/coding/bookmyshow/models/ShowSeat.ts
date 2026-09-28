import type { ShowSeatState } from "./enums/ShowSeatState.enum.js";
import type { Seat } from "./Seat.js";
import type { Show } from "./Show.js";

export class ShowSeat extends BaseModel {
    private show: Show;
    private seat: Seat;
    private state: ShowSeatState;

    getShow(): Show {
        return this.show;
    }

    setShow(show: Show): void {
        this.show = show;
    }

    getSeat(): Seat {
        return this.seat;
    }

    setSeat(seat: Seat): void {
        this.seat = seat;
    }

    getState(): ShowSeatState {
        return this.state;
    }

    setState(state: ShowSeatState): void {
        this.state = state;
    }
}