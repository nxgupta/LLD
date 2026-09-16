import { PenFactory } from "./Factory";

let ballPen = PenFactory.createBallPen()
console.log(ballPen.write()); // Expect "Cannot write: Pen is retracted/capped."
ballPen.open();
for (let i = 0; i <= 120; i++) {
    console.log(ballPen.write());
}
console.log(ballPen.mechanism?.inkLevel); // Expect inkLevel to decrease