import type { GateStatus } from "./enums/GateStatus.enum.js"
import type { GateType } from "./enums/GateType.enum.js"
import type { Operator } from "./Operator.js"

export abstract class Gate {
    constructor(private gateNumber: number, private type: GateType, private status: GateStatus, operator: Operator) {

    }
}
