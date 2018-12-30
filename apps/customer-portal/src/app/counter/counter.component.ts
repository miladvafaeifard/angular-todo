import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

import * as CounterAction from './action/counter.action';
import * as OtherCounterAction from './action/otherCounter.action';
import { State, getCount, getOtherCount } from './reducers';

@Component({
  selector: 'angular-todo-counter',
  template: `
    <div>
      <p>{{counter$ | async }}</p>
      <button (click)="Increase()">UP</button>
      <button (click)="Decrease()">Down</button>
      
      <br />
      
      <p>{{otherCounter$ | async }}</p>
      <button (click)="OtherIncrease()">UP</button>
      <button (click)="OtherDecrease()">Down</button>
    </div>
  `,
  styles: []
})
export class CounterComponent {
  counter$: Observable<number>;
  otherCounter$: Observable<number>;

  constructor(private store: Store<State>) {
    this.counter$ = store.pipe(
      select(getCount)
      );

    this.otherCounter$ = store.pipe(
      select(getOtherCount)
    );
  }

  Increase() {
    this.store.dispatch(new CounterAction.Increment());
  }

  OtherIncrease() {
    this.store.dispatch(new OtherCounterAction.Increment());
  }

  Decrease() {
    this.store.dispatch(new CounterAction.Decrement());
  }

  OtherDecrease() {
    this.store.dispatch(new OtherCounterAction.Decrement());
  }
}
