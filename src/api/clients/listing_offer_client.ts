// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class ListingOfferClient {
  constructor(private readonly client: Client) {}

  deleteApiV1ListingsByListingIdOffersByOfferId(...args: Parameters<typeof sdk.deleteApiV1ListingsByListingIdOffersByOfferId>) {
    const [options] = args;
    return sdk.deleteApiV1ListingsByListingIdOffersByOfferId({ ...options, client: this.client });
  }

  patchApiV1ListingsByListingIdOffersByOfferIdStatus(...args: Parameters<typeof sdk.patchApiV1ListingsByListingIdOffersByOfferIdStatus>) {
    const [options] = args;
    return sdk.patchApiV1ListingsByListingIdOffersByOfferIdStatus({ ...options, client: this.client });
  }

  postApiV1ListingsByListingIdOffers(...args: Parameters<typeof sdk.postApiV1ListingsByListingIdOffers>) {
    const [options] = args;
    return sdk.postApiV1ListingsByListingIdOffers({ ...options, client: this.client });
  }

  putApiV1ListingsByListingIdOffersByOfferId(...args: Parameters<typeof sdk.putApiV1ListingsByListingIdOffersByOfferId>) {
    const [options] = args;
    return sdk.putApiV1ListingsByListingIdOffersByOfferId({ ...options, client: this.client });
  }
}
