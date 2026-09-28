import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Auditorium } from "./Auditorium.js";
import { TicketStatus } from "./enums/TicketStatus.enum.js";
import { Show } from "./Show.js";
import { ShowSeat } from "./ShowSeat.js";
import { BaseModel } from "./BaseModel.js";
import { Payment } from "./Payment.js";

@Entity()
export class Ticket extends BaseModel {
    @ManyToOne(() => Show)
    private _show: Show;
    @ManyToMany(() => ShowSeat)
    private _showSeats: ShowSeat[];
    @ManyToOne(() => Auditorium)
    private _auditorium: Auditorium;
    @ManyToOne(() => User)
    private _bookedBy: User;
    @Column({ name: "total_amount", type: "decimal", precision: 10, scale: 2 })
    private _totalAmount: number;
    @Column({
        name: "ticket_status",
        type: "enum",
        enum: TicketStatus,
        default: TicketStatus.PENDING,
    })
    private _ticketStatus: TicketStatus;

    @Column({ name: "time_of_booking", type: "timestamp with time zone" })
    private _timeOfBooking: Date;

    @OneToMany(() => Payment, (payment) => payment.ticket)
    private _payments: Payment[];

    // Getters and setters for the private properties of the Ticket class.

    public get show(): Show {
        return this._show;
    }
    public set show(value: Show) {
        this._show = value;
    }

    public get showSeats(): ShowSeat[] {
        return this._showSeats;
    }
    public set showSeats(value: ShowSeat[]) {
        this._showSeats = value;
    }

    public get auditorium(): Auditorium {
        return this._auditorium;
    }
    public set auditorium(value: Auditorium) {
        this._auditorium = value;
    }

    public get bookedBy(): User {
        return this._bookedBy;
    }
    public set bookedBy(value: User) {
        this._bookedBy = value;
    }

    public get totalAmount(): number {
        return this._totalAmount;
    }
    public set totalAmount(value: number) {
        this._totalAmount = value;
    }

    public get ticketStatus(): TicketStatus {
        return this._ticketStatus;
    }
    public set ticketStatus(value: TicketStatus) {
        this._ticketStatus = value;
    }

    public get timeOfBooking(): Date {
        return this._timeOfBooking;
    }
    public set timeOfBooking(value: Date) {
        this._timeOfBooking = value;
    }

    public get payments(): Payment[] {
        return this._payments;
    }
    public set payments(value: Payment[]) {
        this._payments = value;
    }

}