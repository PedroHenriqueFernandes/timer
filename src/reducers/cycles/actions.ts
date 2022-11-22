import { Cycle } from "./reducer";

export enum ActionTypes {
    ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
    INTERRUPT_CURRENCY_CYCLE = "INTERRUPT_CURRENCY_CYCLE",
    MARK_CURRENT_CYCLE_FINISHED = "MARK_CURRENT_CYCLE_FINISHED"
}

export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle
        }
    }
}

export function markCurrentyCycleAsFinishedAction() {
    return {
        type: ActionTypes.MARK_CURRENT_CYCLE_FINISHED
    }
}

export function interruptCurrentCycleAction(){
    return {
        type: ActionTypes.INTERRUPT_CURRENCY_CYCLE
    }
}