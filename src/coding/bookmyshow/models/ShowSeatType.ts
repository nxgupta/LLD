import type { SeatType } from "./enums/SeatType.enum.js";
import type { Show } from "./Show.js";

export class ShowSeatType extends BaseModel {
    private show: Show;
    private seatType: SeatType;
    private price: number;

    getShow(): Show {
        return this.show;
    }

    setShow(show: Show) {
        this.show = show;
    }

    getSeatType(): SeatType {
        return this.seatType;
    }

    setSeatType(seatType: SeatType) {
        this.seatType = seatType;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number) {
        this.price = price;
    }
}