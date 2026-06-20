// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class MediaClient {
  constructor(private readonly client: Client) {}

  deleteApiV1MediaById(...args: Parameters<typeof sdk.deleteApiV1MediaById>) {
    const [options] = args;
    return sdk.deleteApiV1MediaById({ ...options, client: this.client });
  }

  getApiV1MediaById(...args: Parameters<typeof sdk.getApiV1MediaById>) {
    const [options] = args;
    return sdk.getApiV1MediaById({ ...options, client: this.client });
  }

  getApiV1MediaByIdEvents(...args: Parameters<typeof sdk.getApiV1MediaByIdEvents>) {
    const [options] = args;
    return sdk.getApiV1MediaByIdEvents({ ...options, client: this.client });
  }

  getApiV1MediaByIdSignedUrl(...args: Parameters<typeof sdk.getApiV1MediaByIdSignedUrl>) {
    const [options] = args;
    return sdk.getApiV1MediaByIdSignedUrl({ ...options, client: this.client });
  }

  postApiV1MediaUpload(...args: Parameters<typeof sdk.postApiV1MediaUpload>) {
    const [options] = args;
    return sdk.postApiV1MediaUpload({ ...options, client: this.client });
  }
}
