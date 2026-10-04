import { MakePaymentResponseDto } from "../dtos/MakePaymentResponse.dto.js";
import type { PaymentService } from "../services/Payment.service.js";
import { PaymentMethod } from "../models/enums/PaymentMethod.enum.js";

export class PaymentController {
    constructor(private paymentService: PaymentService) { }

    async makePayment(
        ticketId: number,
        amount: number,
        method: PaymentMethod = PaymentMethod.UPI
    ): Promise<MakePaymentResponseDto> {
        const response = new MakePaymentResponseDto();
        try {
            const payment = await this.paymentService.makePayment(ticketId, amount, method);
            response.payment = payment;
            response.status = "SUCCESS";
        } catch (error) {
            console.error("Payment failed:", error);
            response.status = "FAILURE";
            response.errorMessage = error instanceof Error ? error.message : String(error);
        }
        return response;
    }
}