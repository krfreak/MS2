import { Action } from '@ngrx/store';

import { Message } from '../core';
import * as actions from './messages.actions';
import { State, InitialState, StoreKey } from './messages.store';

function ReducerFunction(state: State = InitialState, action: Action): State {
	let entities: { [id: string]: Message };

	if(action instanceof actions.LoadSuccessAction) {
		return action.payload;
	}

	if(action instanceof actions.FetchFailedAction) {
		return state;
	}

	if(action instanceof actions.FetchSuccessAction) {
		entities = action.payload.reduce((entities, message) => {
			return Object.assign(entities, { [message.id]: message});
		}, {});
		return Object.assign({}, state, { entities });
	}

	return state;
}

export const Reducer = { [StoreKey]: ReducerFunction }