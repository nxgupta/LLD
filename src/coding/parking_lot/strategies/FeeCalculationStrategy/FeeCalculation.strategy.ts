import { Ticket } from "../../models/Ticket.js";

export interface FeeCalculationStrategy {
    calculateFee(ticket: Ticket): number;
}