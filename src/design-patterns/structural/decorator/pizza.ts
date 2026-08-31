enum PizzaBases {
    "THIN_CRUST" = "thinCrust",
    "THICK_CRUST" = "thickCrust",
    "CHEESE_BURST" = "cheeseBurst"
}

const BASE_PRICES: Record<PizzaBases, number> = {
    [PizzaBases.THIN_CRUST]: 100,
    [PizzaBases.THICK_CRUST]: 150,
    [PizzaBases.CHEESE_BURST]: 200,

}

// 5 Toppings
enum Toppings {
    "MOZZARELLA" = "mozzarella",
    "PEPPERONI" = "pepperoni",
    "MUSHROOMS" = "mushrooms",
    "JALAPENOS" = "jalapenos",
    "OLIVES" = "olives"
}

const TOPPING_PRICES: Record<Toppings, number> = {
    [Toppings.MOZZARELLA]: 50,
    [Toppings.PEPPERONI]: 80,
    [Toppings.MUSHROOMS]: 40,
    [Toppings.JALAPENOS]: 30,
    [Toppings.OLIVES]: 35
};

type constituents = PizzaBases | Toppings;

interface Pizza {
    getCost(): number;
    getConstituents(): constituents[]
}

class PizzaBase implements Pizza {
    constructor(private pizzaBase: PizzaBases, private nestedPizzaBase?: Pizza) {

    }
    getCost(): number {
        return (this.nestedPizzaBase ? this.nestedPizzaBase.getCost() : 0) + BASE_PRICES[this.pizzaBase];
    }
    getConstituents(): constituents[] {
        return this.nestedPizzaBase ? [...this.nestedPizzaBase.getConstituents(), this.pizzaBase] : [this.pizzaBase]
    }
}

const doubleCrustBase = new PizzaBase(
    PizzaBases.CHEESE_BURST,
    new PizzaBase(PizzaBases.THIN_CRUST)
);
// console.log(doubleCrustBase.getConstituents())

class PizzaToppings implements Pizza {
    constructor(private toppingType: Toppings, private pizza: Pizza) {

    }
    getCost(): number {
        return this.pizza.getCost() + TOPPING_PRICES[this.toppingType];
    }
    getConstituents(): constituents[] {
        return [...this.pizza.getConstituents(), this.toppingType]
    }
}

// console.log(new PizzaToppings(Toppings.MOZZARELLA, doubleCrustBase).getCost())
// console.log(new PizzaToppings(Toppings.MOZZARELLA, doubleCrustBase).getConstituents())


class PizzaBuilder {
    private pizza!: Pizza;
    createBase(base: PizzaBases): PizzaBuilder {
        this.pizza = new PizzaBase(base);
        return this;
    }
    addBase(base: PizzaBases): PizzaBuilder {
        if (!this.pizza) this.pizza = new PizzaBase(base);
        else if (this.pizza instanceof PizzaBase) {
            this.pizza = new PizzaBase(base, this.pizza);
        } else {
            throw new Error("Cannot add a base after adding toppings!");
        }
        return this;
    }
    addToppings(toppingType: Toppings): PizzaBuilder {
        this.pizza = new PizzaToppings(toppingType, this.pizza);
        return this;
    }
    build() {
        return this.pizza;
    }
}

let doubleCrustBaseMozzPizza = new PizzaBuilder().addBase(PizzaBases.THIN_CRUST).addBase(PizzaBases.THICK_CRUST).addToppings(Toppings.MOZZARELLA).addToppings(Toppings.PEPPERONI).build();
console.log(doubleCrustBaseMozzPizza.getCost())
console.log(doubleCrustBaseMozzPizza.getConstituents())