import type { City } from "../../models/City.js";

export interface ICityRepository {
    save(city: City): Promise<City>
    findById(cityId: number): Promise<City | null>
}