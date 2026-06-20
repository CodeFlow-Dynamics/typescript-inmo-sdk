// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class AdminClient {
  constructor(private readonly client: Client) {}

  deleteApiV1AdminById(...args: Parameters<typeof sdk.deleteApiV1AdminById>) {
    const [options] = args;
    return sdk.deleteApiV1AdminById({ ...options, client: this.client });
  }

  getApiV1AdminById(...args: Parameters<typeof sdk.getApiV1AdminById>) {
    const [options] = args;
    return sdk.getApiV1AdminById({ ...options, client: this.client });
  }

  postApiV1Admin(...args: Parameters<typeof sdk.postApiV1Admin>) {
    const [options] = args;
    return sdk.postApiV1Admin({ ...options, client: this.client });
  }

  putApiV1AdminById(...args: Parameters<typeof sdk.putApiV1AdminById>) {
    const [options] = args;
    return sdk.putApiV1AdminById({ ...options, client: this.client });
  }
}
