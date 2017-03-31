import { createSelector } from 'reselect';

import { ReduxUtil } from '../../../util';

import { State, StoreKey } from './messages.store';

export const Selectors = {
  getEntities: createSelector(ReduxUtil.selectState<State>(StoreKey), state =>  state.entities)
}