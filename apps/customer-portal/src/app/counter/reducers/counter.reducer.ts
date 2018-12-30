import { CounterActions, CounterActionTypes } from '../action/counter.action';
import { ActionReducer } from '@ngrx/store';

export interface CounterState {
    counter: number
}

export const initialState: CounterState = {
    counter: 0
}


export const counterReducer: ActionReducer<CounterState, CounterActions> = (
  state: CounterState = initialState,
  action: CounterActions
): CounterState => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : state.counter
      };
    case CounterActionTypes.RESET:
    default:
      return {
        ...state
      };
  }
};

export const getCount = (state: CounterState) => state.counter;