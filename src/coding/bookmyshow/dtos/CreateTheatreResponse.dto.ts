import type { Theatre } from "../models/Theatre.js";

export class CreateTheatreResponseDto {
    public status: "SUCCESS" | "FAILURE";
    public theatre?: Theatre;
    public errorMessage?: string;
}