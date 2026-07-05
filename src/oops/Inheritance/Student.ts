import type Mentor from "./Mentor.js";
import User from "./User.js";

class Student extends User{
    batch: string;
    psp: number;
    mentor: Mentor;
}

export default Student;