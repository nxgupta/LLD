import type { Auditorium } from "../models/Auditorium.js";
import { ResponseDto } from "./ResponseDto.js";

export class AddAudiResponseDto extends ResponseDto {
    public auditorium?: Auditorium;
}