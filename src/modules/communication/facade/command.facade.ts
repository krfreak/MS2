import { Gateway } from './gateway.facade';
import { Resource } from './resource.facade';

export abstract class Command<M> {
  public method: M;
  public payload: any;
  public resource: Resource;

  constructor(resource: Resource, method: M, payload?: any) {
    this.method = method;
    this.payload = payload;
    this.resource = resource;

    if(this.resource) {
      this.resource.method = <any>method;
    }
  }

  public serialize() {
    return this.resource.serialize(this.payload);
  }

  public deserialize(data: any) {
    return this.resource.deserialize(data);
  }

  public appendPayload(key, payload?: any) {
    this.payload = Object.assign({}, this.payload, {
      [key]: payload
    })
  }

  public removePayload(key: string) {
    if(this.payload && this.payload[key]) {
      delete this.payload[key];
    }
  }
}
