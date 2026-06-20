// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class PublisherClient {
  constructor(private readonly client: Client) {}

  deleteApiV1PublishersByIdMembersByUserId(...args: Parameters<typeof sdk.deleteApiV1PublishersByIdMembersByUserId>) {
    const [options] = args;
    return sdk.deleteApiV1PublishersByIdMembersByUserId({ ...options, client: this.client });
  }

  getApiV1Publishers(...args: Parameters<typeof sdk.getApiV1Publishers>) {
    const [options] = args;
    return sdk.getApiV1Publishers({ ...options, client: this.client });
  }

  getApiV1PublishersById(...args: Parameters<typeof sdk.getApiV1PublishersById>) {
    const [options] = args;
    return sdk.getApiV1PublishersById({ ...options, client: this.client });
  }

  getApiV1PublishersByIdListings(...args: Parameters<typeof sdk.getApiV1PublishersByIdListings>) {
    const [options] = args;
    return sdk.getApiV1PublishersByIdListings({ ...options, client: this.client });
  }

  getApiV1PublishersByIdListingsByListingId(...args: Parameters<typeof sdk.getApiV1PublishersByIdListingsByListingId>) {
    const [options] = args;
    return sdk.getApiV1PublishersByIdListingsByListingId({ ...options, client: this.client });
  }

  getApiV1PublishersByIdMembers(...args: Parameters<typeof sdk.getApiV1PublishersByIdMembers>) {
    const [options] = args;
    return sdk.getApiV1PublishersByIdMembers({ ...options, client: this.client });
  }

  postApiV1Publishers(...args: Parameters<typeof sdk.postApiV1Publishers>) {
    const [options] = args;
    return sdk.postApiV1Publishers({ ...options, client: this.client });
  }

  postApiV1PublishersByIdMembers(...args: Parameters<typeof sdk.postApiV1PublishersByIdMembers>) {
    const [options] = args;
    return sdk.postApiV1PublishersByIdMembers({ ...options, client: this.client });
  }

  putApiV1PublishersById(...args: Parameters<typeof sdk.putApiV1PublishersById>) {
    const [options] = args;
    return sdk.putApiV1PublishersById({ ...options, client: this.client });
  }
}
