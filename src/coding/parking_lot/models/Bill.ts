import { BaseModel } from "./BaseModel.js";
import type { BillStatus } from "./enums/BillStatus.enum.js";
import type { Ticket } from "./Ticket.js";

export class Bill extends BaseModel {
    private ticket: Ticket;
    private billStatus: BillStatus;
    private amount: number;

    getTicket(): Ticket {
        return this.ticket;
    }

    setTicket(ticket: Ticket): void {
        this.ticket = ticket;
    }

    getBillStatus(): BillStatus {
        return this.billStatus;
    }

    setBillStatus(billStatus: BillStatus): void {
        this.billStatus = billStatus;
    }

    getAmount(): number {
        return this.amount;
    }

    setAmount(amount: number): void {
        this.amount = amount;
    }
}
