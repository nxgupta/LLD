import type { EntryGate } from "./EntryGate.js";
import type { Operator } from "./Operator.js";
import type { ParkingLot } from "./ParkingLot.js";
import type { Spot } from "./ParkingSpot.js";
import type { Vehicle } from "./Vehicle.js";

export class Ticket {
    constructor(private spot: Spot, private vehicle: Vehicle, private floorNo: number, private entryGate: EntryGate, private operator: Operator, private entryTime: Date, private parkingLot: ParkingLot) { }
}
