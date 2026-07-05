class Animal {
    doSomething(): void{
        console.log('I am Animal');
    }
}
class Dog extends Animal {
    override doSomething(): void{
        super.doSomething();
        console.log('I am Dog');
    }
}

new Dog().doSomething();