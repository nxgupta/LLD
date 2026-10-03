import { AddAudiResponseDto } from "../dtos/AddAudiResponse.dto.js";
import type { AuditoriumService } from "../services/AuditoriumService.js";

export class AuditoriumController {
    constructor(private auditoriumService: AuditoriumService) { }

    async createAuditorium(name: string, theatreId: number, capacity: number): Promise<AddAudiResponseDto> {
        const response = new AddAudiResponseDto();
        try {
            const audi = await this.auditoriumService.createAuditorium(name, theatreId, capacity);
            response.auditorium = audi;
            response.status = 'SUCCESS';
        } catch (error) {
            console.log(error)
            response.status = 'FAILURE';
            response.errorMessage = error instanceof Error ? error.message : String(error);
        }
        return response;
    }
}