import { BaseModel } from "./Basemodel.js";
import type { UserStatus } from "./enums/UserStatus.js";
import type { Group } from "./Group.js";

export class User extends BaseModel {
    private _name: string;
    private _phone: string;
    private _password: string;
    private _userStatus: UserStatus;
    private _groups: Group[];

    get name() {
        return this._name;
    }
    set name(username: string) {
        this._name = username;
    }
    get phone() {
        return this._phone;
    }
    set phone(phone: string) {
        this._phone = phone;
    }
    set password(password: string) {
        this._password = password;
    }
    get userStatus() {
        return this._userStatus;
    }

    set userStatus(userStatus: UserStatus) {
        this._userStatus = userStatus;
    }

    get groups() {
        return this._groups;
    }

    set groups(groups: Group[]) {
        this._groups = groups;
    }
}