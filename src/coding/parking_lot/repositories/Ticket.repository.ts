import type { Ticket } from "../models/Ticket.js";

export class TicketRepository {
    private tickets: Map<number, Ticket> = new Map();
    private ticketId: number = 0;

    public save(ticket: Ticket): Ticket {
        const id = ++this.ticketId;
        ticket.setId(id);
        this.tickets.set(id, ticket);
        return ticket;
    }
}