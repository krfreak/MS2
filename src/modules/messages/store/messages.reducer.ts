import { Action } from '@ngrx/store';

import { Message } from '../core';
import * as actions from './messages.actions';
import { State, InitialState, StoreKey } from './messages.store';

function ReducerFunction(state: State = InitialState, action: Action): State {
	let entities: { [id: string]: Message };


	return state;
}

export const Reducer = { [StoreKey]: ReducerFunction }