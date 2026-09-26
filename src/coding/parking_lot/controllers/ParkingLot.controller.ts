import { CreateParkingLotRequestDto } from "../dto/CreateParkingLotRequest.dto.js";
import { CreateParkingLotResponseDto } from "../dto/CreateParkingLotResponse.dto.js";
import { ResponseStatusDto } from "../dto/ResponseStatus.dto.enum.js";
import { UpadteParkingLotRequestDto } from "../dto/UpadteParkingLotRequest.dto.js";
import { UpadteParkingLotResponseDto } from "../dto/UpadteParkingLotResponse.dto.js";
import { ParkingLot } from "../models/ParkingLot.js";
import { ParkingLotFloor } from "../models/ParkingLotFloor.js";
import { ParkingLotService } from "../services/ParkingLot.service.js";

export class ParkingLotController {
    constructor(private parkingLotService: ParkingLotService, private parkingLot: ParkingLot) {
        this.parkingLotService = parkingLotService
    }
    createParkingLot(request: CreateParkingLotRequestDto): CreateParkingLotResponseDto {
        this.parkingLot.setAddress(request.getAddress())
        const ParkingLotFloors = [];
        for (let i = 0; i < request.getNoOfFloors(); i++) {
            ParkingLotFloors.push(new ParkingLotFloor());
        }
        this.parkingLot.setFloors(ParkingLotFloors)
        let parkingLotResponse = this.parkingLotService.createParkingLot(this.parkingLot);
        let response = new CreateParkingLotResponseDto();
        response.setParkingLot(parkingLotResponse);
        response.setResponseStatus(ResponseStatusDto.SUCCESS)
        return response;
    }

    updateAddress(request: UpadteParkingLotRequestDto): UpadteParkingLotResponseDto {
        const updatedParkingLot = this.parkingLotService.updateParkingLotAddress(request.getParkingLotId(), request.getAddress())!;
        const response = new UpadteParkingLotResponseDto()
        response.setParkingLot(updatedParkingLot);
        response.setResponseStatus(ResponseStatusDto.SUCCESS)
        return response;
    }
}