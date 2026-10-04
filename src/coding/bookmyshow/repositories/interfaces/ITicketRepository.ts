import type { EntityManager } from "typeorm"
import type { Ticket } from "../../models/Ticket.js"

export interface ITicketRepository {
    save(ticket: Ticket, entityManager?: EntityManager): Promise<Ticket>
    findById(id: number): Promise<Ticket | null>
}