import { Column, Entity } from "typeorm";
import { BaseModel } from "../baseModel.js";

@Entity()
export class Exam extends BaseModel {
    @Column({ type: "varchar" })
    private name!: string;
    @Column({ type: "int" })
    private duration!: number;
}