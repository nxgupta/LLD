import { FeeTableHelper } from "../../helpers/FeeTable.helper.js";
import type { Ticket } from "../../models/Ticket.js";
import type { FeeCalculationStrategy } from "./FeeCalculation.strategy.js";

class TimeAndVehicleTypeFeeCalculationStrategy implements FeeCalculationStrategy {
    calculateFee(ticket: Ticket): number {
        const type = ticket.getParkingSpot().getSpotType();
        const entryTime = ticket.getEntryTime()
        const exitTime = new Date().toString()
        const duration = Math.ceil((Date.parse(exitTime) - Date.parse(entryTime)) / 1000 * 60);
        const totalCharge = duration * FeeTableHelper.getHourlyRate(type) + FeeTableHelper.getBaseRate(type)
        return totalCharge
    }
}