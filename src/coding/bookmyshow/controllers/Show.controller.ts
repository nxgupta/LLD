import { CreateShowResponseDto } from "../dtos/CreateShowResponse.dto.js";
import type { Language } from "../models/enums/Language.enum.js";
import type { ShowService } from "../services/Show.service.js";

export class ShowController {
    constructor(private showService: ShowService) { }

    async createShow(
        movieId: number,
        auditoriumId: number,
        startTime: Date,
        endTime: Date,
        language?: Language
    ): Promise<CreateShowResponseDto> {
        const response = new CreateShowResponseDto();
        try {
            const show = await this.showService.createShow(movieId, auditoriumId, startTime, endTime, language);
            response.status = "SUCCESS";
            response.show = show;
        } catch (error) {
            response.status = "FAILURE";
            response.errorMessage = error instanceof Error ? error.message : String(error);
        }
        return response;
    }
}