import Bird from "./Bird.js";

class Sparrow extends Bird {
    private legSize: string = "2 inch";

    public setLegSize(value: string) {
        this.legSize = value;
    }

    public constructor (old?:Sparrow) {
        super(old);
        this.legSize = old?.legSize ?? "2 inch";
    }

    clone(): Sparrow {
        let sparrow = new Sparrow(this);
        return sparrow;
    }
}
export default Sparrow;