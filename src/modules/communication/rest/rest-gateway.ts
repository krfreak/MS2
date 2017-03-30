import { Injectable, Inject } from '@angular/core';
import { Response, Headers, URLSearchParams } from '@angular/http';
import { Observable, Observer } from 'rxjs';

import { StringUtil } from '../../../util';

import { Gateway, GatewayError, Command, Resource, Serializer, Connector, GatewayConfig } from '../facade';
import { RESTConnector } from './rest-connector';
import { RESTMethod } from './rest-command';

@Injectable()
export class RESTGateway extends Gateway {
  constructor( @Inject(GatewayConfig) config: GatewayConfig, serializer: Serializer, private connector: Connector) {
    super(config, serializer);
  }

  public send(command: Command<string>, serializer?: Serializer) {
    let middleware = serializer || this.serializer;
    let url = StringUtil.buildUrlPath(this.protocol, this.host, command.resource.url);
    let payload = middleware.serialize(command.serialize());
    let headers = { headers: this.headers };
    let query = command.resource.query || null, queryParams;
    if(query) {
      queryParams = new URLSearchParams();
      Object.keys(query).forEach(key => queryParams.set(key, query[key]));
      query = { search: queryParams };
    }
    let args = [url, payload, Object.assign({}, headers, query)];
    let response = (<Observable<Response>>this[<string>command.method](...args))
      .map(response => {
        let data = command.deserialize(middleware.deserialize(response));
        this.emitter && this.emitter.next(data);
        return data;
      })
      .catch(error => {
        let status = isNaN(parseInt(error.status))? null: parseInt(error.status);
        error.url = error.url || url;
        if([0, 408].indexOf(status) > -1) {
          error.status = 408;
          status = error.status;
          error.statusText = `resource timeout after ${this.config.retryAttempts} attempts`;
        }
        let handler = this.onError[status];
        handler && handler(error);
        return Observable.throw(error);
      });
    return response;
  }

  private get(url, payload, options) { return this.connector.get(url, options)};
  private post(url, payload, options) { return this.connector.post(url, payload, options)};
  private patch(url, payload, options) { return this.connector.patch(url, payload, options)};
  private delete(url, payload, options) { return this.connector.delete(url, options)};
}
