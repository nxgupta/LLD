abstract class User {
    private name: string;
    private password: string;
    private email: string;

    updateEmail(newEmail: string) {
        this.email = newEmail;
    }

    updatePassword(newPassword: string) {
        this.password = newPassword;
    }

    abstract saysomething():void;
}

export default User;