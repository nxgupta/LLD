import { CreateShowSeatResponseDto } from "../dtos/CreateShowSeatResponse.dto.js";
import type { ShowSeatService } from "../services/ShowSeat.service.js";

export class ShowSeatController {
    constructor(private showSeatService: ShowSeatService) { }

    async createShowSeats(showId: number): Promise<CreateShowSeatResponseDto> {
        const response = new CreateShowSeatResponseDto();
        try {
            const showSeats = await this.showSeatService.createShowSeatsForShow(showId);
            response.status = "SUCCESS";
            response.showSeats = showSeats;
        } catch (error) {
            response.status = "FAILURE";
            response.errorMessage = error instanceof Error ? error.message : String(error);
        }
        return response;
    }
}