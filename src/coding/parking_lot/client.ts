import { ParkingLotController } from "./controllers/ParkingLot.controller.js";
import { CreateParkingLotRequestDto } from "./dto/CreateParkingLotRequest.dto.js";

class Client {
    createParkingLot() {
        const parkingLotService = new Parkinglo
        const parkingLotController = new ParkingLotController();
        const request = new CreateParkingLotRequestDto();
        request.setAddress('Hyderbad');
        request.setNoOfFloors(8);

        const response = parkingLotController.createParkingLot(request);

        console.log(response.getParkingLot())
    }
}