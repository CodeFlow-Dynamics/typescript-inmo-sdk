// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { DeleteApiV1VerificationSubmissionByIdData, GetApiV1VerificationSubmissionByIdData, GetApiV1VerificationSubmissionByIdHistoryData, GetApiV1VerificationSubmissionByIdHistoryResponse, GetApiV1VerificationSubmissionByIdResponse, GetApiV1VerificationSubmissionData, GetApiV1VerificationSubmissionResponse, PostApiV1VerificationSubmissionData, PostApiV1VerificationSubmissionResponse, PutApiV1VerificationSubmissionByIdResubmitData, PutApiV1VerificationSubmissionByIdResubmitResponse, PutApiV1VerificationSubmissionByIdReviewData, PutApiV1VerificationSubmissionByIdReviewResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface VerificationSubmissionRepo {
  deleteVerificationSubmissionById(options: Omit<DeleteApiV1VerificationSubmissionByIdData, 'url'>): Promise<ResultApi<void>>;
  getVerificationSubmission(options?: Omit<GetApiV1VerificationSubmissionData, 'url'>): Promise<ResultApi<GetApiV1VerificationSubmissionResponse>>;
  getVerificationSubmissionById(options: Omit<GetApiV1VerificationSubmissionByIdData, 'url'>): Promise<ResultApi<GetApiV1VerificationSubmissionByIdResponse>>;
  getVerificationSubmissionByIdHistory(options: Omit<GetApiV1VerificationSubmissionByIdHistoryData, 'url'>): Promise<ResultApi<GetApiV1VerificationSubmissionByIdHistoryResponse>>;
  postVerificationSubmission(options?: Omit<PostApiV1VerificationSubmissionData, 'url'>): Promise<ResultApi<PostApiV1VerificationSubmissionResponse>>;
  putVerificationSubmissionByIdResubmit(options: Omit<PutApiV1VerificationSubmissionByIdResubmitData, 'url'>): Promise<ResultApi<PutApiV1VerificationSubmissionByIdResubmitResponse>>;
  putVerificationSubmissionByIdReview(options: Omit<PutApiV1VerificationSubmissionByIdReviewData, 'url'>): Promise<ResultApi<PutApiV1VerificationSubmissionByIdReviewResponse>>;
}

export class VerificationSubmissionRepoImpl extends BaseRepo implements VerificationSubmissionRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  deleteVerificationSubmissionById(options: Omit<DeleteApiV1VerificationSubmissionByIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.verificationSubmission.deleteApiV1VerificationSubmissionById(options),
    );
  }

  getVerificationSubmission(options?: Omit<GetApiV1VerificationSubmissionData, 'url'>): Promise<ResultApi<GetApiV1VerificationSubmissionResponse>> {
    return this.executeApiCall<GetApiV1VerificationSubmissionResponse>(
      () => this.api.verificationSubmission.getApiV1VerificationSubmission(options),
    );
  }

  getVerificationSubmissionById(options: Omit<GetApiV1VerificationSubmissionByIdData, 'url'>): Promise<ResultApi<GetApiV1VerificationSubmissionByIdResponse>> {
    return this.executeApiCall<GetApiV1VerificationSubmissionByIdResponse>(
      () => this.api.verificationSubmission.getApiV1VerificationSubmissionById(options),
    );
  }

  getVerificationSubmissionByIdHistory(options: Omit<GetApiV1VerificationSubmissionByIdHistoryData, 'url'>): Promise<ResultApi<GetApiV1VerificationSubmissionByIdHistoryResponse>> {
    return this.executeApiCall<GetApiV1VerificationSubmissionByIdHistoryResponse>(
      () => this.api.verificationSubmission.getApiV1VerificationSubmissionByIdHistory(options),
    );
  }

  postVerificationSubmission(options?: Omit<PostApiV1VerificationSubmissionData, 'url'>): Promise<ResultApi<PostApiV1VerificationSubmissionResponse>> {
    return this.executeApiCall<PostApiV1VerificationSubmissionResponse>(
      () => this.api.verificationSubmission.postApiV1VerificationSubmission(options),
    );
  }

  putVerificationSubmissionByIdResubmit(options: Omit<PutApiV1VerificationSubmissionByIdResubmitData, 'url'>): Promise<ResultApi<PutApiV1VerificationSubmissionByIdResubmitResponse>> {
    return this.executeApiCall<PutApiV1VerificationSubmissionByIdResubmitResponse>(
      () => this.api.verificationSubmission.putApiV1VerificationSubmissionByIdResubmit(options),
    );
  }

  putVerificationSubmissionByIdReview(options: Omit<PutApiV1VerificationSubmissionByIdReviewData, 'url'>): Promise<ResultApi<PutApiV1VerificationSubmissionByIdReviewResponse>> {
    return this.executeApiCall<PutApiV1VerificationSubmissionByIdReviewResponse>(
      () => this.api.verificationSubmission.putApiV1VerificationSubmissionByIdReview(options),
    );
  }
}
