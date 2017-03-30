import { Injectable, Inject } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Request, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { GatewayConfig, Connector } from '../facade';

export class RESTConnector extends Http implements Connector {

  constructor( public config: GatewayConfig, backend: ConnectionBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  public get(url: string, options?: RequestOptionsArgs) {
    return this.handleTimeout(super.get(url, options))
  }

  public patch(url: string, body: any, options?: RequestOptionsArgs) {
    return this.handleTimeout(super.patch(url, body, options))
  }

  public post(url: string, body: any, options?: RequestOptionsArgs) {
    return this.handleTimeout(super.post(url, body, options))
  }

  public delete(url: string, options?: RequestOptionsArgs) {
    return this.handleTimeout(super.delete(url, options))
  }

  private handleTimeout(source: Observable<Response>) {
    return source
      .retryWhen(errors => {
        var retryAttempts = this.config.retryAttempts || 3;
        return Observable.range(1, retryAttempts + 1).zip(errors).flatMap(([attempt, error]) => {
          if(attempt === retryAttempts || [0, 408].indexOf(error.status) === -1) {
            return Observable.throw(error);
          }
          return Observable.timer(attempt * this.config.retryInterval || 500);
        })
      })
      .share();
  }
}
