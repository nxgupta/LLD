import type { Bill } from "../models/Bill.js";

export class BillRepository {
    private bills: Map<number, Bill> = new Map();
    private billId: number = 0;

    public save(bill: Bill): Bill {
        const id = ++this.billId;
        bill.setId(id);
        this.bills.set(id, bill);
        return bill;
    }

    public getById(id: number): Bill | undefined {
        return this.bills.get(id);
    }
}