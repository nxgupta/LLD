import { CreateSeatResponseDto } from "../dtos/CreateSeatResponse.dto.js";
import type { SeatService } from "../services/Seat.service.js";
import { SeatType } from "../models/enums/SeatType.enum.js";

export class SeatController {
    constructor(private seatService: SeatService) { }

    async createSeats(
        auditoriumId: number,
        seatNumbers: string[],
        seatType: SeatType = SeatType.SILVER
    ): Promise<CreateSeatResponseDto> {
        const response = new CreateSeatResponseDto();
        try {
            const seats = await this.seatService.createSeatsForAuditorium(auditoriumId, seatNumbers, seatType);
            response.status = "SUCCESS";
            response.seats = seats;
        } catch (error) {
            response.status = "FAILURE";
            response.errorMessage = error instanceof Error ? error.message : String(error);
        }
        return response;
    }
}