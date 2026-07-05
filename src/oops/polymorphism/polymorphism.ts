class User {
    email: string;
    password: string;

    changeEmail(): void {
        console.log('Changing email for user');
    }
}
class Mentor extends User {
    company: string;
    description: string;
    rating: number;

    removeMentee(): void {

    }
    changeEmail(): void {
        console.log('Changing email for mentor');
    }
}
class Student extends User {
    batch: string;
    psp: number;
    mentor: Mentor;

    changeBatch(): void {

    } changeEmail(): void {
        console.log('Changing email for student');
    }
}
class TA extends User {
    expertise: string;
    company: string;

    takeHelpRequest() {

    }
    changeEmail(): void {
        console.log('Changing email for TA');
    }
}

function changePass(users: User[]) {
    users.forEach( user => user.changeEmail() );
}

//let user = new TA();
changePass([new User(), new Mentor(), new Student(), new TA()]);


//console.log(user.company)