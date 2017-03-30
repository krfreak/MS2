import { Action } from '@ngrx/store';

import { Lecture } from '../core';
import * as actions from './lectures.actions';
import { State, InitialState, StoreKey } from './lectures.store';

function ReducerFunction(state: State = InitialState, action: Action): State {
	let entities: { [id: string]: Lecture };
	let entity: Lecture;
	let selectedEntities: { [id: string]: Lecture };

	if(action instanceof actions.LoadSuccessAction) {
		return action.payload;
	}

	if(action instanceof actions.FetchFailedAction) {
		return state;
	}

	if(action instanceof actions.FetchSuccessAction) {
		entities = action.payload.reduce((entities, lecture) => {
			return Object.assign(entities, { [lecture.id]: lecture});
		}, {});

		selectedEntities = action.payload.filter(lecture => lecture.inSchedule).reduce((entities, lecture) => {
			return Object.assign(entities, { [lecture.id]: lecture});
		}, {});

		return Object.assign({}, state, {
			entities: entities,
			selectedEntities: selectedEntities
		});
	}

	if(action instanceof actions.SelectAction) {
		entity = Object.assign({}, action.payload);
		if(!entity || state.selectedEntities[entity.id]) {
			return state;
		}

		entity = Object.assign({}, entity, {
			inSchedule: true
		});

		return Object.assign({}, state, {
			entities: Object.assign({}, state.entities, {
				[entity.id]: entity
			}),
			selectedEntities: Object.assign({}, state.selectedEntities, {
				[entity.id]: entity
			})
		});
	}

	if(action instanceof actions.DeselectAction) {
		entity = Object.assign({}, action.payload);
		if(!entity || !state.selectedEntities[entity.id]) {
			return state;
		}

		entity = Object.assign({}, entity, {
			inSchedule: false
		});

		selectedEntities = Object.assign({}, state.selectedEntities);
		delete selectedEntities[entity.id]

		return Object.assign({}, state, {
			entities: Object.assign({}, state.entities, {
				[entity.id]: entity
			}),
			selectedEntities: selectedEntities
		});
	}

	return state;
}

export const Reducer = { [StoreKey]: ReducerFunction }