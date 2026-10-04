import { ResponseDto } from "./ResponseDto.js";
import type { Payment } from "../models/Payment.js";

export class MakePaymentResponseDto extends ResponseDto {
    public payment?: Payment;
}