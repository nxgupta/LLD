import { User } from "./User.js";

export class Group {
    private _name!: string;
    private _participants: User[] = [];
    private _admins: User[] = [];
    private _createdBy!: User;
    private _createdAt = new Date();

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get participants(): User[] {
        return this._participants;
    }

    set participants(participants: User[]) {
        this._participants = participants;
    }

    get admins(): User[] {
        return this._admins;
    }

    set admins(admins: User[]) {
        this._admins = admins;
    }

    get createdBy(): User {
        return this._createdBy;
    }

    set createdBy(createdBy: User) {
        this._createdBy = createdBy;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(createdAt: Date) {
        this._createdAt = createdAt;
    }
}