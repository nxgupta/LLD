import type { EntityManager } from "typeorm";
import { Ticket } from "../models/Ticket.js";
import type { ITicketRepository } from "./interfaces/ITicketRepository.js";
import { AppDataSource } from "../data-source.js";

export class TicketRepository implements ITicketRepository {
    private repo = AppDataSource.getRepository(Ticket);
    save(ticket: Ticket, entityManager?: EntityManager): Promise<Ticket> {
        //return thsi
    }
    findById(id: number): Promise<Ticket | null> {

    }
}   