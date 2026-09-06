class Order { constructor(public id: number) { } }
class User { constructor(public email: string) { } }

interface ISubscriber<T> {
    listen(event: Events, data: T): Promise<void>;
}

enum Events {
    'ORDER_PLACED' = "ORDER_PLACED",
    'ORDER_RETURNED' = "ORDER_RETURNED"
}

class Flipkart {
    private subscribers: Map<Events, any[]> = new Map();
    registerSubscriber(event: Events, subscriber: ISubscriber<Order>) {
        if (!this.subscribers.has(event)) {
            this.subscribers.set(event, new Array());
        }
        let subscriberList = this.subscribers.get(event)!;
        if (!subscriberList.includes(subscriber)) subscriberList.push(subscriber)
    }

    async notifier(event: Events, order: Order) {
        let subscriberList = this.subscribers.get(event);
        for (let subscriber of subscriberList!) {
            await subscriber.listen(event, order)
        }
    }

    placeOrder(order: Order) {
        console.log('Placing order for orderId: ', order.id);
        console.log('Order placed');
        console.log('notify subscribers')
        this.notifier(Events.ORDER_PLACED, order);
    }
}


class InvoiceGenerator {
    constructor(private flipkartInstance: Flipkart) {
        this.flipkartInstance.registerSubscriber(Events.ORDER_PLACED, this);
    }
    async listen(event: Events, order: Order): Promise<void> {
        console.log(event, 'event recieved for orderId: ', order.id)
        console.log('Invoice generated sent')
    }
}
class Email implements ISubscriber<Order> {
    async listen(event: Events, order: Order): Promise<void> {
        console.log(event, 'event recieved for orderId: ', order.id)
        console.log('Email sent')
    }
}
class Notification implements ISubscriber<Order> {
    async listen(event: Events, order: Order): Promise<void> {
        console.log(event, 'event recieved for orderId: ', order.id)
        console.log('Notification sent')
    }
}

let observer = new Flipkart()
observer.registerSubscriber(Events.ORDER_PLACED, new Email())
observer.registerSubscriber(Events.ORDER_PLACED, new Notification())
new InvoiceGenerator(observer);

let order = new Order(999);
observer.placeOrder(order);
