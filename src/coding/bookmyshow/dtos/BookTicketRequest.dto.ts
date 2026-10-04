import { ResponseDto } from "./ResponseDto.js";

export class BookTicketRequestDto extends ResponseDto {
    private userId: number;
    private seatIds: [];
}