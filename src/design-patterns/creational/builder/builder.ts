interface INameStep {
    setName(name: string): IPriceStep;
}
interface IPriceStep {
    setPrice(price: number): IBuildStep;
}
interface IBuildStep {
    build(): Product
}

class Product {
    private name!: string;
    private price!: number;

    private constructor() { }

    public static builder(): INameStep {
        return new ProductBuilder((name:string, price: number)=>Product.create(name, price));
    }


    // Static factory method
    // factory handles final instantiation and initialization
    private static create(name: string, price: number) {
        let product = new Product();
        product.name = name;
        product.price = price;
        return product;
    }

    public display() {
        console.log(`The price of ${this.name} is ${this.price}`);
    }
}

// Builder pattern
//builder handles staged construction
class ProductBuilder implements INameStep, IPriceStep, IBuildStep {
    private name?: string;
    private price?: number;

    constructor(private factory:(name:string, price: number)=>Product) { };

    public setName(name: string): IPriceStep {
        this.name = name;
        return this;
    }
    public setPrice(price: number): IBuildStep {
        this.price = price;
        return this;
    }

    public build(): Product {
        if(this.name ===undefined || this.price === undefined || this.price<=0) throw new Error('Invalid details')
        return this.factory(this.name!, this.price!);
    }
}

let laptop = Product.builder().setName('Asus').setPrice(100000).build();
laptop.display();