import { BaseModel } from "./BaseModel.js";
import type { BillStatus } from "./enums/BillStatus.enum.js";
import type { ExitGate } from "./ExitGate.js";
import type { Operator } from "./Operator.js";
import type { Ticket } from "./Ticket.js";

export class Bill extends BaseModel {
    constructor(private gateNumber: number, private ticket: Ticket, private exitGate: ExitGate, private operator: Operator, private billStatus: BillStatus, private duration: Date,) {
        super();
    }
}
