import { SpotStatus } from "../models/enums/SpotStatus.enum.js";
import { SpotType } from "../models/enums/SpotType.enum.js";
import { ParkingLot } from "../models/ParkingLot.js";
import { ParkingLotFloor } from "../models/ParkingLotFloor.js";
import { ParkingSpot } from "../models/ParkingSpot.js";
import { ParkingLotrRepository } from "../repositories/ParkingLot.repository.js";

export class ParkingLotService {
    constructor(private parkingLotrRepository: ParkingLotrRepository) {

    }
    createParkingLot(address: string, noOfFloors: number, noOfSpots: number): ParkingLot {
        const parkingLot = new ParkingLot();
        parkingLot.setAddress(address)
        const floors: ParkingLotFloor[] = [];
        for (let i = 0; i < noOfFloors; i++) {
            const floor = new ParkingLotFloor()
            floor.setLevel(i);
            const spots: ParkingSpot[] = [];
            for (let s = 0; s < noOfSpots; s++) {
                const type = s % 2 === 0 ? SpotType.CAR : SpotType.ELECTRIC;
                spots.push(new ParkingSpot(s, type, SpotStatus.AVIALABLE))
            }
            floor.setSpots(spots);
            floors.push(floor);
        }
        parkingLot.setFloors(floors);
        parkingLot.setNoOfFloors(noOfFloors);
        return this.parkingLotrRepository.save(parkingLot);
    }

    updateParkingLotAddress(id: number, address: string): ParkingLot {
        const parkingLot = this.parkingLotrRepository.getById(id)
        parkingLot.setAddress(address);
        return this.parkingLotrRepository.update(id, parkingLot);
    }
} 