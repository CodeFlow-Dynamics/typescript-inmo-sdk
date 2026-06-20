// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class UserClient {
  constructor(private readonly client: Client) {}

  getApiV1User(...args: Parameters<typeof sdk.getApiV1User>) {
    const [options] = args;
    return sdk.getApiV1User({ ...options, client: this.client });
  }

  postApiV1User(...args: Parameters<typeof sdk.postApiV1User>) {
    const [options] = args;
    return sdk.postApiV1User({ ...options, client: this.client });
  }

  putApiV1UserPreferencesLanguage(...args: Parameters<typeof sdk.putApiV1UserPreferencesLanguage>) {
    const [options] = args;
    return sdk.putApiV1UserPreferencesLanguage({ ...options, client: this.client });
  }
}
