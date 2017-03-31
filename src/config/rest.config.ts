import { GatewayConfig } from '../modules/communication';

export function RestGatewayConfigFactory(): GatewayConfig {
  return {
    host: '78.46.204.166',
    protocol: 'http',
    retryInterval: 500,
    retryAttempts: 4
  }
}