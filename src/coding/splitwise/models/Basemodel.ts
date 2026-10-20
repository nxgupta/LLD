import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseModel {
    @PrimaryGeneratedColumn("increment")
    private _id: number;

    @CreateDateColumn()
    private _createdAt: Date;

    @UpdateDateColumn()
    private _lastModifiedAt: Date;

    get id() {
        return this._id;
    }

    get createdAt() {
        return this._createdAt;
    }

    get lastModifiedAt() {
        return this._lastModifiedAt;
    }
}