import { ErrorHandler } from '@angular/core';
import { IonicErrorHandler } from 'ionic-angular';

import { GatewayConfig } from '../modules/communication';

import { RestGatewayConfigFactory } from '../config';

export const ApplicationProviders = [
  { provide: ErrorHandler, useClass: IonicErrorHandler },
  { provide: GatewayConfig, useFactory: RestGatewayConfigFactory }
];