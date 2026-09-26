import { GenerateTicketRequestDto } from "../dto/GenerateTicketRequest.dto.js";
import { GenerateTicketResponseDto } from "../dto/GenerateTicketResponse.dto.js";
import { TicketService } from "../services/Ticket.service.js";

export class TicketController {
    private ticketService: TicketService;
    constructor(ticketService: TicketService) {
        this.ticketService = ticketService;
    }

    generateTicket(request: GenerateTicketRequestDto): GenerateTicketResponseDto {
        const ticket = this.ticketService.generateTicket(request.getVehicle(), request.getSpotType(), request.getEntryGate(), request.getParkingLotId());
        const response = new GenerateTicketResponseDto();
        if (ticket)
            response.setTicket(ticket)
        return response;
    }
}