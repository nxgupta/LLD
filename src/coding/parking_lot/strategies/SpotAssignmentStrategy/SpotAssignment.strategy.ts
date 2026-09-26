import type { EntryGate } from "../../models/EntryGate.js";
import type { SpotType } from "../../models/enums/SpotType.enum.js";
import type { ParkingLot } from "../../models/ParkingLot.js";
import type { ParkingSpot } from "../../models/ParkingSpot.js";

export interface SpotAssignmentStrategy {
    assignSpot(parkingLot: ParkingLot,
        spotType: SpotType,
        entryGate: EntryGate): ParkingSpot | null;
}