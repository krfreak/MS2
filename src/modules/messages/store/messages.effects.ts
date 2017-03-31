import { Injectable, ErrorHandler } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

import { Gateway, RESTCommand } from '../../communication';

import { Resource } from '../core';
import { Queries } from './messages.queries';
import { State, StoreKey } from './messages.store';
import * as actions from './messages.actions';

@Injectable()
export class Effects {
  constructor(private actions$: Actions, private gateway: Gateway, private store: Store<any>, private storage: Storage, private errorHandler: ErrorHandler) { }

  @Effect({ dispatch: false}) saveToStorage$ = this.actions$.ofType(
    actions.FetchSuccessAction.TYPE
  )
  .withLatestFrom(this.store.select(Queries.getEntities))
  .map(([action, entities] )=> {
    if(!entities || !Object.keys(entities).length) {
      this.storage.remove(StoreKey);
    }
    else {
      this.storage.set(StoreKey, { entities });
    }
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

  @Effect() fetchMessages$ = this.actions$.ofType(actions.FetchAction.TYPE)
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

  @Effect() sendMessage$ = this.actions$.ofType(actions.SendAction.TYPE)
    .map(action => new RESTCommand(new Resource(), 'post', action.payload))
    .switchMap((command) => this.gateway.send(command)
      .map(response => new actions.SendSuccessAction(response))
      .catch(error => {
        this.errorHandler.handleError(error);
        return Observable.from([
          new actions.SendFailedAction(error)
        ])
      })
    );
}