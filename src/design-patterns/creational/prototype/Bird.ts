import type { Cloneable } from "./Cloneable.js";

class Bird implements Cloneable<Bird>{
    private name: string = "";
    private color: string = "";
    private weight: number = 0;

    public setName(name: string) {
        this.name = name
    }
    public setColor(color: string) {
        this.color = color
    }
    public setWeight(weight: number) {
        this.weight = weight
    }

    public constructor(old?: Bird) {
        if (!old) return;
        this.name = old.name;
        this.color = old.color;
        this.weight = old.weight;
    }

    public clone(): Bird {
        return new Bird(this);
    }
}

export default Bird;