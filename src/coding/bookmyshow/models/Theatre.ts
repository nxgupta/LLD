import type { Auditorium } from "./Auditorium.js";
import type { Show } from "./Show.js";

export class Theatre extends BaseModel {
    private name: string;
    private address: string;
    private auditoriums: Auditorium[];

    private upcomingShows: Show[];

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getAddress(): string {
        return this.address;
    }

    setAddress(address: string): void {
        this.address = address;
    }

    getAuditoriums(): Auditorium[] {
        return this.auditoriums;
    }

    setAuditoriums(auditoriums: Auditorium[]): void {
        this.auditoriums = auditoriums;
    }

    getUpcomingShows(): Show[] {
        return this.upcomingShows;
    }

    setUpcomingShows(upcomingShows: Show[]): void {
        this.upcomingShows = upcomingShows;
    }
}