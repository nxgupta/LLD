import type { Theatre } from "../../models/Theatre.js";

export interface ITheatreRepository {
    save(theatre: Theatre): Promise<Theatre>;
}