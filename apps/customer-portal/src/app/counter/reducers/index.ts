import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

import * as fromCounter from './counter.reducer';
import * as fromOtherCounter from './otherCounter.reducer';
import * as Model from '../models';

export interface State {
  counter: Model.CounterState;
  otherCounter: Model.OtherCounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: fromCounter.counterReducer,
  otherCounter: fromOtherCounter.otherCounterReducer,
};

export const COUNTER_FEATURE = '[Counter Feature]';

export const getAppState = createFeatureSelector<State>(COUNTER_FEATURE);

export const getCounterState = createFeatureSelector<Model.CounterState>('counter');
export const getOtherCounterState = createFeatureSelector<Model.OtherCounterState>('otherCounter');

export const getCounter = createSelector(getAppState, (state: State) => state.counter);
export const getOtherCounter = createSelector(getAppState, (state: State) => state.otherCounter);

export const getCount = createSelector(getCounter, getCounterState, fromCounter.getCount);
export const getOtherCount = createSelector(getOtherCounter, getOtherCounterState, fromCounter.getCount);

