import type { ShowSeat } from "../../models/ShowSeat.js";

export interface IShowSeatRepository {
    saveMany(showSeats: ShowSeat[]): Promise<ShowSeat[]>;
    findByShowId(showId: number): Promise<ShowSeat[]>;
}