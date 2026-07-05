import Instructor from "./Instructor.js";
import Mentor from "./Mentor.js";
import User from "./User.js";

let instructor = new Instructor();
instructor.name = 'Naman';
instructor.description = "Super cool";

let user = new User();
user.name = "Karthik";

let mentor = new Mentor();
mentor.name = "Abhimanyu";
mentor.description = "Boss";
mentor.email = "Abhimanyu@scaler.com";

console.log(mentor, user, instructor)
