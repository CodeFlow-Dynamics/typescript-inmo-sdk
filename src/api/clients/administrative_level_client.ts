// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class AdministrativeLevelClient {
  constructor(private readonly client: Client) {}

  getApiV1AdministrativeLevels(...args: Parameters<typeof sdk.getApiV1AdministrativeLevels>) {
    const [options] = args;
    return sdk.getApiV1AdministrativeLevels({ ...options, client: this.client });
  }
}
