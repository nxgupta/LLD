export class CreateParkingLotRequestDto {
    private address: string;
    private noOfFloors: number;
    private noOfSpots: number;
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

    getNoOfSpots(): number {
        return this.noOfSpots;
    }

    setNoOfSpots(value: number) {
        this.noOfSpots = value;
    }
}