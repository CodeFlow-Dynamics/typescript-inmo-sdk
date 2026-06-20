// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class PhoneClient {
  constructor(private readonly client: Client) {}

  postApiV1Phone(...args: Parameters<typeof sdk.postApiV1Phone>) {
    const [options] = args;
    return sdk.postApiV1Phone({ ...options, client: this.client });
  }
}
