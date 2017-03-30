import { Lecture } from '../core';

export const StoreKey = 'lectures';

export interface State {
  entities: { [id: string]: Lecture },
  selectedEntities: { [id: string]: Lecture }
}

export const InitialState: State = {
  entities: {},
  selectedEntities: {}
};