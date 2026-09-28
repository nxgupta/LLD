import { Column, Entity, ManyToOne } from "typeorm";
import { SeatType } from "./enums/SeatType.enum.js";
import { Show } from "./Show.js";
import { BaseModel } from "./BaseModel.js";

@Entity()
export class ShowSeatType extends BaseModel {
    @ManyToOne(() => Show, (show) => show.showSeatTypes, { nullable: false, onDelete: "CASCADE" })
    private _show: Show;
    @Column({
        name: "seat_type",
        type: "enum",
        enum: SeatType,
    })
    private _seatType: SeatType;
    @Column({ name: "price", type: "decimal", precision: 10, scale: 2 })

    private _price: number;


    public get show(): Show {
        return this._show;
    }
    public set show(value: Show) {
        this._show = value;
    }

    public get seatType(): SeatType {
        return this._seatType;
    }
    public set seatType(value: SeatType) {
        this._seatType = value;
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
}