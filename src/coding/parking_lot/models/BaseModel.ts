export abstract class BaseModel {
    private id: string;

    public getId() {
        return this.id;
    }

    public setId(id: string) {
        this.id = id
    }
}