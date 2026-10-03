import type { Show } from "../models/Show.js";

export class CreateShowResponseDto {
    public status: "SUCCESS" | "FAILURE";
    public show?: Show;
    public errorMessage?: string;
}