class A{
    add(a: number, b:number): number;
    add(a: string, b:string): number;
    add(a: string|number, b: string|number): number | string {
        if (typeof a === 'number' && typeof b === 'number') return a + b; 
        if (typeof a === 'string' && typeof b === 'string') return a + b; 
        throw new Error('Invalid args');
    };
}

let objA = new A();
console.log(objA.add("1", "2"));