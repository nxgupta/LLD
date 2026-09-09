import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseModel } from "../baseModel.js";
import { Student } from "../Student/student.js";

@Entity()
export class Module extends BaseModel {
    @Column({ type: "varchar" })
    private name!: string;
    @ManyToMany(() => Student, (student) => student.enrolledModules)
    public enrolledStudents!: Student[];
}