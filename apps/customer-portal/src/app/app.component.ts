import { Component } from '@angular/core';
import { AppState } from './app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import * as CounterAction from './app.action';

@Component({
  selector: 'angular-todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-portal';
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
