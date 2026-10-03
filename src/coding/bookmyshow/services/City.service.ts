import { City } from "../models/City.js";
import type { ICityRepository } from "../repositories/interfaces/ICityRepository.js";

export class CityService {
    constructor(private cityRep: ICityRepository) { }
    async addCity(name: string): Promise<City> {
        try {
            const city = new City();
            city.name = name;
            return await this.cityRep.save(city);
        } catch (error) {
            throw new Error(`Unable to add city '${name}'`, { cause: error });
        }
    }
}