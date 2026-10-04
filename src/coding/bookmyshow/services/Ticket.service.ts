import { AppDataSource } from "../data-source.js";
import { ShowSeatState } from "../models/enums/ShowSeatState.enum.js";
import { TicketStatus } from "../models/enums/TicketStatus.enum.js";
import { Ticket } from "../models/Ticket.js";
import type { IShowSeatRepository } from "../repositories/interfaces/IShowSeatRepository.js";
import type { ITicketRepository } from "../repositories/interfaces/ITicketRepository.js";
import type { UserRepository } from "../repositories/User.repository.js";

export class TicketService {
    constructor(private ticketRepository: ITicketRepository, private showSeatRepository: IShowSeatRepository, private userRepository: UserRepository) { }

    async bookTicket(userId: number, showSeatIds: number[]): Promise<Ticket> {
        if (!showSeatIds || showSeatIds.length == 0) {
            throw new Error("No seats selected for booking");
        }
        //fetch user and validate
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new Error(`User not found with id: ${userId}`);
        }

        //execute strictly within a db transaction
        return await AppDataSource.transaction(async (entityManager) => {
            //pessimistic lock on the show seats
            const showSeats = await this.showSeatRepository.findShowSeatsByIdsForUpdate(showSeatIds, entityManager);

            if (showSeats.length !== showSeatIds.length)
                throw new Error("One or more selected seats do not exist");

            //check if every seat is available?
            for (const showSeat of showSeats) {
                if (showSeat.state !== ShowSeatState.AVAILABLE) {
                    throw new Error(`Seat with id ${showSeat.id} is no longer available`);
                }
            }

            //mark showSeats as locked
            for (const showSeat of showSeats) {
                showSeat.state = ShowSeatState.LOCKED;
            }

            await this.showSeatRepository.saveMany(showSeats, entityManager);

            const ticket = new Ticket();
            ticket.bookedBy = user;
            ticket.show = showSeats[0]!.show;
            ticket.showSeats = showSeats;
            ticket.ticketStatus = TicketStatus.PENDING;
            ticket.timeOfBooking = new Date();
            ticket.totalAmount = 0;

            const savedTicket = await this.ticketRepository.save(ticket, entityManager);

            return savedTicket;
        })
    }
}