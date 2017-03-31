import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Queries, Actions } from '../store';
import { Message } from './messages.models';

@Injectable()
export class Service {
  public readonly entities$ = this.store.select(Queries.getEntities).publishReplay(1).refCount();

  public readonly messages$ = this.store.select(Queries.getMessages).publishReplay(1).refCount();

  constructor( private store: Store<any> ) { }

  public fetch() {
    this.store.dispatch(new Actions.FetchAction());
  }

  public send(message: Message) {
  	if(!message || !message.content || !message.title) return;
  	this.store.dispatch(new Actions.SendAction(message));
  }
}