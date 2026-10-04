import { LessThan, type EntityManager } from "typeorm";
import { Ticket } from "../models/Ticket.js";
import type { ITicketRepository } from "./interfaces/ITicketRepository.js";
import { AppDataSource } from "../data-source.js";
import { TicketStatus } from "../models/enums/TicketStatus.enum.js";

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
                _showSeats: true,
                _bookedBy: true,
                _auditorium: true
            } as any
        })
    }

    async findPendingTicketsOlderThan(cutoff: Date): Promise<Ticket[]> {
        return await this.repo.find({
            where: {
                ticketStatus: TicketStatus.PENDING,
                timeOfBooking: LessThan(cutoff)
            },
            relations: {
                showSeats: true
            }
        });
    }
}   