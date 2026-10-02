export class CreateUserRequestDto {
    private _email: string;

    public get email() {
        return this._email;
    }
    public set email(email: string) {
        this._email = email;
    }
}