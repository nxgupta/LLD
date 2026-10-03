import { AppDataSource } from "../data-source.js";
import { Auditorium } from "../models/Auditorium.js";
import type { IAuditoriumRepository } from "./interfaces/IAudiRepository.js";

export class AuditoriumRepository implements IAuditoriumRepository {
    private auditoriumRepo = AppDataSource.getRepository(Auditorium);

    async save(auditorium: Auditorium): Promise<Auditorium> {
        try {
            return await this.auditoriumRepo.save(auditorium);
        } catch (error) {
            throw new Error("Failed to save auditorium", { cause: error });
        }
    }

    async findById(id: number): Promise<Auditorium | null> {
        try {
            return await this.auditoriumRepo.findOne({ where: { id } });
        } catch (error) {
            throw new Error("Failed to fetch auditorium", { cause: error });
        }
    }
}