// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class AmenityClient {
  constructor(private readonly client: Client) {}

  getApiV1Amenities(...args: Parameters<typeof sdk.getApiV1Amenities>) {
    const [options] = args;
    return sdk.getApiV1Amenities({ ...options, client: this.client });
  }
}
