import { Injectable, Inject } from '@angular/core';
import { Http, ConnectionBackend, RequestOptions, RequestOptionsArgs, Request, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { GatewayConfig } from './gateway.facade';

export interface ConnectorConstructor {
  new(config: GatewayConfig, backend?: ConnectionBackend, defaultOptions?: RequestOptions): Connector
}

export abstract class Connector {

  abstract get(url: string, options?: any): Observable<any>

  abstract post(url: string, payload: any, options?: any): Observable<any>

  abstract patch(url: string, payload: any, options?: any): Observable<any>

  abstract delete(url: string, options?: any): Observable<any>
}
