import type { PaymentGateway } from "./PaymentGateway.js";
import { PaymentStatus } from "./PaymentStatus.js";
import PayUGateway from "./payu/PayUPaymentGateway.js";
import { PayUPaymentStatus } from "./payu/PayUPaymentStatus.js";

class PayUPaymentGatewayAdapter implements PaymentGateway{
    private payUGateway= new PayUGateway();
    payViaCC(cardNumber: string, cvv: number, expiryMonth: number, expiryYear: number): string {
        const expiry = `${expiryMonth}${expiryYear}`;
        return this.payUGateway.PayByCreditCard(BigInt(cardNumber), BigInt(cvv), BigInt(expiry));
    }
    getStatus(id: string): PaymentStatus {
        let status = this.payUGateway.checkPaymentStatus(id);
        switch (status) {
            case PayUPaymentStatus.SUCCESS: return PaymentStatus.SUCCESS;
            case PayUPaymentStatus.PENDING: return PaymentStatus.PENDING;
            default: return PaymentStatus.FAILURE;
        }
    }
}
export default PayUPaymentGatewayAdapter;