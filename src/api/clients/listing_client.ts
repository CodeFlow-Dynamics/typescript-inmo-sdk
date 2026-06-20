// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class ListingClient {
  constructor(private readonly client: Client) {}

  deleteApiV1ListingsById(...args: Parameters<typeof sdk.deleteApiV1ListingsById>) {
    const [options] = args;
    return sdk.deleteApiV1ListingsById({ ...options, client: this.client });
  }

  deleteApiV1ListingsByIdMediaByMediaId(...args: Parameters<typeof sdk.deleteApiV1ListingsByIdMediaByMediaId>) {
    const [options] = args;
    return sdk.deleteApiV1ListingsByIdMediaByMediaId({ ...options, client: this.client });
  }

  getApiV1Listings(...args: Parameters<typeof sdk.getApiV1Listings>) {
    const [options] = args;
    return sdk.getApiV1Listings({ ...options, client: this.client });
  }

  getApiV1ListingsById(...args: Parameters<typeof sdk.getApiV1ListingsById>) {
    const [options] = args;
    return sdk.getApiV1ListingsById({ ...options, client: this.client });
  }

  postApiV1Listings(...args: Parameters<typeof sdk.postApiV1Listings>) {
    const [options] = args;
    return sdk.postApiV1Listings({ ...options, client: this.client });
  }

  postApiV1ListingsByIdMedia(...args: Parameters<typeof sdk.postApiV1ListingsByIdMedia>) {
    const [options] = args;
    return sdk.postApiV1ListingsByIdMedia({ ...options, client: this.client });
  }

  postApiV1ListingsByIdViews(...args: Parameters<typeof sdk.postApiV1ListingsByIdViews>) {
    const [options] = args;
    return sdk.postApiV1ListingsByIdViews({ ...options, client: this.client });
  }

  putApiV1ListingsById(...args: Parameters<typeof sdk.putApiV1ListingsById>) {
    const [options] = args;
    return sdk.putApiV1ListingsById({ ...options, client: this.client });
  }

  putApiV1ListingsByIdAmenities(...args: Parameters<typeof sdk.putApiV1ListingsByIdAmenities>) {
    const [options] = args;
    return sdk.putApiV1ListingsByIdAmenities({ ...options, client: this.client });
  }

  putApiV1ListingsByIdLocation(...args: Parameters<typeof sdk.putApiV1ListingsByIdLocation>) {
    const [options] = args;
    return sdk.putApiV1ListingsByIdLocation({ ...options, client: this.client });
  }

  putApiV1ListingsByIdMediaByMediaIdPrimary(...args: Parameters<typeof sdk.putApiV1ListingsByIdMediaByMediaIdPrimary>) {
    const [options] = args;
    return sdk.putApiV1ListingsByIdMediaByMediaIdPrimary({ ...options, client: this.client });
  }

  putApiV1ListingsByIdMediaReorder(...args: Parameters<typeof sdk.putApiV1ListingsByIdMediaReorder>) {
    const [options] = args;
    return sdk.putApiV1ListingsByIdMediaReorder({ ...options, client: this.client });
  }
}
