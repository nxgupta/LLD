import { Auditorium } from "../models/Auditorium.js";
import type { IAuditoriumRepository } from "../repositories/interfaces/IAudiRepository.js";
import type { ITheatreRepository } from "../repositories/interfaces/ITheatreRepository.js";

export class AuditoriumService {
    constructor(
        private auditoriumRepository: IAuditoriumRepository,
        private theatreRepository: ITheatreRepository
    ) { }

    async createAuditorium(name: string, theatreId: number, capacity: number): Promise<Auditorium> {
        try {
            const theatre = await this.theatreRepository.findById(theatreId);
            if (!theatre) {
                throw new Error(`Theatre not found with id: ${theatreId}`);
            }
            const auditorium = new Auditorium();
            auditorium.name = name;
            auditorium.theatre = theatre;
            auditorium.capacity = capacity;
            auditorium.features = [];
            return await this.auditoriumRepository.save(auditorium);
        } catch (error) {
            throw new Error(`Unable to create auditorium '${name}'`, { cause: error });
        }
    }
}