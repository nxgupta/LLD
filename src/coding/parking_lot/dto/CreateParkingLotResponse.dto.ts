import type { ParkingLot } from "../models/ParkingLot.js";
import type { ResponseStatusDto } from "./ResponseStatus.dto.enum.js";

export class CreateParkingLotResponseDto {
    private parkingLot: ParkingLot;
    private responseStatus: number;

    public getParkingLot() {
        return this.parkingLot;
    }

    public setParkingLot(parkingLot: ParkingLot) {
        this.parkingLot = parkingLot;
    }

    public getResponseStatus(): ResponseStatusDto {
        return this.responseStatus;
    }

    public setResponseStatus(responseStatus: ResponseStatusDto) {
        this.responseStatus = responseStatus;
    }
}