import type { PaymentGateway } from "./PaymentGateway.js";
import { PaymentStatus } from "./PaymentStatus.js";

//flipkart codebase

class Flipkart {
    private paymentGateway: PaymentGateway; 

    constructor(paymentGateway: PaymentGateway) {
        this.paymentGateway = paymentGateway
    }
    makePaymentViaCC(cardNumber: string, cvv: number, expiryMonth: number, expiryYear: number) {
        let transactionId = this.paymentGateway.payViaCC(cardNumber, cvv, expiryMonth, expiryYear);
        let status = this.paymentGateway.getStatus(transactionId);
        while (status === PaymentStatus.PENDING) {
            console.log("waiting");
            status = this.paymentGateway.getStatus(transactionId);
        }
        if (status === PaymentStatus.SUCCESS) console.log("payment successful")
        else console.log("payment failed");
    }
}

export default Flipkart;