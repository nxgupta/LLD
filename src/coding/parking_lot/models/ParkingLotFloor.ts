import { BaseModel } from "./BaseModel.js";
import { ParkingSpot } from "./ParkingSpot.js";

export class ParkingLotFloor extends BaseModel {
    private spots: ParkingSpot[];
    private level: number

    getSpots(): ParkingSpot[] {
        return this.spots;
    }

    setSpots(spots: ParkingSpot[]): void {
        this.spots = spots;
    }

    getLevel(): number {
        return this.level;
    }

    setLevel(level: number): void {
        this.level = level;
    }
}
