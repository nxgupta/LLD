import { ParkingLotController } from "./controllers/ParkingLot.controller.js";
import { CreateParkingLotRequestDto } from "./dto/CreateParkingLotRequest.dto.js";
import { ObjectRegistry } from "./ObjectRegistry.js";
import { ParkingLotrRepository } from "./repositories/ParkingLot.repository.js";
import { ParkingLotService } from "./services/ParkingLot.service.js";
import { UpadteParkingLotRequestDto } from "./dto/UpadteParkingLotRequest.dto.js";
import { TicketRepository } from "./repositories/Ticket.repository.js";
import { FirstAvailableSpotAssignmentStrategy } from "./strategies/SpotAssignmentStrategy/FirstAvailableSpotAssignmentStrategy.js";
import { TicketService } from "./services/Ticket.service.js";
import { TicketController } from "./controllers/Ticket.controller.js";
import { GenerateTicketRequestDto } from "./dto/GenerateTicketRequest.dto.js";
import { Vehicle } from "./models/Vehicle.js";
import { VehicleType } from "./models/enums/VehicleType.enum.js";
import { EntryGate } from "./models/EntryGate.js";
import { SpotType } from "./models/enums/SpotType.enum.js";

ObjectRegistry.register("ParkingLotRepository", new ParkingLotrRepository());
ObjectRegistry.register("ParkingLotService", new ParkingLotService(ObjectRegistry.get<ParkingLotrRepository>("ParkingLotRepository")));
ObjectRegistry.register("ParkingLotController", new ParkingLotController(ObjectRegistry.get<ParkingLotService>("ParkingLotService")));
ObjectRegistry.register("TicketRepository", new TicketRepository());
ObjectRegistry.register("SpotAssignmentStrategy", new FirstAvailableSpotAssignmentStrategy());
ObjectRegistry.register("TicketService", new TicketService(ObjectRegistry.get("TicketRepository"), ObjectRegistry.get("SpotAssignmentStrategy"), ObjectRegistry.get("ParkingLotRepository")));
ObjectRegistry.register("TicketController", new TicketController(ObjectRegistry.get("TicketService")));
class Client {
    createParkingLot() {
        const request = new CreateParkingLotRequestDto();
        const parkingLotController = ObjectRegistry.get<ParkingLotController>("ParkingLotController");
        request.setAddress('Hyderbad');
        request.setNoOfFloors(8);
        request.setNoOfSpots(25);
        const response = parkingLotController.createParkingLot(request);
        console.log(response.getParkingLot())
    }

    upadteParkingLotAddress() {
        const request = new UpadteParkingLotRequestDto();
        request.setParkingLotId(1);
        request.setAddress("Gachibowli hyderabad")
        const parkingLotController = ObjectRegistry.get<ParkingLotController>("ParkingLotController");
        const response = parkingLotController.updateAddress(request);
        console.log(response)
    }

    createTicket() {
        const request = new GenerateTicketRequestDto();
        let Suzuki = new Vehicle()
        Suzuki.setNumber("TS-XXX-2020");
        Suzuki.setVehicleType(VehicleType.MEDIUM);
        let EntryGate1 = new EntryGate();

        request.setVehicle(Suzuki);
        request.setEntryGate(EntryGate1);
        request.setParkingLotId(1);
        request.setSpotType(SpotType.CAR);

        const ticketController = ObjectRegistry.get<TicketController>("TicketController");
        const response = ticketController.generateTicket(request);
        console.log(response)
    }
}


let client = new Client();
client.createParkingLot();

client.upadteParkingLotAddress();

client.createTicket();
