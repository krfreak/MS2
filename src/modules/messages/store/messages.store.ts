import { Message } from '../core';

export const StoreKey = 'messages';

export interface State {
  entities: { [id: string]: Message },
}

export const InitialState: State = {
  entities: {}
};