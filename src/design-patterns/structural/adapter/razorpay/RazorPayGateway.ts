import { RazorPayPaymentStatus } from "./RazorPayPaymentStatus.js";

// razorpay services
class RazorPayGateway {
    payByCreditCard(creditCard: string, cvvString: string, expiry: string): string {
        console.log("payment done by razropay"); 
        return "123"
    }

    checkPaymentStatus(id: string): RazorPayPaymentStatus {
        return RazorPayPaymentStatus.SUCCESS;
    }
}

export default RazorPayGateway