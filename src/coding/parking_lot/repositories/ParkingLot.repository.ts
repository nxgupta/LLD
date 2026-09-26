import { randomUUID } from "node:crypto";
import type { ParkingLot } from "../models/ParkingLot.js";

export class ParkingLotrRepository {
    private parkingLots: Map<string, ParkingLot> = new Map();

    public save(parkingLot: ParkingLot): ParkingLot {
        const parkingLotId = randomUUID()
        parkingLot.setId(parkingLotId);
        this.parkingLots.set(parkingLotId, parkingLot);
        return parkingLot;
    }
}