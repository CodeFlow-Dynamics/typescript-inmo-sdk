// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class PasswordClient {
  constructor(private readonly client: Client) {}

  postApiV1PasswordChange(...args: Parameters<typeof sdk.postApiV1PasswordChange>) {
    const [options] = args;
    return sdk.postApiV1PasswordChange({ ...options, client: this.client });
  }

  postApiV1PasswordForgotByEmail(...args: Parameters<typeof sdk.postApiV1PasswordForgotByEmail>) {
    const [options] = args;
    return sdk.postApiV1PasswordForgotByEmail({ ...options, client: this.client });
  }

  postApiV1PasswordReset(...args: Parameters<typeof sdk.postApiV1PasswordReset>) {
    const [options] = args;
    return sdk.postApiV1PasswordReset({ ...options, client: this.client });
  }
}
