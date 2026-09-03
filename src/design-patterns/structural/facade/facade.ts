interface IInventory {
    checkStock(itemId: number): boolean
}
interface IPaymentGateway {
    processPayment(price: number): boolean
}
interface IShippingService {
    calculateAndShip(itemId: number): string
}

class OrderFacade {

    constructor(private inventory: IInventory, private payment: IPaymentGateway, private shipping: IShippingService) {

    }

    orderFood(itemId: number, price: number) {
        console.log(`--- Starting Order for Item ${itemId} ---`);
        let isAvailable = this.inventory.checkStock(itemId);
        if (!isAvailable) return "Order failed: Order out of stock"

        let paymentSuccess = this.payment.processPayment(price);
        if (!paymentSuccess) return "Order failed: Payment denied"

        let trackingId = this.shipping.calculateAndShip(itemId);

        console.log(`--- Order Completed Successfully! ---`);
        return { success: true, trackingId };
    }
}

class Inventory implements IInventory {
    checkStock(itemId: number) {
        return true;
    }
}

class PaymentGateway implements IPaymentGateway {
    processPayment(price: number) {
        return true;
    }
}

class ShippingService implements IShippingService {
    calculateAndShip(itemId: number) {
        return "xxxx-xxxx-xxxx"
    }
}

let order = new OrderFacade(new Inventory, new PaymentGateway, new ShippingService);
console.log(order.orderFood(1234, 500));


// Example of how easy it is to test your code now using a mock
const mockFailedInventory: IInventory = {
    checkStock: (itemId: number) => true // Force it to return false
};

const dummyPayment: IPaymentGateway = { processPayment: () => false };
const dummyShipping: IShippingService = { calculateAndShip: () => "test-id" };

// Instantiate with the failed mock
const testOrder = new OrderFacade(mockFailedInventory, dummyPayment, dummyShipping);

// Assert that it safely exits early
console.log(testOrder.orderFood(1234, 500));
// Output: "Order failed: Order out of stock"

