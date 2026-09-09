import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { Student } from './models/Student/student.js';
import { ModuleExam } from './models/module_exam.js';
import { Exam } from './models/Exam/exam.js';
import { Module as ModuleEntitiy } from './models/Module/module.js';
import { StudentModuleExam } from './models/student_module_exam.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Student, ModuleEntitiy, Exam, ModuleExam, StudentModuleExam])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
