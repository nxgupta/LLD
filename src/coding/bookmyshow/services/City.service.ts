import { City } from "../models/City.js";
import type { ICityRepository } from "../repositories/interfaces/ICityRepository.js";

export class CityService {
    constructor(private cityRep: ICityRepository) { }
    async addCity(name: string): Promise<City> {
        const city = new City();
        city.name = name;
        return this.cityRep.save(city)
    }
}