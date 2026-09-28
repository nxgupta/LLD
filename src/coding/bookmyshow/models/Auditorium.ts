import type { AuditoriumFeature } from "./enums/AuditoriumFeature.enum.js";
import type { Seat } from "./Seat.js";
import type { Theatre } from "./Theatre.js";

export class Auditorium extends BaseModel {
    private name: string;
    private seats: Seat[];
    private capacity: number;

    private auditoriumFeatures: AuditoriumFeature[];
    private theatre: Theatre;

    public getName(): string {
        return this.name;
    }

    public setName(name: string): string {
        return this.name = name;
    }

    public getSeats(): Seat[] {
        return this.seats;
    }

    public setSeats(seats: Seat[]): Seat[] {
        return this.seats = seats;
    }

    public getCapacity(): number {
        return this.capacity;
    }

    public setCapacity(capacity: number): number {
        return this.capacity = capacity;
    }

    public getAuditoriumFeatures(): AuditoriumFeature[] {
        return this.auditoriumFeatures;
    }

    public setAuditoriumFeatures(auditoriumFeatures: AuditoriumFeature[]): AuditoriumFeature[] {
        return this.auditoriumFeatures = auditoriumFeatures;
    }

    public getTheatre(): Theatre {
        return this.theatre;
    }

    public setTheatre(theatre: Theatre): Theatre {
        return this.theatre = theatre;
    }
}