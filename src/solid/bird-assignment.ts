// ============================================================
//  SOLID PRINCIPLES — "Design a Bird" (Amazon-style interview)
// ============================================================

// ✓ INTERFACE SEGREGATION PRINCIPLE (I)
// Flyable interface has ONLY the fly() responsibility
// Classes that can't fly don't implement this (e.g., Penguin)
interface Flyable {
    fly(): void;
}

// ✓ INTERFACE SEGREGATION PRINCIPLE (I)
// Swimmable interface has ONLY the swim() responsibility
// Classes that can't swim don't implement this (e.g., Sparrow)
interface Swimmable {
    swim(): void;
}

// ✓ OPEN/CLOSED PRINCIPLE (O)
// Bird class is CLOSED for modification (doesn't change)
// Bird class is OPEN for extension (Sparrow, Penguin, Duck, Ostrich extend it)
abstract class Bird {
    constructor(public name: string) { }

    abstract describe(): void;
}

// ✓ SINGLE RESPONSIBILITY PRINCIPLE (S)
// Sparrow has ONE responsibility: define behavior of a Sparrow
// ✓ LISKOV SUBSTITUTION PRINCIPLE (L)
// Sparrow can be used anywhere Bird is expected (it's a valid Bird)
// ✓ INTERFACE SEGREGATION PRINCIPLE (I)
// Sparrow implements ONLY Flyable (doesn't force swim() on it)
class Sparrow extends Bird implements Flyable {
    fly() {
        console.log(`${this.name} can fly`)
    }
    describe(): void {
        console.log(`I am a ${this.name}`);
    }
}
// ✓ LISKOV SUBSTITUTION PRINCIPLE (L)
// Penguin is a valid Bird WITHOUT implementing Flyable
// This AVOIDS the LSP violation of forcing fly() on non-flying birds
// ✓ INTERFACE SEGREGATION PRINCIPLE (I)
// Penguin implements ONLY Swimmable (what it actually does)
class Penguin extends Bird implements Swimmable {
    swim() {
        console.log(`${this.name} can swim`)
    };

    describe(): void {
        console.log(`I am a ${this.name}`);
    }
}

// ✓ SINGLE RESPONSIBILITY PRINCIPLE (S)
// Duck has ONE responsibility: define behavior of a Duck
// ✓ INTERFACE SEGREGATION PRINCIPLE (I)
// Duck implements both Flyable AND Swimmable (only what it needs)
class Duck extends Bird implements Swimmable, Flyable {
    fly() {
        console.log(`${this.name} can fly`)
    }
    swim() {
        console.log(`${this.name} can swim`)
    };

    describe(): void {
        console.log(`I am a ${this.name}`);
    }
}

// ✓ SINGLE RESPONSIBILITY PRINCIPLE (S)
// BirdLogger has ONE responsibility: log birds (not create, not manage)
// ✓ DEPENDENCY INVERSION PRINCIPLE (D)
// BirdLogger depends on Bird ABSTRACTION, not concrete types (Sparrow, Penguin)
// High-level (BirdLogger) depends on abstraction (Bird), not low-level (Sparrow/Duck)
class BirdLogger {
    log(bird: Bird): void {
        bird.describe();
    }
}

// ✓ OPEN/CLOSED PRINCIPLE (O)
// Ostrich extends Bird WITHOUT modifying Bird class (OPEN for extension, CLOSED for modification)
// ✓ LISKOV SUBSTITUTION PRINCIPLE (L)
// Ostrich is a valid Bird substitutable anywhere Bird is used
// ✓ DEPENDENCY INVERSION PRINCIPLE (D)
// Can use Ostrich with BirdLogger immediately because it depends on Bird abstraction
class Ostrich extends Bird {
    run() {
        console.log(`${this.name} can run`);
    }
    describe(): void {
        console.log(`I am an ${this.name}. I can run but not fly.`);
    }
}

const ostrich = new Ostrich("Ostrich");
// ✓ Proof of OCP & DIP: Can add new bird without changing BirdLogger or Bird!
ostrich.describe();

const logger = new BirdLogger();

// ✓ DEPENDENCY INVERSION PRINCIPLE (D)
// Logger works with Bird abstraction, not concrete Sparrow/Penguin/Duck
const birds: Bird[] = [new Sparrow("Sparrow"), new Penguin("Penguin"), new Duck("Duck")];
birds.forEach(b => logger.log(b));

// ✓ INTERFACE SEGREGATION PRINCIPLE (I)
// Only flyable birds can call fly() — clients don't depend on unused interfaces
const flyers: Flyable[] = [new Sparrow("Sparrow"), new Duck("Duck")];
flyers.forEach(f => f.fly());

// ✓ LISKOV SUBSTITUTION PRINCIPLE (L)
// Penguin is a valid Bird but never promised fly() — no LSP violation!
// Only swimmable birds here; Penguin and Duck are valid substitutes
const swimmers: Swimmable[] = [new Penguin("Penguin"), new Duck("Duck")];
swimmers.forEach(s => s.swim());
