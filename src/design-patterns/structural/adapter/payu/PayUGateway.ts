import { PayUPaymentStatus } from "./PayUPaymentStatus.js";

class PayUGateway{
    makeCCPayment(creditCard: bigint, cvvString: bigint, expiry: bigint): string {
        console.log("payment done by razropay");
        return "123"
    }

    checkPaymentStatus(id: string): PayUPaymentStatus {
        return PayUPaymentStatus.FAILURE
    }
}

export default PayUGateway;