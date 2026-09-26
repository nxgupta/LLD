import type { EntryGate } from "../models/EntryGate.js";
import type { SpotType } from "../models/enums/SpotType.enum.js";
import type { Vehicle } from "../models/Vehicle.js";

export class GenerateTicketRequestDto {
    private vehicle: Vehicle;
    private entryGate: EntryGate;
    private parkingLotId: number;
    private spotType: SpotType;

    getVehicle(): Vehicle {
        return this.vehicle;
    }

    setVehicle(vehicle: Vehicle): void {
        this.vehicle = vehicle;
    }

    getEntryGate(): EntryGate {
        return this.entryGate;
    }

    setEntryGate(entryGate: EntryGate): void {
        this.entryGate = entryGate;
    }

    getParkingLotId(): number {
        return this.parkingLotId;
    }

    setParkingLotId(parkingLotId: number): void {
        this.parkingLotId = parkingLotId;
    }

    getSpotType(): SpotType {
        return this.spotType;
    }

    setSpotType(spotType: SpotType): void {
        this.spotType = spotType;
    }
}