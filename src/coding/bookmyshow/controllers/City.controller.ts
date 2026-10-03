import type { City } from "../models/City.js";
import type { CityService } from "../services/City.service.js";

export class CityController {
    constructor(private cityService: CityService) { }
    async addCity(name: string): Promise<City> {
        try {
            return await this.cityService.addCity(name);
        } catch (error) {
            console.error("CityController.addCity failed:", error);
            throw error;
        }
    }
}