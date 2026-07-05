class A{
    private a: number;
    private b: number;
    constructor() {
        console.log('constructor of A')
    }
}

class B extends A {
    private c: number;
    constructor() {
        super();
        console.log('constructor of B')
    }
}

let objB = new B();
console.log(objB);