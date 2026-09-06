
export enum TransportMode {
    Bike = "Bike",
    Car = "Car",
    Walk = "Walk"
}

export interface IPathCalculatorStrategy {
    calculatePath(from: string, to: string): void;
}

class CalculatePathForBike implements IPathCalculatorStrategy {
    calculatePath(from: string, to: string): void {
        console.log(`it will take 45 mins to reach from ${from} to ${to} by bike`)
    }
}
class CalculatePathForCar implements IPathCalculatorStrategy {
    calculatePath(from: string, to: string): void {
        console.log(`it will take 30 mins to reach from ${from} to ${to} by car`)
    }
}
class CalculatePathForWalk implements IPathCalculatorStrategy {
    calculatePath(from: string, to: string): void {
        console.log(`it will take 90 mins to reach from ${from} to ${to} by walk`)
    }
}

export class PathCalculatorStrategyRegistery {
    private registery: Map<TransportMode, IPathCalculatorStrategy> = new Map();
    constructor() {
        this.registery.set(TransportMode.Bike, new CalculatePathForBike)
        this.registery.set(TransportMode.Car, new CalculatePathForCar)
        this.registery.set(TransportMode.Walk, new CalculatePathForWalk)
    }

    getStrategy(mode: TransportMode) {
        let strategy = this.registery.get(mode)
        if (!strategy) throw new Error("Strategy not found")
        return strategy
    }

}

export let pathCalculatorStrategyRegistery = new PathCalculatorStrategyRegistery()
