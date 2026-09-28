import { Column, Entity } from "typeorm";
import { BaseModel } from "./BaseModel.js";

@Entity()
export class User extends BaseModel {

    @Column({ name: "email", type: "varchar", length: 255, unique: true })
    private _email: string;

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
}