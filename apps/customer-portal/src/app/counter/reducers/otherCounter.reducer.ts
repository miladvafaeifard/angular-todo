import { OtherCounterActions, OtherCounterActionTypes } from '../action/otherCounter.action';
import { ActionReducer } from '@ngrx/store';

export interface CounterState {
    counter: number
}

export const initialState: CounterState = {
    counter: 0
}


export const otherCounterReducer: ActionReducer<CounterState, OtherCounterActions> = (
  state: CounterState = initialState,
  action: OtherCounterActions
): CounterState => {
  switch (action.type) {
    case OtherCounterActionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case OtherCounterActionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : state.counter
      };
    case OtherCounterActionTypes.RESET:
    default:
      return {
        ...state
      };
  }
};

export const getCount = (state: CounterState) => state.counter;