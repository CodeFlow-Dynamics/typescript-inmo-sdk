// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { Client } from '@hey-api/client-axios';
import * as sdk from '../sdk.gen.js';

export class VerificationSubmissionClient {
  constructor(private readonly client: Client) {}

  deleteApiV1VerificationSubmissionById(...args: Parameters<typeof sdk.deleteApiV1VerificationSubmissionById>) {
    const [options] = args;
    return sdk.deleteApiV1VerificationSubmissionById({ ...options, client: this.client });
  }

  getApiV1VerificationSubmission(...args: Parameters<typeof sdk.getApiV1VerificationSubmission>) {
    const [options] = args;
    return sdk.getApiV1VerificationSubmission({ ...options, client: this.client });
  }

  getApiV1VerificationSubmissionById(...args: Parameters<typeof sdk.getApiV1VerificationSubmissionById>) {
    const [options] = args;
    return sdk.getApiV1VerificationSubmissionById({ ...options, client: this.client });
  }

  getApiV1VerificationSubmissionByIdHistory(...args: Parameters<typeof sdk.getApiV1VerificationSubmissionByIdHistory>) {
    const [options] = args;
    return sdk.getApiV1VerificationSubmissionByIdHistory({ ...options, client: this.client });
  }

  postApiV1VerificationSubmission(...args: Parameters<typeof sdk.postApiV1VerificationSubmission>) {
    const [options] = args;
    return sdk.postApiV1VerificationSubmission({ ...options, client: this.client });
  }

  putApiV1VerificationSubmissionByIdResubmit(...args: Parameters<typeof sdk.putApiV1VerificationSubmissionByIdResubmit>) {
    const [options] = args;
    return sdk.putApiV1VerificationSubmissionByIdResubmit({ ...options, client: this.client });
  }

  putApiV1VerificationSubmissionByIdReview(...args: Parameters<typeof sdk.putApiV1VerificationSubmissionByIdReview>) {
    const [options] = args;
    return sdk.putApiV1VerificationSubmissionByIdReview({ ...options, client: this.client });
  }
}
