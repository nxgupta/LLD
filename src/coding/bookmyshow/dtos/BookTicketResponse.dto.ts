import type { Ticket } from "../models/Ticket.js";
import { ResponseDto } from "./ResponseDto.js";

export class BookTicketResponseDto extends ResponseDto {
    public ticket?: Ticket
}