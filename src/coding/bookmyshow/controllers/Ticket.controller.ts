import type { BookTicketRequestDto } from "../dtos/BookTicketRequest.dto.js";
import { BookTicketResponseDto } from "../dtos/BookTicketResponse.dto.js";
import type { TicketService } from "../services/Ticket.service.js";

export class TicketController {
    constructor(private ticketService: TicketService) { }

    async bookTicket(request: BookTicketRequestDto): Promise<BookTicketResponseDto> {
        const response = new BookTicketResponseDto();
        try {
            const ticket = await this.ticketService.bookTicket(request.userId, request.seatIds);
            response.ticket = ticket;
            response.status = "SUCCESS";
        } catch (error) {
            console.error("Booking failed:", error);
            response.status = "FAILURE";
            response.errorMessage = error instanceof Error ? error.message : String(error);
        }
        return response;
    }

    async cancelExpiredTickets(timeoutMinutes: number = 10): Promise<{ count: number; status: string }> {
        try {
            const count = await this.ticketService.expireUnpaidTickets(timeoutMinutes);
            return { count, status: "SUCCESS" };
        } catch (error) {
            console.error("Cleanup failed:", error);
            return { count: 0, status: "FAILURE" };
        }
    }
}