import type { Auditorium } from "./Auditorium.js";
import type { TicketStatus } from "./enums/TicketStatus.enum.js";
import type { Show } from "./Show.js";
import type { ShowSeat } from "./ShowSeat.js";

export class Ticket extends BaseModel {
    private show: Show;
    private showSeats: ShowSeat[];
    private auditorium: Auditorium;
    private bookedBy: User;
    private totalAmount: number;
    private ticketStatus: TicketStatus;
    private timeOfBooking: Date;

    // Getters and setters for the private properties of the Ticket class.

    getShow(): Show {
        return this.show;
    }

    setShow(show: Show): void {
        this.show = show;
    }

    getShowSeats(): ShowSeat[] {
        return this.showSeats;
    }

    setShowSeats(showSeats: ShowSeat[]): void {
        this.showSeats = showSeats;
    }

    getAuditorium(): Auditorium {
        return this.auditorium;
    }

    setAuditorium(auditorium: Auditorium): void {
        this.auditorium = auditorium;
    }

    getBookedBy(): User {
        return this.bookedBy;
    }

    setBookedBy(bookedBy: User): void {
        this.bookedBy = bookedBy;
    }

    getTotalAmount(): number {
        return this.totalAmount;
    }

    setTotalAmount(totalAmount: number): void {
        this.totalAmount = totalAmount;
    }

    getTicketStatus(): TicketStatus {
        return this.ticketStatus;
    }

    setTicketStatus(ticketStatus: TicketStatus): void {
        this.ticketStatus = ticketStatus;
    }

    getTimeOfBooking(): Date {
        return this.timeOfBooking;
    }

    setTimeOfBooking(timeOfBooking: Date): void {
        this.timeOfBooking = timeOfBooking;
    }

}