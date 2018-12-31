import { OtherCounterActions, OtherCounterActionTypes } from '../action/otherCounter.action';
import { ActionReducer } from '@ngrx/store';
import { OtherCounterState } from '../models/otherCounter.model';

export const otherCounterReducer: ActionReducer<OtherCounterState, OtherCounterActions> = (
  state: OtherCounterState,
  action: OtherCounterActions
): OtherCounterState => {
  switch (action.type) {
    case OtherCounterActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case OtherCounterActionTypes.DECREMENT:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : state.count
      };
    case OtherCounterActionTypes.RESET:
    default:
      return {
        ...state
      };
  }
};

export const getCount = (state: OtherCounterState) => state.count;