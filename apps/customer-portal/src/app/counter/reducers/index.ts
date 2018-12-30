import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromCounter from './counter.reducer';

export interface State {
  counter: fromCounter.CounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: fromCounter.counterReducer
};

export const getCounterState = createFeatureSelector<fromCounter.CounterState>(
  'counter'
);

export const getCount = createSelector(getCounterState, fromCounter.getCount);