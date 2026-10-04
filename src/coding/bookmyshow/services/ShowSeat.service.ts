import { ShowSeat } from "../models/ShowSeat.js";
import { ShowSeatState } from "../models/enums/ShowSeatState.enum.js";
import type { IShowSeatRepository } from "../repositories/interfaces/IShowSeatRepository.js";
import type { IShowRepository } from "../repositories/interfaces/IShowRepository.js";
import type { ISeatRepository } from "../repositories/interfaces/ISeatRepository.js";

export class ShowSeatService {
    constructor(
        private showSeatRepository: IShowSeatRepository,
        private showRepository: IShowRepository,
        private seatRepository: ISeatRepository
    ) { }

    async createShowSeatsForShow(showId: number): Promise<ShowSeat[]> {
        const show = await this.showRepository.findById(showId);
        if (!show) {
            throw new Error(`Show not found with id: ${showId}`);
        }

        // Get all physical seats in this show's auditorium
        const physicalSeats = await this.seatRepository.findByAuditoriumId(show.auditorium.id);
        if (!physicalSeats.length) {
            throw new Error(`No physical seats found for auditorium id: ${show.auditorium.id}`);
        }

        // Create an AVAILABLE ShowSeat for every physical seat
        const showSeats: ShowSeat[] = physicalSeats.map((seat) => {
            const showSeat = new ShowSeat();
            showSeat.show = show;
            showSeat.seat = seat;
            showSeat.state = ShowSeatState.AVAILABLE;
            return showSeat;
        });

        return await this.showSeatRepository.saveMany(showSeats);
    }
}