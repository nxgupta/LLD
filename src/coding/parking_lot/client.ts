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
import { BillRepository } from "./repositories/Bill.repository.js";
import { BillService } from "./services/Bill.service.js";
import { TimeAndVehicleTypeFeeCalculationStrategy } from "./strategies/FeeCalculationStrategy/TimeAndVehicleTypeFeeCalculation.strategy.js";
import { FeeCalculationStrategy } from "./strategies/FeeCalculationStrategy/FeeCalculation.strategy.js";
import type { Ticket } from "./models/Ticket.js";
import { BillContoller } from "./controllers/Bill.contoller.js";
import { GenerateBillRequest } from "./dto/GenerateBillRequest.dto.js";

ObjectRegistry.register("ParkingLotRepository", new ParkingLotrRepository());
ObjectRegistry.register("ParkingLotService", new ParkingLotService(ObjectRegistry.get<ParkingLotrRepository>("ParkingLotRepository")));
ObjectRegistry.register("ParkingLotController", new ParkingLotController(ObjectRegistry.get<ParkingLotService>("ParkingLotService")));
ObjectRegistry.register("TicketRepository", new TicketRepository());
ObjectRegistry.register("SpotAssignmentStrategy", new FirstAvailableSpotAssignmentStrategy());
ObjectRegistry.register("FeeCalculationStrategy", new TimeAndVehicleTypeFeeCalculationStrategy());
ObjectRegistry.register("TicketService", new TicketService(ObjectRegistry.get("TicketRepository"), ObjectRegistry.get("SpotAssignmentStrategy"), ObjectRegistry.get("ParkingLotRepository")));
ObjectRegistry.register("TicketController", new TicketController(ObjectRegistry.get("TicketService")));
ObjectRegistry.register("BillRepository", new BillRepository());
ObjectRegistry.register("BillService", new BillService(ObjectRegistry.get<BillRepository>('BillRepository'), ObjectRegistry.get<FeeCalculationStrategy>("FeeCalculationStrategy")));
ObjectRegistry.register("BillContoller", new BillContoller(ObjectRegistry.get<BillService>('BillService')))

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
        console.log("Ticket Generated: Spot assigned =", response.getTicket()?.getParkingSpot()?.getSpotNo());
        return response.getTicket();
    }

    checkoutVehicle(ticket: Ticket) {
        console.log("\n--- Checking out vehicle ---");
        console.log("Spot status before checkout:", ticket.getParkingSpot().getStatus());
        const request = new GenerateBillRequest();
        request.setTicket(ticket);
        const billCOntroller = ObjectRegistry.get<BillContoller>('BillContoller');
        const bill = billCOntroller.generateBill(request);
        console.log("Bill generated! Amount to pay:", bill.getAmount());
        console.log("Spot status after checkout:", ticket.getParkingSpot().getStatus());
    }
}


let client = new Client();
client.createParkingLot();

client.upadteParkingLotAddress();

const ticket = client.createTicket();

client.checkoutVehicle(ticket)
