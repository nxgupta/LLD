import type { User } from "../models/User.js";

export class CreateUserResponseDto {
    private _user: User;

    get user(): User {
        return this._user;
    }

    set user(user: User) {
        this._user = user;
    }

}