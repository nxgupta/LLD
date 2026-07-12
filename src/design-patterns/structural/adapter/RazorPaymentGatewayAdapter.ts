import type { PaymentGateway } from "./PaymentGateway.js";
import { PaymentStatus } from "./PaymentStatus.js";
import RazorPayGateway from "./razorpay/RazorPayGateway.js";
import { RazorPayPaymentStatus } from "./razorpay/RazorPayPaymentStatus.js";

class RazorPaymentGatewayAdapter implements PaymentGateway{
    private razorPayGateway = new RazorPayGateway(); 


    payViaCC(cardNumber: string, cvv: number, expiryMonth: number, expiryYear: number): string {
        let cvvString = String(cvv);
        let expiry = `${expiryMonth}/${expiryYear}`
        return this.razorPayGateway.payByCreditCard(cardNumber, cvvString, expiry);
    }
    getStatus(id: string): PaymentStatus {
        const result = this.razorPayGateway.checkPaymentStatus(String(id));
        switch (result) {
            case RazorPayPaymentStatus.SUCCESS: return PaymentStatus.SUCCESS;
            case RazorPayPaymentStatus.PENDING: return PaymentStatus.PENDING;
            default: return PaymentStatus.FAILURE;
        } 
    }
    
}
 
export default RazorPaymentGatewayAdapter;