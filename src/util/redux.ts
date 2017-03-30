import { Action } from '@ngrx/store';
import { createSelectorCreator, defaultMemoize } from 'reselect';

export module ReduxUtil {
  export function selectState<T>(storeKey: string) {
    return (state: any) => {
      return <T>state[storeKey];
    }
  }

  export abstract class TypedAction<T> implements Action {
    public static TYPE: string;
    public type: string;
    public payload: T;

    constructor(type: string, payload: T = null) {
      this.type = type;
      this.payload = payload;
    }
  }
}