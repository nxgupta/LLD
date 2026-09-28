import { PrimaryGeneratedColumn } from "typeorm";

export class BaseModel {
    @PrimaryGeneratedColumn("increment")
    private id: string;

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }
}