import type { Seat } from "../models/Seat.js";
import { ResponseDto } from "./ResponseDto.js";

export class CreateSeatResponseDto extends ResponseDto {
    public seats?: Seat[];
}