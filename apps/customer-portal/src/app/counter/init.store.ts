import { CounterState } from "./models/counter.model";
import { OtherCounterState } from "./models/otherCounter.model";

export const initialCounterState: CounterState = {
    count: 2344
}

export const initialOtherCounterState: OtherCounterState = {
    count: 10
}

export const counter = initialCounterState;
export const otherCounter = initialOtherCounterState;