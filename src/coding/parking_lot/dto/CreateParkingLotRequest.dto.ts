export class CreateParkingLotRequestDto {
    private address: string;
    private noOfFloors: number;

    getAddress(): string {
        return this.address;
    }

    setAddress(value: string) {
        this.address = value;
    }

    getNoOfFloors(): number {
        return this.noOfFloors;
    }

    setNoOfFloors(value: number) {
        this.noOfFloors = value;
    }
}