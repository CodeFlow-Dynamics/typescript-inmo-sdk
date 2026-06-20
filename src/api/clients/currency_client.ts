// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class CurrencyClient {
  constructor(private readonly client: Client) {}

  getApiV1Currencies(...args: Parameters<typeof sdk.getApiV1Currencies>) {
    const [options] = args;
    return sdk.getApiV1Currencies({ ...options, client: this.client });
  }

  getApiV1CurrenciesById(...args: Parameters<typeof sdk.getApiV1CurrenciesById>) {
    const [options] = args;
    return sdk.getApiV1CurrenciesById({ ...options, client: this.client });
  }
}
