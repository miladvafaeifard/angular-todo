import { Component } from '@angular/core';
import { AppState } from './app.state';
import { Store } from '@ngrx/store';
import Action from './app.action';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'angular-todo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customer-portal';
  counter$: Observable<number>;
  
  private action: Action;

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select('counter');
    this.action = new Action();
  }

  Increase() {
    this.store.dispatch(this.action.increase());
  }

  Decrease() {
    this.store.dispatch(this.action.decrease());
  }
}
