import type { PaymentStatus } from "./PaymentStatus.js";

// clients services
export interface PaymentGateway{
    payViaCC(cardNumber: string, cvv: number, expiryMonth: number, expiryYear: number): string;
    
    getStatus(id: string): PaymentStatus;
} 
