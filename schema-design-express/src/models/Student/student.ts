import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseModel } from "../baseModel.js";
import { Module } from "../Module/module.js";

@Entity()
export class Student extends BaseModel {
    @Column({ type: "varchar" })
    private name!: string;
    @Column({ type: "varchar" })
    private email!: string;
    @Column({ type: "varchar" })
    private address!: string;
    @Column({ type: "varchar" })
    private phoneNumber!: string;
    @Column({ type: "varchar" })
    private password!: string;
    @ManyToMany(() => Module, (module) => module.enrolledStudents)
    @JoinTable()
    public enrolledModules!: Module[];
}