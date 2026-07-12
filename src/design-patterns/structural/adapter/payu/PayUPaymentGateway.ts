import { PayUPaymentStatus } from "./PayUPaymentStatus.js";

class PayUGateway {
    PayByCreditCard(cardNumber: bigint, cvv: bigint, expiry: bigint): string{
        console.log("Payment done by PayU")
        return "123"
    }
    checkPaymentStatus(id: string):PayUPaymentStatus{
        return PayUPaymentStatus.SUCCESS
    }
}

export default PayUGateway;