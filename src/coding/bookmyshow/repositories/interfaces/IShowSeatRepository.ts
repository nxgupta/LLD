import type { EntityManager } from "typeorm";
import type { ShowSeat } from "../../models/ShowSeat.js";

export interface IShowSeatRepository {
    saveMany(showSeats: ShowSeat[], entityManager?: EntityManager): Promise<ShowSeat[]>;
    findByShowId(showId: number): Promise<ShowSeat[]>;
    findShowSeatsByIdsForUpdate(showSeatIds: number[], entityManager: EntityManager): Promise<ShowSeat[]>
}