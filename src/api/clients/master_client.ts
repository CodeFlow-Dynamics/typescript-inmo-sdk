// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class MasterClient {
  constructor(private readonly client: Client) {}

  postApiV1Master(...args: Parameters<typeof sdk.postApiV1Master>) {
    const [options] = args;
    return sdk.postApiV1Master({ ...options, client: this.client });
  }
}
