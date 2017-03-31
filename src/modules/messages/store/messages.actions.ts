import { Action } from '@ngrx/store';

import { ReduxUtil } from '../../../util';

import { Message } from '../core';
import { State } from './messages.store';

export class SaveAction extends ReduxUtil.TypedAction<State> {
  public static TYPE = '[messages] save';

  constructor(state: State) {
    super(SaveAction.TYPE, state);
  }
}

export class LoadAction extends ReduxUtil.TypedAction<null> {
  public static TYPE = '[messages] load';

  constructor() {
    super(SaveAction.TYPE, null);
  }
}

export class LoadSuccessAction extends ReduxUtil.TypedAction<State> {
  public static TYPE = '[messages] load success';

  constructor(state: State) {
    super(SaveAction.TYPE, state);
  }
}

export class FetchAction extends ReduxUtil.TypedAction<null> {
  public static TYPE = '[messages] fetch';

  constructor() {
    super(FetchAction.TYPE, null);
  }
}

export class FetchSuccessAction extends ReduxUtil.TypedAction<Message[]> {
  public static TYPE = '[messages] fetch success';

  constructor(messages: Message[]) {
    super(FetchSuccessAction.TYPE, messages);
  }
}

export class FetchFailedAction extends ReduxUtil.TypedAction<any> {
  public static TYPE = '[messages] fetch failed';

  constructor(error: any) {
    super(FetchFailedAction.TYPE, error);
  }
}

export class SendAction extends ReduxUtil.TypedAction<Message> {
  public static TYPE = '[messages] select';

  constructor(message: Message) {
    super(SendAction.TYPE, message);
  }
}

export class SendSuccessAction extends ReduxUtil.TypedAction<Message> {
  public static TYPE = '[messages] select';

  constructor(message: Message) {
    super(SendSuccessAction.TYPE, message);
  }
}

export class SendFailedAction extends ReduxUtil.TypedAction<any> {
  public static TYPE = '[messages] select';

  constructor(error: any) {
    super(SendFailedAction.TYPE, error);
  }
}