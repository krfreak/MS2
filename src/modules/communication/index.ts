import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, ConnectionBackend, XHRBackend, RequestOptions } from '@angular/http';

import { GatewayConfig, Connector, ConnectorConstructor, Serializer, Gateway } from './facade';
import { RESTConnector, RESTCommand, RESTSerializer, RESTGateway } from './rest';

export function restConnectorFactory(config: GatewayConfig, backend: ConnectionBackend, defaultOptions: RequestOptions) {
  return new RESTConnector(config, backend, defaultOptions);
}

export function defaultConfigFactory() {
  return {
    host: 'empty'
  }
}

@NgModule({
  imports: [
    HttpModule
  ]
})
export class CommunicationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CommunicationModule,
      providers: [
        { provide: GatewayConfig, useFactory: defaultConfigFactory },
        { provide: Gateway, useClass:  RESTGateway },
        { provide: Connector, useFactory: restConnectorFactory, deps: [ GatewayConfig, XHRBackend, RequestOptions ]},
        { provide: Serializer, useClass: RESTSerializer }
      ]
    }
  }
}

export { RESTCommand, RESTMethods, RESTMethod } from './rest';
export { Gateway, GatewayConfig, Command, Resource, GatewayError } from './facade';
