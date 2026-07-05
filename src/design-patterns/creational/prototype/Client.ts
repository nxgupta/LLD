import Bird from "./Bird.js";
import BirdRegistry from "./BirdRegistry.js";
import Crow from "./Crow.js";
import Sparrow from "./Sparrow.js";

let b1: Bird = new Bird();
b1.setName('Parrot');
b1.setColor('Green');
b1.setWeight(1);

let sparrow: Sparrow = new Sparrow();
sparrow.setLegSize("3 inch");
sparrow.setName('sparrow');

let crow = new Crow();
crow.setName("crow");
crow.setSound("Kaww");

let birds: Bird[] = [b1, sparrow, crow];
let children: Bird[]=[];
for (let bird of birds) {
    children.push(bird.clone());
}
for (let child of children) {
    child.setName(`It's a copy`)
}

console.log("Done"); 

let longLeggedSparrow: Sparrow = new Sparrow();
longLeggedSparrow.setLegSize("hundred");

let sweetSoundCrow = new Crow();
sweetSoundCrow.setSound("kookoo");

let birdRegistry = new BirdRegistry();
birdRegistry.registerBird("longLeggedSparrow", longLeggedSparrow);
birdRegistry.registerBird("sweetSoundCrow", sweetSoundCrow);

let getBirdOfTypes: string[] = Array.of("sweetSoundCrow", "longLeggedSparrow", "sweetSoundCrow");

let requestedBirds: Bird[] = [];

for (let type of getBirdOfTypes) {
    requestedBirds.push(birdRegistry.getBird(type));
}

console.log(requestedBirds);  