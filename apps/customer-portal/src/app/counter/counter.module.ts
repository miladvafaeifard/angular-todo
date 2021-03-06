import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';


import { environment } from '../../environments/environment';
import { routes } from './counter.routing';
import { reducers, COUNTER_FEATURE_KEY } from './reducers';
import { CounterComponent } from './counter.component';
import { counter, otherCounter } from './init.store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COUNTER_FEATURE_KEY, reducers, {
      initialState: {
        counter,
        otherCounter
      }
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule
  ],
  declarations: [CounterComponent]
})
export class CounterModule {}
