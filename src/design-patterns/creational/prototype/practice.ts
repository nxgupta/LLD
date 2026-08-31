interface SmartphoneSpecs {
    model: string;
    processor: string;
    imei?: string;
    serialNumber?: string;
}

interface Prototype {
    clone(): this;
}

class Smartphone implements Prototype {
    constructor(public model: string, public processor: string, public imei?: string, public serialNumber?: string) { }
    clone(): this {
        return structuredClone(this);
        // let clonedInstance = Object.create(this);
        // return Object.assign(clonedInstance, this);
    }
}

class FactoryRegistry {
    private blueprints: Map<string, Smartphone> = new Map<string, Smartphone>();
    constructor() {
        console.log("⏳ [HEAVY SETUP] Initializing core hardware spec blueprint for: S26");
        let samsungS26 = new Smartphone('S26', 'Snapdragon 8');
        this.blueprints.set('S26', samsungS26);
        console.log("⏳[HEAVY SETUP] Initializing core hardware spec blueprint for: iphone 16");
        let iphone16 = new Smartphone('iphone 16', 'ios17');
        this.blueprints.set('iphone16', iphone16);
    }
    getClone(modelKey: string) {
        let prototype = this.blueprints.get(modelKey);
        if (!prototype) throw new Error("Invalid prototype");
        return prototype.clone();
    }
}

console.log("🏁 System Booting Up...");
let factoryRegistery = new FactoryRegistry();

console.log("🤖 Manufacturing Unit 1...");
let phone1 = factoryRegistery.getClone('S26');
phone1.imei = "1234-5678-1234";
phone1.serialNumber = "1234-5678";
console.log(phone1)

console.log("🤖 Manufacturing Unit 1...");
let phone2 = factoryRegistery.getClone('iphone16');
phone2.imei = "1234-5678-1234";
phone2.serialNumber = "1234-5678";
console.log(phone2)