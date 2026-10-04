import { Seat } from "../models/Seat.js";
import type { ISeatRepository } from "./interfaces/ISeatRepository.js";
import { AppDataSource } from "../data-source.js";

export class SeatRepository implements ISeatRepository {
    private repo = AppDataSource.getRepository(Seat);

    async save(seat: Seat): Promise<Seat> {
        return await this.repo.save(seat);
    }

    async saveMany(seats: Seat[]): Promise<Seat[]> {
        return await this.repo.save(seats);
    }

    async findByAuditoriumId(auditoriumId: number): Promise<Seat[]> {
        return await this.repo.find({
            where: { _auditorium: { id: auditoriumId } } as any
        });
    }
}