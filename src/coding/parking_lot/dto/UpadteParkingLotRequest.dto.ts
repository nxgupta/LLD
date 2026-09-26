export class UpadteParkingLotRequestDto {
    private parkingLotId: number;
    private address: string;

    getParkingLotId(): number {
        return this.parkingLotId;
    }

    setParkingLotId(parkingLotId: number): void {
        this.parkingLotId = parkingLotId;
    }

    getAddress(): string {
        return this.address;
    }

    setAddress(address: string): void {
        this.address = address;
    }
}