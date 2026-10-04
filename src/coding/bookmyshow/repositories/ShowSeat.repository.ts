import { ShowSeat } from "../models/ShowSeat.js";
import type { IShowSeatRepository } from "./interfaces/IShowSeatRepository.js";
import { AppDataSource } from "../data-source.js";
import { In, type EntityManager } from "typeorm";

export class ShowSeatRepository implements IShowSeatRepository {
    private repo = AppDataSource.getRepository(ShowSeat);

    async saveMany(showSeats: ShowSeat[], entityManager?: EntityManager): Promise<ShowSeat[]> {
        const repository = entityManager ? entityManager.getRepository(ShowSeat) : this.repo;
        return await repository.save(showSeats);

    }

    async findByShowId(showId: number): Promise<ShowSeat[]> {
        return await this.repo.find({
            where: { show: { id: showId } },
            relations: { seat: true }
        });
    }
    async findShowSeatsByIdsForUpdate(showSeatIds: number[], entityManager: EntityManager): Promise<ShowSeat[]> {
        if (!showSeatIds || showSeatIds.length === 0) {
            return [];
        }
        return await entityManager.getRepository(ShowSeat).find({
            where: { id: In(showSeatIds) },
            lock: { mode: "pessimistic_write" },
            relations: {
                _seat: true,
                _show: true
            } as any
        })
    }
}