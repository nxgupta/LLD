import { SpotStatus } from "./enums/SpotStatus.enum.js";
import { SpotType } from "./enums/SpotType.enum.js";

export class ParkingSpot {
    private spotNo: number;
    private spotType: SpotType;
    private status: SpotStatus;

    constructor(spotNo: number, spotType: SpotType, status: SpotStatus) {
        this.spotNo = spotNo;
        this.spotType = spotType;
        this.status = status;
    }

    getSpotNo(): number {
        return this.spotNo;
    }

    setSpotNo(spotNo: number): void {
        this.spotNo = spotNo;
    }

    getSpotType(): SpotType {
        return this.spotType;
    }

    setSpotType(spotType: SpotType): void {
        this.spotType = spotType;
    }

    getStatus(): SpotStatus {
        return this.status;
    }

    setStatus(status: SpotStatus): void {
        this.status = status;
    }
}
