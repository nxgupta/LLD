interface Engine{
    start(): void;
}

class GasEngine implements Engine{
    start(): void {
        console.log("Gas engine")
    }
}
class ElectricEngine implements Engine{
    start(): void {
        console.log("Electric engine")
    }
}

// class EngineFactory{
//     static createEngine(type: "gas"|"electric"): Engine {
//         switch (type) {
//             case 'gas': return new GasEngine();
//             case 'electric': return new ElectricEngine();
//             default: throw new Error("Invalide engine type")
//         }
//     }
// }

// //EngineFactory.createEngine("gas").start();

// abstract class CarDealership{
//     abstract installEngine(): Engine;

//     prepareCar() {
//         const engine = this.installEngine();
//         engine.start();
//         console.log("Car delivered to customer");
//     }
// }

// class GasCarDealershipe extends CarDealership {
//     installEngine(): Engine {
//         return new GasEngine();
//     }
// }

// class ElectricCarDealership extends CarDealership{
//     installEngine(): Engine {
//         return new ElectricEngine()
//     }
// }

// const evDealer = new ElectricCarDealership();
// evDealer.prepareCar();

interface Tires{
    roll(): void;
}

class PerformanceTire implements Tires{
    roll(): void {
        console.log('Racing tires gripping the track.')
    }
}

class EcoTires implements Tires{
    roll(): void {
        console.log("Low - resistance tires rolling smoothly.")
    }
}

interface CarPartsFactory{
    createEngine(): Engine;
    createTires(): Tires;
}

class SportsCarPartsFactory implements CarPartsFactory{
    createEngine(): Engine {
        return new GasEngine();
    }
    createTires(): Tires {
        return new PerformanceTire();
    }
}

class ElectricCarPartsFactory implements CarPartsFactory {
    createEngine(): Engine { return new ElectricEngine(); }
    createTires(): Tires { return new EcoTires(); }
}

class CarAssemblyLine{
    constructor(private factory: CarPartsFactory) { }
    
    assemble() {
        const engine = this.factory.createEngine()
        const tires = this.factory.createTires()
        engine.start();
        tires.roll();
    }
}

const productionLine = new CarAssemblyLine(new SportsCarPartsFactory());
productionLine.assemble();