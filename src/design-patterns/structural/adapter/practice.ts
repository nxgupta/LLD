interface LocalLogistics {
    shipTo(fullAdress: string): void;
}

class LegacyDHLServie {
    public dispatchToGlobalRegiom(cityOnly: string): void {
        console.log(`🚚 DHL Cargo plane dispatched to hub: ${cityOnly}`);
    }
}

class DHLAdapter implements LocalLogistics {
    private legacyDHLServie: LegacyDHLServie
    constructor(legacyDHLServie: LegacyDHLServie) {
        this.legacyDHLServie = legacyDHLServie;
    }
    shipTo(fullAdress: string): void {
        let city = fullAdress.split(",")[2]!;
        this.legacyDHLServie.dispatchToGlobalRegiom(city)
    }
}

new DHLAdapter(new LegacyDHLServie()).shipTo("A100, Panoasis, Noida")