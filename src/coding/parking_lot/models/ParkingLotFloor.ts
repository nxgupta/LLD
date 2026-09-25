import { BaseModel } from "./BaseModel.js";
import { ParkingSpot } from "./ParkingSpot.js";

export class ParkingLotFloor extends BaseModel {
    private spots: ParkingSpot[];
    private level: number
}
