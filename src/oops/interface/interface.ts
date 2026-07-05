interface Herbivore{
    eatPlant(): void;
}
interface Carnivore{ 
    eatAnimal(): void;
}
interface Omnivore extends Herbivore, Carnivore{
    
}
interface Mammel extends Omnivore{

}

class Cat implements Carnivore{
    eatAnimal(): void {
        console.log('I eat animal')
    };
}
class Dog implements Herbivore{
    eatPlant(): void { 
        console.log('I eat plant')
    };
}
class Human implements Mammel{
    eatPlant(): void {
        console.log('I eat plant')
    }
    eatAnimal(): void {
        console.log('I eat animal')
    }
}

let herbivores: Herbivore[] = [new Human(), new Dog()];
herbivores.forEach(herbi => herbi.eatPlant());