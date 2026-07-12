import Flipkart from "./Flipkart.js";
import PayUPaymentGatewayAdapter from "./PayUPaymentGatewayAdapter.js";
import RazorPaymentGatewayAdapter from "./RazorPaymentGatewayAdapter.js";

class Client {
    private flipkartRazorPay = new Flipkart(new RazorPaymentGatewayAdapter());
    private flipkartPayU = new Flipkart(new PayUPaymentGatewayAdapter());
    run(): void{
        this.flipkartPayU.makePaymentViaCC("1111222233334444", 777, 11, 2028);
        this.flipkartRazorPay.makePaymentViaCC("1111222233334444", 777, 11, 2028);
    }
}

const client = new Client();
client.run();