import { AppDataSource } from "../data-source.js";
import { City } from "../models/City.js";
import type { ICityRepository } from "./interfaces/ICityRepository.js";

export class CityRepository implements ICityRepository {
    private repo = AppDataSource.getRepository(City);

    async save(city: City): Promise<City> {
        try {
            return await this.repo.save(city);
        } catch (error) {
            throw new Error("Failed to save city", { cause: error });
        }
    }

    async findById(cityId: number): Promise<City | null> {
        try {
            const city = await this.repo.findOne({ where: { id: cityId } })
            return city;
        } catch (error) {
            throw new Error("Failed to fetch city", { cause: error });
        }
    }
}