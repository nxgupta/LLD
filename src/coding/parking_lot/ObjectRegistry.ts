export class ObjectRegistry {
    private static registry = new Map<string, object>();

    private constructor() { };

    public static register(name: string, obj: object) {
        this.registry.set(name, obj);
    }

    public static get<T>(name: string): T {
        let obj = this.registry.get(name);
        if (!obj) throw new Error(`Object not found for name: ${name}`);
        return obj as T;
    }
}