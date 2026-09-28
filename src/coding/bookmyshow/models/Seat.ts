import type { SeatType } from "./enums/SeatType.enum.js";

export class Seat extends BaseModel {
    private seatNumber: string;
    private seatType: SeatType;

    getSeatNumber(): string {
        return this.seatNumber;
    }

    setSeatNumber(seatNumber: string): void {
        this.seatNumber = seatNumber;
    }

    getSeatType(): SeatType {
        return this.seatType;
    }

    setSeatType(seatType: SeatType): void {
        this.seatType = seatType;
    }
}