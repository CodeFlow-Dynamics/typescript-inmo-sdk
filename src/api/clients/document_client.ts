// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class DocumentClient {
  constructor(private readonly client: Client) {}

  deleteApiV1DocumentById(...args: Parameters<typeof sdk.deleteApiV1DocumentById>) {
    const [options] = args;
    return sdk.deleteApiV1DocumentById({ ...options, client: this.client });
  }

  getApiV1Document(...args: Parameters<typeof sdk.getApiV1Document>) {
    const [options] = args;
    return sdk.getApiV1Document({ ...options, client: this.client });
  }

  getApiV1DocumentById(...args: Parameters<typeof sdk.getApiV1DocumentById>) {
    const [options] = args;
    return sdk.getApiV1DocumentById({ ...options, client: this.client });
  }

  postApiV1Document(...args: Parameters<typeof sdk.postApiV1Document>) {
    const [options] = args;
    return sdk.postApiV1Document({ ...options, client: this.client });
  }

  postApiV1DocumentBulk(...args: Parameters<typeof sdk.postApiV1DocumentBulk>) {
    const [options] = args;
    return sdk.postApiV1DocumentBulk({ ...options, client: this.client });
  }

  putApiV1DocumentById(...args: Parameters<typeof sdk.putApiV1DocumentById>) {
    const [options] = args;
    return sdk.putApiV1DocumentById({ ...options, client: this.client });
  }
}
