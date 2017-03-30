import { Command, Resource } from '../facade';

export const RESTMethods = {
  get: <RESTMethod>'get',
  post: <RESTMethod>'post',
  delete: <RESTMethod>'delete',
  patch: <RESTMethod>'patch'
};

export type RESTMethod = 'get' | 'post' | 'delete' | 'patch';
export class RESTCommand extends Command<RESTMethod> {
  constructor(resource: Resource, method: RESTMethod, payload?: any) {
    super(resource, method, payload);
  }
}
