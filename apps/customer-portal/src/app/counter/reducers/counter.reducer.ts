import { CounterActions, CounterActionTypes } from '../action/counter.action';
import { ActionReducer } from '@ngrx/store';
import { CounterState } from '../models/counter.model';

export const counterReducer: ActionReducer<CounterState, CounterActions> = (
  state: CounterState,
  action: CounterActions
): CounterState => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case CounterActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : state.count
      };
    case CounterActionTypes.RESET:
    default:
      return {
        ...state
      };
  }
};

export const getCount = (state: CounterState) => state.count;