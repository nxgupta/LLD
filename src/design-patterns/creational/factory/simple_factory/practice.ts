interface PaymentProcessor {
    process(amount: number): void;
}

class PayPalProcessor implements PaymentProcessor {
    process(amount: number): void {
        console.log('paypal transfer', amount)
    }
}
class StripeProcessor implements PaymentProcessor {
    process(amount: number): void {
        console.log('Stripe transfer', amount)
    }
}

class PaymentProcessorFactory {
    public static createPaymentProcessor(type: 'paypal' | 'stripe'): PaymentProcessor {
        switch (type) {
            case 'stripe':
                return new StripeProcessor();
            case 'paypal':
                return new PayPalProcessor();
            default:
                throw new Error("❌ Unknown Payment Processor")
        }
    }
}
const paymentProcessor = PaymentProcessorFactory.createPaymentProcessor('paypal');
paymentProcessor.process(25000)