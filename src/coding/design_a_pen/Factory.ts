import { BallPen } from "./BallPen";
import { PenBuilder } from "./Builder";
import { NibType } from "./Enums/NibType";
import { FountainPen } from "./FountainPen";
import { InternalReservoir } from "./InternalReservoir";
import { Marker } from "./Marker";
import { Refill } from "./Refill";
import { Tip } from "./Tip";

export class PenFactory {
    public static createBallPen(): BallPen {
        let ballNib = new Tip(NibType.BALLPOINT, 0.2);
        let ballRefill = new Refill('red', ballNib, 100);
        return new PenBuilder(new BallPen())
            .setBrand('Cello')
            .setMechanism(ballRefill)
            .build();
    }
    public static createFountainPen() {
        let fountainNib = new Tip(NibType.FOUNTAIN_NIB, 0.1);
        let fountainRefill = new Refill('royal_blue', fountainNib, 90);
        return new PenBuilder(new FountainPen())
            .setBrand('Parker')
            .setMechanism(fountainRefill)
            .build();
    }
    public static createMarkerPen() {
        let feltTip = new Tip(NibType.FELT_TIP, 0.2);
        let reservoir = new InternalReservoir('black', feltTip, 80);
        return new PenBuilder(new Marker())
            .setBrand("Expo")
            .setMechanism(reservoir)
            .build();
    }
}