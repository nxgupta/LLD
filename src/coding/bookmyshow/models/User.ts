export class User extends BaseModel {
    private email: Email;

    getEmail(): Email {
        return this.email;
    }

    setEmail(email: Email): void {
        this.email = email;
    }
}