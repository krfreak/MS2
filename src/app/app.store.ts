import { compose } from '@ngrx/core/compose';
import { combineReducers, } from '@ngrx/store';

import { RootReducer as AppRootReducer } from '../modules';

import { ApplicationReducers } from './modules';

const metaReducers = [combineReducers];

export function RootReducer(state, action) {
  let Reducers = Object.assign({},
    AppRootReducer
  );
  return compose(...metaReducers)(Reducers)(state, action);
};