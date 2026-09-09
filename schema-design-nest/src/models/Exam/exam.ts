import { Column, Entity } from "typeorm";
import { BaseModel } from "../baseModel.js";

@Entity()
export class Exam extends BaseModel {
    @Column()
    private name: string;
    @Column()
    private duration: number;
}