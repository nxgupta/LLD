import { PrimaryGeneratedColumn } from "typeorm";

export class BaseModel {
    @PrimaryGeneratedColumn("increment")
    public id: number;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }
}