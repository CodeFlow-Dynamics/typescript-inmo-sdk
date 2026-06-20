// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class CountryClient {
  constructor(private readonly client: Client) {}

  deleteApiV1CountryById(...args: Parameters<typeof sdk.deleteApiV1CountryById>) {
    const [options] = args;
    return sdk.deleteApiV1CountryById({ ...options, client: this.client });
  }

  getApiV1Country(...args: Parameters<typeof sdk.getApiV1Country>) {
    const [options] = args;
    return sdk.getApiV1Country({ ...options, client: this.client });
  }

  getApiV1CountryById(...args: Parameters<typeof sdk.getApiV1CountryById>) {
    const [options] = args;
    return sdk.getApiV1CountryById({ ...options, client: this.client });
  }

  postApiV1Country(...args: Parameters<typeof sdk.postApiV1Country>) {
    const [options] = args;
    return sdk.postApiV1Country({ ...options, client: this.client });
  }

  postApiV1CountryBulk(...args: Parameters<typeof sdk.postApiV1CountryBulk>) {
    const [options] = args;
    return sdk.postApiV1CountryBulk({ ...options, client: this.client });
  }

  putApiV1CountryById(...args: Parameters<typeof sdk.putApiV1CountryById>) {
    const [options] = args;
    return sdk.putApiV1CountryById({ ...options, client: this.client });
  }
}
