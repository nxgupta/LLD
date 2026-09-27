import { Bill } from "../models/Bill.js";
import { BillStatus } from "../models/enums/BillStatus.enum.js";
import { SpotStatus } from "../models/enums/SpotStatus.enum.js";
import type { Ticket } from "../models/Ticket.js";
import type { BillRepository } from "../repositories/Bill.repository.js";
import type { FeeCalculationStrategy } from "../strategies/FeeCalculationStrategy/FeeCalculation.strategy.js";

export class BillService {
    constructor(private billRepository: BillRepository, private feeCalculationStrategy: FeeCalculationStrategy) { }

    public generateBill(ticket: Ticket): number {
        ticket.getParkingSpot().setStatus(SpotStatus.AVIALABLE);
        const amount = this.feeCalculationStrategy.calculateFee(ticket)
        const bill = new Bill();
        bill.setId(1);
        bill.setTicket(ticket);
        bill.setAmount(amount);
        bill.setBillStatus(BillStatus.UN_PAID)

        this.billRepository.save(bill);
        return amount;
    }
}