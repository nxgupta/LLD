interface PaymentProcessor {
    process(amount: number): void;
}

class PayPalProcessor implements PaymentProcessor {
    process(amount: number): void {
        console.log('payment processed for amount', amount, 'by paypal');
    }
}
class StripeProcessor implements PaymentProcessor {
    process(amount: number): void {
        console.log('payment processed for amount', amount, ' by strip');
    }
}

abstract class PaymentCreator {
    abstract paymentProcessor(): PaymentProcessor;
    handleInvoiceAndPay(amount: number) {
        let processor = this.paymentProcessor();
        processor.process(amount)
    }
}

class PayPalCreator extends PaymentCreator {
    paymentProcessor(): PaymentProcessor {
        return new PayPalProcessor()
    }
}

const paymentGateway: PaymentCreator = new PayPalCreator();
paymentGateway.handleInvoiceAndPay(45000)