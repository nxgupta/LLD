import { ResponseDto } from "./ResponseDto.js";

export class BookTicketRequestDto extends ResponseDto {
    private _userId: number;
    private _seatIds: number[];

    get userId(): number {
        return this._userId;
    }

    set userId(userId: number) {
        this._userId = userId;
    }

    get seatIds(): number[] {
        return this._seatIds;
    }

    set seatIds(seatIds: number[]) {
        this._seatIds = seatIds;
    }
}