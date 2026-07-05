import { stringify } from "node:querystring";
import type Student from "./Student.js";
import User from "./User.js";

class Mentor extends User{
    private _mentees: [Student];
    private _description: string;
    
    public get mentees(): [Student] {
        return this._mentees;
    }
    public set mentees(value: [Student]) {
        this._mentees = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        if (value.length > 5) throw new Error('Out of boound');
        this._description = value;
    }
}

export default Mentor;