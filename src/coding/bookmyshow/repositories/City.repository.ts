import { AppDataSource } from "../data-source.js";
import { City } from "../models/City.js";
import { ICityRepository } from "./interfaces/ICityRepository.js";

export class CityRepository implements ICityRepository {
    private repo = AppDataSource.getRepository(City);
    async save(city: City): Promise<City> {
        const savedCity = await this.repo.save(city);
        return savedCity;
    }
}