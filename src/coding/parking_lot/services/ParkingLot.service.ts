import { ParkingLot } from "../models/ParkingLot.js";
import { ParkingLotrRepository } from "../repositories/ParkingLot.repository.js";

export class ParkingLotService {
    constructor(private parkingLotrRepository: ParkingLotrRepository) {

    }
    createParkingLot(parkingLot: ParkingLot): ParkingLot {
        return this.parkingLotrRepository.save(parkingLot);
    }
} 