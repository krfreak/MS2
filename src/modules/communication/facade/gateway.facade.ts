import { Inject, OpaqueToken } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { GatewayError } from './error.facade';
import { Command } from './command.facade';
import { Serializer } from './serializer.facade';

export interface GatewayConfig {
  host: string;
  protocol?: string;
  retryInterval?: number;
  retryAttempts?: number;
}

export const GatewayConfig = new OpaqueToken('CommunicationGatewayConfig');

export abstract class Gateway {
  public data$: Observable<any>;
  protected emitter: Observer<any>;
  protected onError: { [status: string]: (error: GatewayError) => void | GatewayError } = {};
  protected headers: any = {};
  constructor(public config: GatewayConfig, public serializer: Serializer) {
    this.data$ = Observable.create((emitter: Observer<any>) => {
      this.emitter = emitter;
    }).share();
  }

  protected get protocol() {
    return (this.config.protocol || 'https') + '://';
  }

  protected get host() {
    return this.config.host;
  }

  public appendErrorHandler(keys: number | string | (number | string)[], handler: (error: GatewayError) => void | GatewayError): void
  {
    let _keys = Array.isArray(keys)? keys: [keys];
    _keys.forEach(key => {
      this.onError[key] = handler;
    });
  }

  public removeErrorHandler(keys: number | string | number[] | string[])
  {
    let _keys = Array.isArray(keys)? keys: [keys];
    _keys.forEach(key => {
      if(this.onError[key])
      {
        delete this.onError[key];
      }
    })
  }

  public appendHeader(key: string, value: string): void
  {
    this.headers[key] = value;
  }

  public removeHeader(key: string)
  {
    this.headers && this.headers[key] && delete this.headers[key];
  }

  abstract send(command: Command<string>, serializer?: Serializer);
}
