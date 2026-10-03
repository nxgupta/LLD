import { AppDataSource } from "../data-source.js";
import { Theatre } from "../models/Theatre.js";
import type { ITheatreRepository } from "./interfaces/ITheatreRepository.js";

export class TheatreRepository implements ITheatreRepository {
    private repo = AppDataSource.getRepository(Theatre);
    async save(theatre: Theatre): Promise<Theatre> {
        try {
            return await this.repo.save(theatre);
        } catch (error) {
            throw new Error("Failed to save theatre", { cause: error });
        }
    }
}
