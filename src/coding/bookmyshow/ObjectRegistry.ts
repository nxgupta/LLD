export class ObjectRegistry {
    private static registry = new Map<string, object>();
    private constructor() { }

    public static register(name: string, value: object): void {
        this.registry.set(name, value);
    }

    public static get<T>(name: string): T {
        const obj = this.registry.get(name);
        if (!obj) throw new Error(`Object not found for name: ${name}`);
        return <T>obj;
    }
}