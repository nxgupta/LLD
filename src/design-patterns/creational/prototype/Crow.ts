import Bird from "./Bird.js";

class Crow extends Bird{
    private sound: string = "kaw";

    public setSound(value: string) {
        this.sound = value;
    }

    public constructor(old?: Crow) {
        super(old);
        this.sound = old?.sound ?? "kaw";
    }

    clone(): Crow {
        let copy: Crow = new Crow(this);
        return copy;
    }
}

export default Crow;