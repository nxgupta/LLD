import { Column, Entity } from "typeorm";
import { BaseModel } from "../baseModel.js";

@Entity()
export class Module extends BaseModel {
    @Column()
    private name: string;
}