import { createSelector } from 'reselect';

import { ReduxUtil } from '../../../util';

import { State, StoreKey } from './lectures.store';

export const Selectors = {
  getEntities: createSelector(ReduxUtil.selectState<State>(StoreKey), state =>  state.entities),
  getSelectedEntities: createSelector(ReduxUtil.selectState<State>(StoreKey), state =>  state.selectedEntities)
}