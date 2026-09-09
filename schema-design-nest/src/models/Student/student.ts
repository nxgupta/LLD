import { Column, Entity, ManyToMany } from "typeorm";
import { BaseModel } from "../baseModel.js";
import { Module } from "../Module/module.js";

@Entity()
export class Student extends BaseModel {
    @Column()
    private name: string;
    @Column()
    private email: string;
    @Column()
    private address: string;
    @Column()
    private phoneNumber: string;
    @Column()
    private password: string;
    @ManyToMany(() => Module)
    private enrolledModules: Module[];
}