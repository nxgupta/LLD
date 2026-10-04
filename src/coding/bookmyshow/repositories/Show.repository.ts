import { AppDataSource } from "../data-source.js";
import { Show } from "../models/Show.js";
import type { IShowRepository } from "./interfaces/IShowRepository.js";

export class ShowRepository implements IShowRepository {
    private repo = AppDataSource.getRepository(Show);
    async save(show: Show): Promise<Show> {
        try {
            return await this.repo.save(show);
        } catch (error) {
            throw new Error("Failed to save show", { cause: error });
        }
    }
    async findById(showId: number): Promise<Show | null> {
        try {
            return await this.repo.findOne({ where: { id: showId }, relations: { _auditorium: true, _movie: true } as any });
        } catch (error) {
            throw new Error("Failed to fetch show", { cause: error });
        }
    }
}
