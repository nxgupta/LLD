import type { ParkingLot } from "../models/ParkingLot.js";
import { ResponseDto } from "./ResponseDto.dto.js";

export class UpadteParkingLotResponseDto extends ResponseDto {
    private parkingLot: ParkingLot;

    getParkingLot(): ParkingLot {
        return this.parkingLot;
    }

    setParkingLot(parkingLot: ParkingLot): void {
        this.parkingLot = parkingLot;
    }
}