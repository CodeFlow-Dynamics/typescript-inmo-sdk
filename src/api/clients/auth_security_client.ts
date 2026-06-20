// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class AuthSecurityClient {
  constructor(private readonly client: Client) {}

  getApiV1AuthSecurityUserByUserId(...args: Parameters<typeof sdk.getApiV1AuthSecurityUserByUserId>) {
    const [options] = args;
    return sdk.getApiV1AuthSecurityUserByUserId({ ...options, client: this.client });
  }
}
