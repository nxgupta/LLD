import type { EntityManager } from "typeorm";
import { Payment } from "../models/Payment.js";
import { AppDataSource } from "../data-source.js";

export class PaymentRepository {
    private repo = AppDataSource.getRepository(Payment);

    async save(payment: Payment, entityManager?: EntityManager): Promise<Payment> {
        const repository = entityManager ? entityManager.getRepository(Payment) : this.repo;
        return await repository.save(payment);
    }
}