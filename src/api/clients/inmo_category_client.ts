// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class InmoCategoryClient {
  constructor(private readonly client: Client) {}

  deleteApiV1InmoCategoriesById(...args: Parameters<typeof sdk.deleteApiV1InmoCategoriesById>) {
    const [options] = args;
    return sdk.deleteApiV1InmoCategoriesById({ ...options, client: this.client });
  }

  getApiV1InmoCategories(...args: Parameters<typeof sdk.getApiV1InmoCategories>) {
    const [options] = args;
    return sdk.getApiV1InmoCategories({ ...options, client: this.client });
  }

  getApiV1InmoCategoriesById(...args: Parameters<typeof sdk.getApiV1InmoCategoriesById>) {
    const [options] = args;
    return sdk.getApiV1InmoCategoriesById({ ...options, client: this.client });
  }

  postApiV1InmoCategories(...args: Parameters<typeof sdk.postApiV1InmoCategories>) {
    const [options] = args;
    return sdk.postApiV1InmoCategories({ ...options, client: this.client });
  }

  putApiV1InmoCategoriesById(...args: Parameters<typeof sdk.putApiV1InmoCategoriesById>) {
    const [options] = args;
    return sdk.putApiV1InmoCategoriesById({ ...options, client: this.client });
  }
}
