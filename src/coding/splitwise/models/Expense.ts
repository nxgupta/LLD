import type { ExpenseType } from "./enums/ExpenseType.js";
import type { Group } from "./Group.js";

export class Expense {
    private _amount: number;
    private _description: string;
    private _expenseType: ExpenseType;
    private _participants: User[] = [];
    private _createdBy: User;
    private _group: Group;
    private _currency: string;
    private _createdAt: Date;
    private _paidBy: Map<User, number> = new Map();
    private _owedBy: Map<User, number> = new Map();

    get participants(): User[] {
        return this._participants;
    }

    set participants(participants: User[]) {
        this._participants = participants;
    }

    get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;
    }

    get currency(): string {
        return this._currency;
    }

    set currency(currency: string) {
        this._currency = currency;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(amount: number) {
        this._amount = amount;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(createdAt: Date) {
        this._createdAt = createdAt;
    }

    get paidBy(): Map<User, number> {
        return this._paidBy;
    }

    set paidBy(paidBy: Map<User, number>) {
        this._paidBy = paidBy;
    }

    get owedBy(): Map<User, number> {
        return this._owedBy;
    }

    set owedBy(owedBy: Map<User, number>) {
        this._owedBy = owedBy;
    }

    get createdBy(): User {
        return this._createdBy;
    }

    set createdBy(createdBy: User) {
        this._createdBy = createdBy;
    }
}