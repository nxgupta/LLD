import { PassThrough } from "node:stream";
import { ParkingLotController } from "./controllers/ParkingLot.controller.js";
import { CreateParkingLotRequestDto } from "./dto/CreateParkingLotRequest.dto.js";
import { ParkingLot } from "./models/ParkingLot.js";
import { ObjectRegistry } from "./ObjectRegistry.js";
import { ParkingLotrRepository } from "./repositories/ParkingLot.repository.js";
import { ParkingLotService } from "./services/ParkingLot.service.js";

class Client {
    createParkingLot() {
        ObjectRegistry.register("ParkingLot", new ParkingLot());
        ObjectRegistry.register("ParkingLotRepository", new ParkingLotrRepository());
        ObjectRegistry.register("ParkingLotService", new ParkingLotService(ObjectRegistry.get<ParkingLotrRepository>("ParkingLotRepository")));
        ObjectRegistry.register("ParkingLotController", new ParkingLotController(ObjectRegistry.get<ParkingLotService>("ParkingLotService"), ObjectRegistry.get<ParkingLot>("ParkingLot")));
        const request = new CreateParkingLotRequestDto();
        const parkingLotController = ObjectRegistry.get<ParkingLotController>("ParkingLotController");
        request.setAddress('Hyderbad');
        request.setNoOfFloors(8);
        const response = parkingLotController.createParkingLot(request);
        console.log(response.getParkingLot())
    }
}

new Client().createParkingLot()