import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

import * as CounterAction from './action/counter.action';
import { State, getCount } from './reducers';

@Component({
  selector: 'angular-todo-counter',
  template: `
    <div>
      <p>{{counter$ | async }}</p>
      <button (click)="Increase()">UP</button>
      <button (click)="Decrease()">Down</button>
    </div>
  `,
  styles: []
})
export class CounterComponent {
  counter$: Observable<number>;

  constructor(private store: Store<State>) {
    this.counter$ = store.pipe(
      select(getCount)
      );
  }

  Increase() {
    this.store.dispatch(new CounterAction.Increment());
  }

  Decrease() {
    this.store.dispatch(new CounterAction.Decrement());
  }
}
