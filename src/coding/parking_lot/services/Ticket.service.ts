import type { EntryGate } from "../models/EntryGate.js";
import type { SpotType } from "../models/enums/SpotType.enum.js";
import { Ticket } from "../models/Ticket.js";
import type { Vehicle } from "../models/Vehicle.js";
import type { ParkingLotrRepository } from "../repositories/ParkingLot.repository.js";
import type { TicketRepository } from "../repositories/Ticket.repository.js";
import type { SpotAssignmentStrategy } from "../strategies/SpotAssignmentStrategy/SpotAssignment.strategy.js";

export class TicketService {
    constructor(private ticketRepository: TicketRepository, private spotAssignmentStrategy: SpotAssignmentStrategy, private parkingLotRepository: ParkingLotrRepository) {

    }
    public generateTicket(vehicle: Vehicle, spotType: SpotType, entryGate: EntryGate, parkingLotId: number): Ticket | null {
        console.log(vehicle, spotType, entryGate, parkingLotId)
        const parkingLot = this.parkingLotRepository.getById(parkingLotId);
        const parkingSpot = this.spotAssignmentStrategy.assignSpot(parkingLot, spotType, entryGate)
        if (!parkingSpot) return null;

        const ticket = new Ticket();
        ticket.setEntryGate(entryGate);
        ticket.setVehicle(vehicle);
        ticket.setEntryTime(new Date().toDateString())
        ticket.setGeneratedBy(entryGate.getOperator())
        ticket.setParkingLot(parkingLot);


        return ticket;
    }
}