// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class InquiryClient {
  constructor(private readonly client: Client) {}

  getApiV1InquiriesInbox(...args: Parameters<typeof sdk.getApiV1InquiriesInbox>) {
    const [options] = args;
    return sdk.getApiV1InquiriesInbox({ ...options, client: this.client });
  }

  getApiV1InquiriesInboxById(...args: Parameters<typeof sdk.getApiV1InquiriesInboxById>) {
    const [options] = args;
    return sdk.getApiV1InquiriesInboxById({ ...options, client: this.client });
  }

  getApiV1InquiriesSent(...args: Parameters<typeof sdk.getApiV1InquiriesSent>) {
    const [options] = args;
    return sdk.getApiV1InquiriesSent({ ...options, client: this.client });
  }

  patchApiV1InquiriesInboxByIdStatus(...args: Parameters<typeof sdk.patchApiV1InquiriesInboxByIdStatus>) {
    const [options] = args;
    return sdk.patchApiV1InquiriesInboxByIdStatus({ ...options, client: this.client });
  }

  postApiV1Inquiries(...args: Parameters<typeof sdk.postApiV1Inquiries>) {
    const [options] = args;
    return sdk.postApiV1Inquiries({ ...options, client: this.client });
  }
}
