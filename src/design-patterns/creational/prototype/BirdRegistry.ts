import type Bird from "./Bird.js";

class BirdRegistry{
    private birds: Map<string, Bird> = new Map();

    public registerBird(name:string, bird:Bird) {
        this.birds.set(name, bird.clone());
    }

    public getBird(name: string):Bird {
        let bird = this.birds.get(name)?.clone();
        if (!bird) throw new Error('No bird found with name: ' + name);
        return bird;
    }
}

export default BirdRegistry;