import { BaseModel } from "./BaseModel.js";
import type { GateStatus } from "./enums/GateStatus.enum.js";
import type { GateType } from "./enums/GateType.enum.js";
import type { Operator } from "./Operator.js";

export abstract class Gate extends BaseModel {
    private number: number;
    private gateType: GateType;
    private operator: Operator;
    private gateStatus: GateStatus;

    getGateStatus(): GateStatus {
        return this.gateStatus;
    }

    setGateStatus(gateStatus: GateStatus): void {
        this.gateStatus = gateStatus;
    }

    getNumber(): number {
        return this.number;
    }

    setNumber(number: number): void {
        this.number = number;
    }

    getGateType(): GateType {
        return this.gateType;
    }

    setGateType(gateType: GateType): void {
        this.gateType = gateType;
    }

    getOperator(): Operator {
        return this.operator;
    }

    setOperator(operator: Operator): void {
        this.operator = operator;
    }
}