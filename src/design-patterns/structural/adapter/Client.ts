import Flipkart from "./Flipkart.js";
import RazorPaymentGatewayAdapter from "./RazorPaymentGatewayAdapter.js";

class Client{
    private flipkart = new Flipkart(new RazorPaymentGatewayAdapter());
}

//implement payuadapter
//implement billdesk