import User from "./User.js";

class Student extends User {
    batch: string;
    psp: number;

    saysomething(): void {
        console.log('I am student')
    }
}

let student: Student = new Student();
student.updateEmail('@')
console.log(student)