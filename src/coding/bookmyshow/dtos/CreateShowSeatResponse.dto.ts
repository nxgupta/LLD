import type { ShowSeat } from "../models/ShowSeat.js";
import { ResponseDto } from "./ResponseDto.js";

export class CreateShowSeatResponseDto extends ResponseDto {
    public showSeats?: ShowSeat[];
}