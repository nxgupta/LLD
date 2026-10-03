import { CreateTheatreResponseDto } from "../dtos/CreateTheatreResponse.dto.js";
import type { TheatreService } from "../services/Theatre.service.js";

export class TheatreController {
    constructor(private theatreService: TheatreService) { }
    async createTheatre(name: string, address: string, cityId: number): Promise<CreateTheatreResponseDto> {
        const response = new CreateTheatreResponseDto();
        try {
            let theatre = await this.theatreService.createTheatre(name, address, cityId);
            response.status = "SUCCESS"
            response.theatre = theatre;
        } catch (error) {
            response.status = "FAILURE";
            response.errorMessage = error instanceof Error ? error.message : String(error);
        }
        return response;
    }
}
