import type { PaymentMethod } from "./enums/PaymentMethod.enum.js";
import type { PaymentStatus } from "./enums/PaymentStatus.enum.js";
import type { Ticket } from "./Ticket.js";

export class Payment extends BaseModel {
    private paymentMethod: PaymentMethod;
    private timeOfpayment: Date;
    private amount: number;
    private referencId: string;
    private status: PaymentStatus;
    private ticket: Ticket;

    // Getters
    get getPaymentMethod(): PaymentMethod {
        return this.paymentMethod;
    }

    get getTimeOfPayment(): Date {
        return this.timeOfpayment;
    }

    get getAmount(): number {
        return this.amount;
    }

    get getReferencId(): string {
        return this.referencId;
    }

    get getStatus(): PaymentStatus {
        return this.status;
    }

    get getTicket(): Ticket {
        return this.ticket;
    }

    // Setters
    set setPaymentMethod(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    set setTimeOfPayment(timeOfpayment: Date) {
        this.timeOfpayment = timeOfpayment;
    }

    set setAmount(amount: number) {
        this.amount = amount;
    }

    set setReferencId(referencId: string) {
        this.referencId = referencId;
    }

    set setStatus(status: PaymentStatus) {
        this.status = status;
    }

    set setTicket(ticket: Ticket) {
        this.ticket = ticket;
    }
}