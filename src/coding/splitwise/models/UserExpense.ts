import type { UserExpenseType } from "./enums/UserExpenseType.js";
import type { Expense } from "./Expense.js";

export class UserExpense {
    private _user: User;
    private _expense: Expense;
    private _userExpenseType: UserExpenseType;
    private _amount: number;

    get user(): User {
        return this._user;
    }

    set user(user: User) {
        this._user = user;
    }

    get expense(): Expense {
        return this._expense;
    }

    set expense(expense: Expense) {
        this._expense = expense;
    }

    get userExpenseType(): UserExpenseType {
        return this._userExpenseType;
    }

    set userExpenseType(userExpenseType: UserExpenseType) {
        this._userExpenseType = userExpenseType;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(amount: number) {
        this._amount = amount;
    }

}