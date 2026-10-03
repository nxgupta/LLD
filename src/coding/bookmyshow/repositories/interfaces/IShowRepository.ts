import type { Show } from "../../models/Show.js";

export interface IShowRepository {
    save(show: Show): Promise<Show>;
    findById(showId: number): Promise<Show | null>;
}