// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class FavouritesClient {
  constructor(private readonly client: Client) {}

  deleteApiV1ListingsFavouritesByListingId(...args: Parameters<typeof sdk.deleteApiV1ListingsFavouritesByListingId>) {
    const [options] = args;
    return sdk.deleteApiV1ListingsFavouritesByListingId({ ...options, client: this.client });
  }

  getApiV1ListingsFavourites(...args: Parameters<typeof sdk.getApiV1ListingsFavourites>) {
    const [options] = args;
    return sdk.getApiV1ListingsFavourites({ ...options, client: this.client });
  }

  postApiV1ListingsFavouritesByListingId(...args: Parameters<typeof sdk.postApiV1ListingsFavouritesByListingId>) {
    const [options] = args;
    return sdk.postApiV1ListingsFavouritesByListingId({ ...options, client: this.client });
  }
}
