import type { ResponseStatusDto } from "./ResponseStatus.dto.enum.js";

export abstract class ResponseDto {
    private responseStatus: ResponseStatusDto;

    public getResponseStatus(): ResponseStatusDto {
        return this.responseStatus;
    }

    public setResponseStatus(responseStatus: ResponseStatusDto): void {
        this.responseStatus = responseStatus;
    }
}