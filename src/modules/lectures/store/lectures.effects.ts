import { Injectable, ErrorHandler } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

import { Gateway, RESTCommand } from '../../communication';

import { Resource } from '../core';
import { Queries } from './lectures.queries';
import { State, StoreKey } from './lectures.store';
import * as actions from './lectures.actions';

@Injectable()
export class Effects {
  constructor(private actions$: Actions, private gateway: Gateway, private store: Store<any>, private storage: Storage, private errorHandler: ErrorHandler) { }

  @Effect({ dispatch: false}) saveToStorage$ = this.actions$.ofType(
    actions.FetchSuccessAction.TYPE, 
    actions.SelectAction.TYPE, 
    actions.DeselectAction.TYPE
  )
  .withLatestFrom(this.store.select(Queries.getEntities), this.store.select(Queries.getSelectedEntities))
  .map(([action, entities, selectedEntities] )=> {
    this.storage.set(StoreKey, { entities, selectedEntities });
  })

  @Effect() loadFromStorage$ = this.actions$.ofType(actions.LoadAction.TYPE)
    .startWith(new actions.LoadAction())
    .switchMap(action => {
      return Observable.fromPromise(this.storage.get(StoreKey));
    })
    .map((data: State) => {
      if(!data) {
        return new actions.FetchAction();
      }
      return new actions.LoadSuccessAction(data);
    });

  @Effect() fetchLectures$ = this.actions$.ofType(actions.FetchAction.TYPE)
    .map(action => new RESTCommand(new Resource(), 'get'))
    .switchMap((command) => this.gateway.send(command)
      .map(response => new actions.FetchSuccessAction(response))
      .catch(error => {
        this.errorHandler.handleError(error);
        return Observable.from([
          new actions.FetchFailedAction(error)
        ])
      })
    );
}