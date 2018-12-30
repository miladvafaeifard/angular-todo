import { Action } from '@ngrx/store';

export enum OtherCounterActionTypes {
  INCREMENT = '[OtherCounter] Increment',
  DECREMENT = '[OtherCounter] Decrement',
  RESET = '[OtherCounter] Reset',
}

export class Increment implements Action {
  readonly type = OtherCounterActionTypes.INCREMENT;
}

export class Decrement implements Action {
  readonly type = OtherCounterActionTypes.DECREMENT;
}

export class Reset implements Action {
  readonly type = OtherCounterActionTypes.RESET;
}

export type OtherCounterActions = Increment | Decrement | Reset;
