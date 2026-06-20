// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class IdentificationClient {
  constructor(private readonly client: Client) {}

  deleteApiV1IdentificationById(...args: Parameters<typeof sdk.deleteApiV1IdentificationById>) {
    const [options] = args;
    return sdk.deleteApiV1IdentificationById({ ...options, client: this.client });
  }

  getApiV1Identification(...args: Parameters<typeof sdk.getApiV1Identification>) {
    const [options] = args;
    return sdk.getApiV1Identification({ ...options, client: this.client });
  }

  getApiV1IdentificationById(...args: Parameters<typeof sdk.getApiV1IdentificationById>) {
    const [options] = args;
    return sdk.getApiV1IdentificationById({ ...options, client: this.client });
  }

  postApiV1Identification(...args: Parameters<typeof sdk.postApiV1Identification>) {
    const [options] = args;
    return sdk.postApiV1Identification({ ...options, client: this.client });
  }

  putApiV1IdentificationById(...args: Parameters<typeof sdk.putApiV1IdentificationById>) {
    const [options] = args;
    return sdk.putApiV1IdentificationById({ ...options, client: this.client });
  }
}
