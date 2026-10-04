import type { EntityManager } from "typeorm";
import { Ticket } from "../models/Ticket.js";
import type { ITicketRepository } from "./interfaces/ITicketRepository.js";
import { AppDataSource } from "../data-source.js";

export class TicketRepository implements ITicketRepository {
    private repo = AppDataSource.getRepository(Ticket);
    async save(ticket: Ticket, entityManager: EntityManager): Promise<Ticket> {
        return await entityManager.getRepository(Ticket).save(ticket)
    }
    async findById(id: number): Promise<Ticket | null> {
        return await this.repo.findOne({
            where: {
                id
            },
            relations: {
                _show: true,
                _seat: true,
                _bookedBy: true,
                _auditorium: true
            } as any
        })
    }
}   