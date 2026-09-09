import { Column, Entity, ManyToOne } from "typeorm";
import { BaseModel } from "./baseModel.js";
import { Exam } from "./Exam/exam.js";
import { Module } from "./Module/module.js";

@Entity()
export class ModuleExam extends BaseModel {
    @ManyToOne(() => Module)
    private module: Module;
    @ManyToOne(() => Exam)
    private exam: Exam
    @Column()
    private dateOfExam: Date;
}