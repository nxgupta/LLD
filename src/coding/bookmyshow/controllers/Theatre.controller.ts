import type { Theatre } from "../models/Theatre.js";
import type { TheatreService } from "../services/Theatre.service.js";

export class TheatreController {
    constructor(private theatreService: TheatreService) { }
    async createTheatre(name: string, address: string, cityId: number): Promise<Theatre> {
        try {
            return await this.theatreService.createTheatre(name, address, cityId);
        } catch (error) {
            console.error("TheatreController.createTheatre failed:", error);
            throw error;
        }
    }
}
