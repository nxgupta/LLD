import type { GenerateBillRequest } from "../dto/GenerateBillRequest.dto.js";
import { GenerateBillResponse } from "../dto/GenerateBillResponse.dto.js";
import type { BillService } from "../services/Bill.service.js";

export class BillContoller {
    constructor(private billService: BillService) { }
    public generateBill(request: GenerateBillRequest): GenerateBillResponse {
        const bill = this.billService.generateBill(request.getTicket());
        const response = new GenerateBillResponse();
        response.setAmount(bill)
        return response;
    }
}