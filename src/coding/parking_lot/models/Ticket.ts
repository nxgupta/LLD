import { BaseModel } from "./BaseModel.js";
import type { EntryGate } from "./EntryGate.js";
import type { Operator } from "./Operator.js";
import type { ParkingLot } from "./ParkingLot.js";
import type { ParkingSpot } from "./ParkingSpot.js";
import type { Vehicle } from "./Vehicle.js";

export class Ticket extends BaseModel {
    private entryTime: string;
    private vehicle: Vehicle;
    private parkingSpot: ParkingSpot;
    private generatedBy: Operator;

    private parkingLot: ParkingLot;
    private entryGate: EntryGate;
    private ownerName: string;

    getEntryTime(): string {
        return this.entryTime;
    }

    setEntryTime(entryTime: string): void {
        this.entryTime = entryTime;
    }

    getParkingLot(): ParkingLot {
        return this.parkingLot;
    }

    setParkingLot(parkingLot: ParkingLot): void {
        this.parkingLot = parkingLot;
    }

    getEntryGate(): EntryGate {
        return this.entryGate;
    }

    setEntryGate(entryGate: EntryGate): void {
        this.entryGate = entryGate;
    }

    getOwnerName(): string {
        return this.ownerName;
    }

    setOwnerName(ownerName: string): void {
        this.ownerName = ownerName;
    }

    getVehicle(): Vehicle {
        return this.vehicle;
    }

    setVehicle(vehicle: Vehicle): void {
        this.vehicle = vehicle;
    }

    getParkingSpot(): ParkingSpot {
        return this.parkingSpot;
    }

    setParkingSpot(parkingSpot: ParkingSpot): void {
        this.parkingSpot = parkingSpot;
    }

    getGeneratedBy(): Operator {
        return this.generatedBy;
    }

    setGeneratedBy(generatedBy: Operator): void {
        this.generatedBy = generatedBy;
    }

}