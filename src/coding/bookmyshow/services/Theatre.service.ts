import { Theatre } from "../models/Theatre.js";
import type { ICityRepository } from "../repositories/interfaces/ICityRepository.js";
import type { ITheatreRepository } from "../repositories/interfaces/ITheatreRepository.js";

export class TheatreService {
    constructor(private theatreRepository: ITheatreRepository, private cityRepository: ICityRepository) { }
    async createTheatre(name: string, address: string, cityId: number): Promise<Theatre> {
        try {
            const city = await this.cityRepository.findById(cityId);
            if (!city) throw new Error("City doesn't exist")

            const theatre = new Theatre();
            theatre.name = name;
            theatre.address = address;
            theatre.city = city;
            return await this.theatreRepository.save(theatre)

        } catch (error) {
            throw new Error(`Unable to create theatre '${name}'`, { cause: error });
        }
    }
}
