import { pathCalculatorStrategyRegistery, TransportMode } from "./registery";

class GoogleMaps {
    private factory = pathCalculatorStrategyRegistery;
    pathCalculator(from: string, to: string, mode: TransportMode) {
        console.log(`Calculating path from ${from} to ${to} using ${mode}`);
        let strategy = this.factory.getStrategy(mode);
        strategy.calculatePath(from, to);
    }
}

let map = new GoogleMaps();
map.pathCalculator('Delhi', "Noida", TransportMode.Bike);
map.pathCalculator('Delhi', "Noida", TransportMode.Car);
map.pathCalculator('Delhi', "Noida", TransportMode.Walk);






