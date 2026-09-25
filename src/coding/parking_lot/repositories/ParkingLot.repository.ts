import { randomUUID } from "node:crypto";
import type { ParkingLot } from "../models/ParkingLot.js";

export class ParkingLotrRepository {
    private parkingLots: Map<string, ParkingLot>;
    private parkingLotId = randomUUID();

    public save(parkingLot: ParkingLot): ParkingLot {
        this.parkingLots.set(this.parkingLotId, parkingLot);
        return parkingLot;
    }


}