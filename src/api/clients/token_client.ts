// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class TokenClient {
  constructor(private readonly client: Client) {}

  postApiV1TokenGenerate(...args: Parameters<typeof sdk.postApiV1TokenGenerate>) {
    const [options] = args;
    return sdk.postApiV1TokenGenerate({ ...options, client: this.client });
  }

  postApiV1TokenVerify(...args: Parameters<typeof sdk.postApiV1TokenVerify>) {
    const [options] = args;
    return sdk.postApiV1TokenVerify({ ...options, client: this.client });
  }
}
