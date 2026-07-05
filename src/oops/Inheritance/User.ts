class User{
    private _name: string;
    private _password: string;
    private _email: string;
    
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    updateEmail(newEmail: string) {
        this.email = newEmail;
    }

    updatePassword(newPassword: string) {
        this.password = newPassword;
    }
}

export default User;





