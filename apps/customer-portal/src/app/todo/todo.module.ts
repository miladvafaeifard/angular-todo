import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodoComponent } from './todo.component';
import { routes } from './todo.routing';

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // StoreModule.forFeature(TODOS_FEATURE_KEY, todosReducer, {
    //   initialState: todosInitialState
    // }),
    // EffectsModule.forFeature([TodosEffects])
  ],
  providers: [],
  bootstrap: []
})
export class TodoModule { }
