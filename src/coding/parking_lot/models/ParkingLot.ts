import { BaseModel } from "./BaseModel.js";
import type { DisplayBoard } from "./DisplayBoard.js";
import type { EntryGate } from "./EntryGate.js";
import type { ParkingLotFloor } from "./ParkingLotFloor.js";

export class ParkingLot extends BaseModel {
    private floors: ParkingLotFloor[] = [];
    private entryGates: EntryGate[] = [];
    private exitGates: EntryGate[] = [];
    private displayBoard: DisplayBoard
    private address: string;
    private noOfFloors: number;

    public getEntryGates(): EntryGate[] {
        return this.entryGates;
    }

    public setEntryGates(entryGates: EntryGate[]): void {
        this.entryGates = entryGates;
    }

    public getExitGates(): EntryGate[] {
        return this.exitGates;
    }

    public setExitGates(exitGates: EntryGate[]): void {
        this.exitGates = exitGates;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getFloors(): ParkingLotFloor[] {
        return this.floors;
    }

    public setFloors(floors: ParkingLotFloor[]): void {
        this.floors = floors;
    }

    public setNoOfFloors(levels: number) {
        this.noOfFloors = levels;
    }
    public getNoOfFloors(): number {
        return this.noOfFloors;
    }


}