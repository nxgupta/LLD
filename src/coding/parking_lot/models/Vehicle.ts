import type { VehicleType } from "./enums/VehicleType.enum.js";

export class Vehicle {
    private number: string;
    private vehicleType: VehicleType;

    getNumber(): string {
        return this.number;
    }

    setNumber(number: string): void {
        this.number = number;
    }

    getVehicleType(): VehicleType {
        return this.vehicleType;
    }

    setVehicleType(vehicleType: VehicleType): void {
        this.vehicleType = vehicleType;
    }
}
