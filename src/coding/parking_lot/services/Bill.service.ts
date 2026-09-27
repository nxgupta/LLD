import type { Ticket } from "../models/Ticket.js";
import type { BillRepository } from "../repositories/Bill.repository.js";
import { TimeAndVehicleTypeFeeCalculationStrategy } from "../strategies/FeeCalculationStrategy/TimeAndVehicleTypeFeeCalculation.strategy.js";

export class BillService {
    constructor(private ticketRepository: BillRepository,
        private billCalculationStrategy: TimeAndVehicleTypeFeeCalculationStrategy) { }
    public generateBill(ticket: Ticket): number {
        const amount = this.billCalculationStrategy.calculateFee(ticket)
        this.ticketRepository.save(ticket.getId(), amount);
        return amount;
    }
}