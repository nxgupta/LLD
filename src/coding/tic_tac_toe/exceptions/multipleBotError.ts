export class MultipleBotError extends Error {
    constructor(msg: string = "A game cannot have more than one bot player") {
        super(msg);
    }
}