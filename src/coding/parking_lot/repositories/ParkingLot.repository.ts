import type { ParkingLot } from "../models/ParkingLot.js";

export class ParkingLotrRepository {
    private parkingLots: Map<number, ParkingLot> = new Map();
    private parkingLotId: number = 0;

    public save(parkingLot: ParkingLot): ParkingLot {
        const parkingLotId = ++this.parkingLotId;
        parkingLot.setId(parkingLotId);
        this.parkingLots.set(parkingLotId, parkingLot);
        return parkingLot;
    }

    public getById(id: number): ParkingLot {
        const parkingLot = this.parkingLots.get(id);
        if (!parkingLot) throw new Error("Id isn't found")
        return parkingLot
    }

    public update(id: number, updatedParkingLot: ParkingLot): ParkingLot {
        this.parkingLots.set(id, updatedParkingLot);
        return this.parkingLots.get(id)!;
    }
}