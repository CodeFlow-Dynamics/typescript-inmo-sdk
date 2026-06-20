// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class AdministrativeDivisionClient {
  constructor(private readonly client: Client) {}

  getApiV1AdministrativeDivisions(...args: Parameters<typeof sdk.getApiV1AdministrativeDivisions>) {
    const [options] = args;
    return sdk.getApiV1AdministrativeDivisions({ ...options, client: this.client });
  }

  getApiV1AdministrativeDivisionsById(...args: Parameters<typeof sdk.getApiV1AdministrativeDivisionsById>) {
    const [options] = args;
    return sdk.getApiV1AdministrativeDivisionsById({ ...options, client: this.client });
  }

  getApiV1AdministrativeDivisionsSearch(...args: Parameters<typeof sdk.getApiV1AdministrativeDivisionsSearch>) {
    const [options] = args;
    return sdk.getApiV1AdministrativeDivisionsSearch({ ...options, client: this.client });
  }
}
