import type { Seat } from "../../models/Seat.js";

export interface ISeatRepository {
    save(seat: Seat): Promise<Seat>;
    saveMany(seats: Seat[]): Promise<Seat[]>;
    findByAuditoriumId(auditoriumId: number): Promise<Seat[]>;
}