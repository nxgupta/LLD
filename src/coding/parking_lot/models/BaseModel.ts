export abstract class BaseModel {
    private id: number;

    public getId() {
        return this.id;
    }

    public setId(id: number) {
        this.id = id
    }
}