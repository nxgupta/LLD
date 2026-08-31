enum Constituents {
    "CONE" = "cone",
    "VANILLA" = "vanilla",
    "CHOCLATE" = "choclate",
    "BUTTERSCOTCH" = "butterScotch",
    "PISTA" = "pista"
}

interface Icecream {
    getCost(): number;
    getConstituents(): Constituents[];
}

class Cone implements Icecream {
    public coneSize: 'waffle' | 'regular' = 'waffle';
    private cone?: Cone | undefined;
    constructor(cone?: Cone) {
        this.cone = cone;
    }

    getCost(): number {

        return (this.cone ? this.cone.getCost() : 0) + 10;
    }
    getConstituents(): Constituents[] {
        return this.cone ? [...this.cone.getConstituents(), Constituents.CONE] : [Constituents.CONE]
    }
}

class Vanilla implements Icecream {
    private icecream: Icecream;
    constructor(icecream: Icecream) {
        this.icecream = icecream;
    }
    getCost(): number {
        return 30 + this.icecream.getCost()
    }
    getConstituents(): Constituents[] {
        let constituents = this.icecream.getConstituents();
        return [...constituents, Constituents.VANILLA];
    }
}

class ButterScotch implements Icecream {
    private icecream: Icecream;
    constructor(icecream: Icecream) {
        this.icecream = icecream;
    }
    getCost(): number {
        return 50 + this.icecream.getCost()
    }
    getConstituents(): Constituents[] {
        let constituents = this.icecream.getConstituents();
        return [...constituents, Constituents.BUTTERSCOTCH];
    }
}

class Pista implements Icecream {
    private icecream: Icecream;
    constructor(icecream: Icecream) {
        this.icecream = icecream;
    }
    getCost(): number {
        return 80 + this.icecream.getCost()
    }
    getConstituents(): Constituents[] {
        let constituents = this.icecream.getConstituents();
        return [...constituents, Constituents.PISTA];
    }
}

let icecream: Icecream = new Vanilla(new ButterScotch(new Vanilla(new Cone())));
console.log(icecream.getCost())
console.log(icecream.getConstituents())
console.log(new Pista(icecream).getCost())