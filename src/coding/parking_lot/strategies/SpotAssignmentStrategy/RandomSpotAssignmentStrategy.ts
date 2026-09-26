import type { EntryGate } from "../../models/EntryGate.js";
import { SpotStatus } from "../../models/enums/SpotStatus.enum.js";
import type { SpotType } from "../../models/enums/SpotType.enum.js";
import type { ParkingLot } from "../../models/ParkingLot.js";
import type { ParkingSpot } from "../../models/ParkingSpot.js";
import type { SpotAssignmentStrategy } from "./SpotAssignment.strategy.js";

export class RandomSpotAssignmentStrategy implements SpotAssignmentStrategy {
    assignSpot(parkingLot: ParkingLot, spotType: SpotType, entryGate: EntryGate): ParkingSpot | null {
        for (const floor of parkingLot.getFloors()) {
            for (const spot of floor.getSpots()) {
                if (spot.getStatus() === SpotStatus.AVIALABLE) {
                    return spot;
                }
            }
        }
        return null;
    }
}