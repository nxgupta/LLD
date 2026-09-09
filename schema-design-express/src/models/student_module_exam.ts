import { Entity, ManyToOne } from "typeorm";
import { BaseModel } from "./baseModel.js";
import { ModuleExam } from "./module_exam.js";
import { Student } from "./Student/student.js";

@Entity()
export class StudentModuleExam extends BaseModel {
    @ManyToOne(() => Student)
    private student!: Student;
    @ManyToOne(() => ModuleExam)
    private moduleExam!: ModuleExam;
    private marks?: number;
}