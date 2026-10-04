import { AppDataSource } from "../data-source.js";
import { Payment } from "../models/Payment.js";
import { PaymentStatus } from "../models/enums/PaymentStatus.enum.js";
import { PaymentMethod } from "../models/enums/PaymentMethod.enum.js";
import { TicketStatus } from "../models/enums/TicketStatus.enum.js";
import { ShowSeatState } from "../models/enums/ShowSeatState.enum.js";
import type { ITicketRepository } from "../repositories/interfaces/ITicketRepository.js";
import type { IShowSeatRepository } from "../repositories/interfaces/IShowSeatRepository.js";
import type { PaymentRepository } from "../repositories/Payment.repository.js";

export class PaymentService {
    constructor(
        private paymentRepository: PaymentRepository,
        private ticketRepository: ITicketRepository,
        private showSeatRepository: IShowSeatRepository
    ) { }

    async makePayment(
        ticketId: number,
        amount: number,
        method: PaymentMethod = PaymentMethod.UPI
    ): Promise<Payment> {
        // 1. Fetch ticket and validate
        const ticket = await this.ticketRepository.findById(ticketId);
        if (!ticket) {
            throw new Error(`Ticket with id ${ticketId} not found`);
        }

        if (ticket.ticketStatus !== TicketStatus.PENDING) {
            throw new Error(`Cannot pay for ticket with status: ${TicketStatus[ticket.ticketStatus]}`);
        }

        // 2. Check 10-minute hold window
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
        if (ticket.timeOfBooking < tenMinutesAgo) {
            // Commit the cancellation and seat release in its own transaction!
            await AppDataSource.transaction(async (entityManager) => {
                ticket.ticketStatus = TicketStatus.CANCELLED;
                for (const seat of ticket.showSeats) {
                    seat.state = ShowSeatState.AVAILABLE;
                }
                await this.ticketRepository.save(ticket, entityManager);
                await this.showSeatRepository.saveMany(ticket.showSeats, entityManager);
            });

            // Now that the DB has committed the release, throw the expiry error:
            throw new Error("Payment window expired! Ticket has been cancelled and seats released.");
        }

        // 3. Payment succeeded: Commit payment, confirm ticket, mark seats BOOKED
        return await AppDataSource.transaction(async (entityManager) => {
            const payment = new Payment();
            payment.ticket = ticket;
            payment.amount = amount;
            payment.paymentMethod = method;
            payment.status = PaymentStatus.SUCCESS;
            payment.timeOfPayment = new Date();
            payment.referenceId = `TXN_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

            const savedPayment = await this.paymentRepository.save(payment, entityManager);

            ticket.ticketStatus = TicketStatus.SUCCESS;
            await this.ticketRepository.save(ticket, entityManager);

            for (const showSeat of ticket.showSeats) {
                showSeat.state = ShowSeatState.BOOKED;
            }
            await this.showSeatRepository.saveMany(ticket.showSeats, entityManager);

            return savedPayment;
        });
    }
}