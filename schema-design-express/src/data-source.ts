import dotenv from "dotenv";
dotenv.config();

import { DataSource } from "typeorm";
import { Student } from "./models/Student/student";
import { Exam } from "./models/Exam/exam";
import { Module } from "./models/Module/module";
import { StudentModuleExam } from "./models/student_module_exam";
import { ModuleExam } from "./models/module_exam";
import { BaseModel } from "./models/baseModel";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "xxx",
    synchronize: true, // Set to false in production
    logging: true,
    entities: [Student, Exam, Module, StudentModuleExam, ModuleExam, BaseModel],
    migrations: [],
    subscribers: [],
})