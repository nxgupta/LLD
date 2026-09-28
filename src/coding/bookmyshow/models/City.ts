import { Column, Entity, JoinTable, OneToMany } from "typeorm";
import { BaseModel } from "./BaseModel.js";
import { Theatre } from "./Theatre.js";

@Entity()
export class City extends BaseModel {
    @Column({ name: "name", type: "varchar", length: 120 })
    private _name: string;

    @OneToMany(() => Theatre, (theatre) => theatre.city)
    private _theatres: Theatre[];

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get theatres(): Theatre[] {
        return this._theatres;
    }
    public set theatres(value: Theatre[]) {
        this._theatres = value;
    }
}