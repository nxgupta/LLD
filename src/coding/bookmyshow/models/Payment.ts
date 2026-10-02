import { Column, Entity, ManyToOne } from "typeorm";
import type { Relation } from "typeorm"

import { PaymentMethod } from "./enums/PaymentMethod.enum.js";
import { PaymentStatus } from "./enums/PaymentStatus.enum.js";
import { Ticket } from "./Ticket.js";
import { BaseModel } from "./BaseModel.js";

@Entity()
export class Payment extends BaseModel {

    @Column({
        name: "payment_method",
        type: "enum",
        enum: PaymentMethod,
    })
    private _paymentMethod: PaymentMethod;

    @Column({ name: "time_of_payment", type: "timestamp with time zone" })
    private _timeOfPayment: Date;

    @Column({ name: "amount", type: "int" })
    private _amount: number;

    @Column({ name: "reference_id", type: "varchar", length: 120, unique: true })
    private _referenceId: string;

    @Column({
        name: "status",
        type: "enum",
        enum: PaymentStatus,
        default: PaymentStatus.PENDING,
    })
    private _status: PaymentStatus;
    @ManyToOne(() => Ticket, (ticket) => ticket.payments)
    private _ticket: Relation<Ticket>;

    // Getters
    public get paymentMethod(): PaymentMethod {
        return this._paymentMethod;
    }
    public set paymentMethod(value: PaymentMethod) {
        this._paymentMethod = value;
    }

    public get timeOfPayment(): Date {
        return this._timeOfPayment;
    }
    public set timeOfPayment(value: Date) {
        this._timeOfPayment = value;
    }

    public get amount(): number {
        return this._amount;
    }
    public set amount(value: number) {
        this._amount = value;
    }

    public get referenceId(): string {
        return this._referenceId;
    }
    public set referenceId(value: string) {
        this._referenceId = value;
    }

    public get status(): PaymentStatus {
        return this._status;
    }
    public set status(value: PaymentStatus) {
        this._status = value;
    }

    public get ticket(): Ticket {
        return this._ticket;
    }
    public set ticket(value: Ticket) {
        this._ticket = value;
    }
}