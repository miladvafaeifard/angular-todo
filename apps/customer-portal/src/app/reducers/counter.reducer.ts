import { CounterActionTypes, CounterActions } from '../app.action';
import { InitialState } from '@ngrx/store/src/models';

const defaultState = 0;

export function counterReducer(state: number = defaultState, action: CounterActions): number {
    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return state + 1;
        case CounterActionTypes.DECREMENT:
            return state > 0 ? state - 1 : state;
        default:
            return state;
    }
}
