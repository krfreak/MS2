import { createSelector } from 'reselect';

import { Selectors } from './messages.selectors';

export module Queries {
	export const getEntities = Selectors.getEntities;

	export const getMessages = createSelector(getEntities, entities => Object.keys(entities).map(id => entities[id]));
}