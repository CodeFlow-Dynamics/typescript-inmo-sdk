// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class SearchClient {
  constructor(private readonly client: Client) {}

  getApiV1SearchesListings(...args: Parameters<typeof sdk.getApiV1SearchesListings>) {
    const [options] = args;
    return sdk.getApiV1SearchesListings({ ...options, client: this.client });
  }

  getApiV1SearchesListingsAutocomplete(...args: Parameters<typeof sdk.getApiV1SearchesListingsAutocomplete>) {
    const [options] = args;
    return sdk.getApiV1SearchesListingsAutocomplete({ ...options, client: this.client });
  }

  getApiV1SearchesListingsGeoRadius(...args: Parameters<typeof sdk.getApiV1SearchesListingsGeoRadius>) {
    const [options] = args;
    return sdk.getApiV1SearchesListingsGeoRadius({ ...options, client: this.client });
  }

  getApiV1SearchesListingsGeoRectangular(...args: Parameters<typeof sdk.getApiV1SearchesListingsGeoRectangular>) {
    const [options] = args;
    return sdk.getApiV1SearchesListingsGeoRectangular({ ...options, client: this.client });
  }

  postApiV1SearchesListingsReindex(...args: Parameters<typeof sdk.postApiV1SearchesListingsReindex>) {
    const [options] = args;
    return sdk.postApiV1SearchesListingsReindex({ ...options, client: this.client });
  }
}
