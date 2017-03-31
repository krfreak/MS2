import { Action } from '@ngrx/store';

import { ReduxUtil } from '../../../util';

import { Lecture } from '../core';
import { State } from './lectures.store';

export class ResetAction extends ReduxUtil.TypedAction<null> {
  public static TYPE = '[lectures] reset';

  constructor() {
    super(ResetAction.TYPE, null);
  }
}

export class SaveAction extends ReduxUtil.TypedAction<State> {
  public static TYPE = '[lectures] save';

  constructor(state: State) {
    super(SaveAction.TYPE, state);
  }
}

export class LoadAction extends ReduxUtil.TypedAction<null> {
  public static TYPE = '[lectures] load';

  constructor() {
    super(SaveAction.TYPE, null);
  }
}

export class LoadSuccessAction extends ReduxUtil.TypedAction<State> {
  public static TYPE = '[lectures] load success';

  constructor(state: State) {
    super(SaveAction.TYPE, state);
  }
}

export class FetchAction extends ReduxUtil.TypedAction<null> {
  public static TYPE = '[lectures] fetch';

  constructor() {
    super(FetchAction.TYPE, null);
  }
}

export class FetchSuccessAction extends ReduxUtil.TypedAction<Lecture[]> {
  public static TYPE = '[lectures] fetch success';

  constructor(lectures: Lecture[]) {
    super(FetchSuccessAction.TYPE, lectures);
  }
}

export class FetchFailedAction extends ReduxUtil.TypedAction<any> {
  public static TYPE = '[lectures] fetch failed';

  constructor(error: any) {
    super(FetchFailedAction.TYPE, error);
  }
}

export class SelectAction extends ReduxUtil.TypedAction<Lecture> {
  public static TYPE = '[lectures] select';

  constructor(lecture: Lecture) {
    super(SelectAction.TYPE, lecture);
  }
}

export class DeselectAction extends ReduxUtil.TypedAction<Lecture> {
  public static TYPE = '[lectures] deselect';

  constructor(lecture: Lecture) {
    super(SelectAction.TYPE, lecture);
  }
}