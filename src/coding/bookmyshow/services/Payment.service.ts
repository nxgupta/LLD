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
        return await AppDataSource.transaction(async (entityManager) => {
            // 1. Fetch ticket inside transaction
            const ticket = await this.ticketRepository.findById(ticketId, entityManager);
            if (!ticket) {
                throw new Error(`Ticket with id ${ticketId} not found`);
            }

            // 2. Validate ticket is in PENDING state
            if (ticket.ticketStatus !== TicketStatus.PENDING) {
                throw new Error(`Cannot pay for ticket with status: ${TicketStatus[ticket.ticketStatus]}`);
            }

            // 3. Validate that 10 minutes have NOT elapsed
            const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
            if (ticket.timeOfBooking < tenMinutesAgo) {
                // Auto-expire right here if user tried to pay after 10 min
                ticket.ticketStatus = TicketStatus.CANCELLED;
                for (const seat of ticket.showSeats) {
                    seat.state = ShowSeatState.AVAILABLE;
                }
                await this.ticketRepository.save(ticket, entityManager);
                await this.showSeatRepository.saveMany(ticket.showSeats, entityManager);
                throw new Error("Payment window expired! Ticket has been cancelled and seats released.");
            }

            // 4. Create successful Payment record
            const payment = new Payment();
            payment.ticket = ticket;
            payment.amount = amount;
            payment.paymentMethod = method;
            payment.status = PaymentStatus.SUCCESS;
            payment.timeOfPayment = new Date();
            payment.referenceId = `TXN_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

            const savedPayment = await this.paymentRepository.save(payment, entityManager);

            // 5. Update Ticket to SUCCESS
            ticket.ticketStatus = TicketStatus.SUCCESS;
            await this.ticketRepository.save(ticket, entityManager);

            // 6. Permanently lock seats to BOOKED
            for (const showSeat of ticket.showSeats) {
                showSeat.state = ShowSeatState.BOOKED;
            }
            await this.showSeatRepository.saveMany(ticket.showSeats, entityManager);

            return savedPayment;
        });
    }
}