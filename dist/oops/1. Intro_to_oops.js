"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    address;
    email;
    batch;
    psp;
    state = "Active";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    pauseCourse(newState) {
        this.state = newState;
    }
}
let Neer = new Student('neer', 'hyd');
Neer.pauseCourse("PAUSED");
console.log(Neer);
//# sourceMappingURL=1.%20Intro_to_oops.js.map