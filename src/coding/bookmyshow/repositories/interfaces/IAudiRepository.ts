import type { Auditorium } from "../../models/Auditorium.js";

export interface IAuditoriumRepository {
    save(auditorium: Auditorium): Promise<Auditorium>;
    findById(id: number): Promise<Auditorium | null>;

}