import type { EntityManager } from "typeorm"
import type { Ticket } from "../../models/Ticket.js"

export interface ITicketRepository {
    save(ticket: Ticket, entityManager: EntityManager): Promise<Ticket>
    findById(id: number, entityManager?: EntityManager): Promise<Ticket | null>
    findPendingTicketsOlderThan(cutoff: Date): Promise<Ticket[]>
}