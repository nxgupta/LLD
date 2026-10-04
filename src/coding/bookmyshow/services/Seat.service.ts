import { Seat } from "../models/Seat.js";
import { SeatType } from "../models/enums/SeatType.enum.js";
import type { IAuditoriumRepository } from "../repositories/interfaces/IAudiRepository.js";
import type { ISeatRepository } from "../repositories/interfaces/ISeatRepository.js";

export class SeatService {
    constructor(
        private seatRepository: ISeatRepository,
        private auditoriumRepository: IAuditoriumRepository
    ) { }

    async createSeatsForAuditorium(
        auditoriumId: number,
        seatNumbers: string[],
        seatType: SeatType = SeatType.SILVER
    ): Promise<Seat[]> {
        const auditorium = await this.auditoriumRepository.findById(auditoriumId);
        if (!auditorium) {
            throw new Error(`Auditorium not found with id: ${auditoriumId}`);
        }

        const seats: Seat[] = seatNumbers.map((seatNum) => {
            const seat = new Seat();
            seat.seatNumber = seatNum;
            seat.seatType = seatType;
            seat.auditorium = auditorium;
            return seat;
        });

        return await this.seatRepository.saveMany(seats);
    }
}