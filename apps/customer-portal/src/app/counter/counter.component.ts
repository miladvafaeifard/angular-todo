import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

import * as CounterAction from '../store/action/counter.action';
import { AppState } from '../store/state/counter.state';

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

  constructor(private store: Store<AppState>) {
    this.counter$ = store.pipe(select('counter'));
  }

  Increase() {
    this.store.dispatch(new CounterAction.Increment());
  }

  Decrease() {
    this.store.dispatch(new CounterAction.Decrement());
  }
}
