import { SpotType } from "../models/enums/SpotType.enum.js";

export class FeeTableHelper {
    private static readonly Hourly_Rate_Map: Record<SpotType, number> = {
        [SpotType.BIKE]: 10,
        [SpotType.CAR]: 15,
        [SpotType.ELECTRIC]: 5,
        [SpotType.HEAVY]: 25,
    }

    private static readonly Base_Fee_Map: Record<SpotType, number> = {
        [SpotType.BIKE]: 5,
        [SpotType.CAR]: 8,
        [SpotType.ELECTRIC]: 3,
        [SpotType.HEAVY]: 10,
    }

    public static getHourlyRate(spotType: SpotType): number {
        return this.Hourly_Rate_Map[spotType];
    }
    public static getBaseRate(spotType: SpotType): number {
        return this.Base_Fee_Map[spotType];
    }
}
