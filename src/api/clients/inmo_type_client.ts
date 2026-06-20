// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class InmoTypeClient {
  constructor(private readonly client: Client) {}

  postApiV1InmoType(...args: Parameters<typeof sdk.postApiV1InmoType>) {
    const [options] = args;
    return sdk.postApiV1InmoType({ ...options, client: this.client });
  }
}
