import { ShowSeat } from "../models/ShowSeat.js";
import type { IShowSeatRepository } from "./interfaces/IShowSeatRepository.js";
import { AppDataSource } from "../data-source.js";

export class ShowSeatRepository implements IShowSeatRepository {
    private repo = AppDataSource.getRepository(ShowSeat);

    async saveMany(showSeats: ShowSeat[]): Promise<ShowSeat[]> {
        return await this.repo.save(showSeats);
    }

    async findByShowId(showId: number): Promise<ShowSeat[]> {
        return await this.repo.find({
            where: { show: { id: showId } },
            relations: { seat: true }
        });
    }
}