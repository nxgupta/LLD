interface PaymentProcessor {
    process(amount: number): void;
}
interface TaxCalculator {
    calculateTax(amount: number): number;
}

class UsPaymentProcessor implements PaymentProcessor {
    process(amount: number): void {
        console.log(`🇺🇸 Processing USD $${amount} via Stripe US Core`);
    }
}

class UsTaxCalculator implements TaxCalculator {
    calculateTax(amount: number): number {
        return amount * 0.08;
    }
}

class UkPaymentProcessor implements PaymentProcessor {
    process(amount: number): void {
        console.log(`🇺🇸 Processing GBP $${amount} via Stripe UK/Barclays`);
    }
}

class UKTaxCalculator implements TaxCalculator {
    calculateTax(amount: number): number {
        return amount * 0.20;
    }
}

interface RegionalFinancialFactory {
    createProcessor(): PaymentProcessor;
    createTaxCalculator(): TaxCalculator;
}

class USFinancialFactory implements RegionalFinancialFactory {
    createProcessor(): PaymentProcessor {
        return new UsPaymentProcessor()
    }
    createTaxCalculator(): TaxCalculator {
        return new UsTaxCalculator()
    }
}
class UKFinancialFactory implements RegionalFinancialFactory {
    createProcessor(): PaymentProcessor {
        return new UkPaymentProcessor()
    }
    createTaxCalculator(): TaxCalculator {
        return new UKTaxCalculator()
    }
}

class checkOutSystem {
    private processor: PaymentProcessor;
    private taxCalculator: TaxCalculator;

    constructor(regionalFactory: RegionalFinancialFactory) {
        this.processor = regionalFactory.createProcessor()
        this.taxCalculator = regionalFactory.createTaxCalculator()
    }
    public executeCheckout(baseAmount: number) {
        const tax = this.taxCalculator.calculateTax(baseAmount);
        const total = baseAmount + tax;

        console.log(`--- Invoice Calculations ---`);
        console.log(`Base: ${baseAmount} | Added Tax: ${tax} | Total: ${total}`);
        this.processor.process(total);
    }
}

new checkOutSystem(new USFinancialFactory()).executeCheckout(1000)
new checkOutSystem(new UKFinancialFactory()).executeCheckout(1000)