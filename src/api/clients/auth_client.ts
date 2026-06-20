// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class AuthClient {
  constructor(private readonly client: Client) {}

  getApiV1AuthDevices(...args: Parameters<typeof sdk.getApiV1AuthDevices>) {
    const [options] = args;
    return sdk.getApiV1AuthDevices({ ...options, client: this.client });
  }

  postApiV1AuthLoginEmail(...args: Parameters<typeof sdk.postApiV1AuthLoginEmail>) {
    const [options] = args;
    return sdk.postApiV1AuthLoginEmail({ ...options, client: this.client });
  }

  postApiV1AuthLoginGoogleByIdToken(...args: Parameters<typeof sdk.postApiV1AuthLoginGoogleByIdToken>) {
    const [options] = args;
    return sdk.postApiV1AuthLoginGoogleByIdToken({ ...options, client: this.client });
  }

  postApiV1AuthLogout(...args: Parameters<typeof sdk.postApiV1AuthLogout>) {
    const [options] = args;
    return sdk.postApiV1AuthLogout({ ...options, client: this.client });
  }

  postApiV1AuthLogoutAll(...args: Parameters<typeof sdk.postApiV1AuthLogoutAll>) {
    const [options] = args;
    return sdk.postApiV1AuthLogoutAll({ ...options, client: this.client });
  }

  postApiV1AuthLogoutByDeviceId(...args: Parameters<typeof sdk.postApiV1AuthLogoutByDeviceId>) {
    const [options] = args;
    return sdk.postApiV1AuthLogoutByDeviceId({ ...options, client: this.client });
  }

  postApiV1AuthRefresh(...args: Parameters<typeof sdk.postApiV1AuthRefresh>) {
    const [options] = args;
    return sdk.postApiV1AuthRefresh({ ...options, client: this.client });
  }
}
