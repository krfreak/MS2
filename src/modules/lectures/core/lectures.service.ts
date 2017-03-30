import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Lecture } from './lectures.models';
import { Queries, Actions } from '../store';

@Injectable()
export class Service {
  public readonly entities$ = this.store.select(Queries.getEntities).publishReplay(1).refCount();

  public readonly lectures$ = this.store.select(Queries.getLectures).publishReplay(1).refCount();

  public readonly bachelorLectures$ = this.store.select(Queries.getBachelorLectures).publishReplay(1).refCount();
  public readonly masterLectures$ = this.store.select(Queries.getMasterLectures).publishReplay(1).refCount();

  public readonly masterSemesters$ = this.store.select(Queries.getMasterSemesters).publishReplay(1).refCount();
  public readonly bachelorSemesters$ = this.store.select(Queries.getBachelorSemesters).publishReplay(1).refCount();

  constructor( private store: Store<any> ) { }

  public fetch() {
    this.store.dispatch(new Actions.FetchAction());
  }

  public select(lecture: Lecture) {
  	if(!lecture) return;
  	this.store.dispatch(new Actions.SelectAction(lecture));
  }

  public deselect(lecture: Lecture) {
  	if(!lecture) return;
  	this.store.dispatch(new Actions.DeselectAction(lecture));
  }
}