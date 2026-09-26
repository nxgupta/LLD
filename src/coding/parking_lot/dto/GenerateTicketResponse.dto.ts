import type { Ticket } from "../models/Ticket.js";

export class GenerateTicketResponseDto {
    private ticket: Ticket;

    getTicket(): Ticket {
        return this.ticket;
    }

    setTicket(ticket: Ticket): void {
        this.ticket = ticket;
    }
}