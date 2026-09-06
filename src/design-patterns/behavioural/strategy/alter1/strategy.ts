enum TransportMode {
    Bike = "Bike",
    Car = "Car",
    Walk = "Walk"
}

interface IPathCalculatorStrategy {
    calculatePath(from: string, to: string): void;
}

interface IPathCalculatorFactory {
    getStrategy(mode: TransportMode): IPathCalculatorStrategy;
}



class GoogleMaps {
    private factory = new PathCalculatorFactory();
    pathCalculator(from: string, to: string, mode: TransportMode) {
        console.log(`Calculating path from ${from} to ${to} using ${mode}`);
        let strategy = this.factory.getStrategy(mode);
        strategy.calculatePath(from, to);
    }
}

let map = new GoogleMaps();
map.pathCalculator('Delhi', "Noida", TransportMode.Car);






class PathCalculatorFactory implements IPathCalculatorFactory {
    getStrategy(mode: TransportMode): IPathCalculatorStrategy {
        switch (mode) {
            case "Bike":
                return new CalculatePathForBike();
            case "Car":
                return new CalculatePathForCar()
            default:
                throw new Error("Invalid mode")
        }
    }
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



