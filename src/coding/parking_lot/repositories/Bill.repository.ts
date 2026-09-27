export class BillRepository {
    private bills: Map<number, number> = new Map();
    public save(ticketId: number, amount: number) {
        this.bills.set(ticketId, amount);
        return;
    }
}