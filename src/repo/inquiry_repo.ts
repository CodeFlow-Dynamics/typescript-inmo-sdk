// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { GetApiV1InquiriesInboxByIdData, GetApiV1InquiriesInboxByIdResponse, GetApiV1InquiriesInboxData, GetApiV1InquiriesInboxResponse, GetApiV1InquiriesSentData, GetApiV1InquiriesSentResponse, PatchApiV1InquiriesInboxByIdStatusData, PatchApiV1InquiriesInboxByIdStatusResponse, PostApiV1InquiriesData, PostApiV1InquiriesResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface InquiryRepo {
  getInquiriesInbox(options?: Omit<GetApiV1InquiriesInboxData, 'url'>): Promise<ResultApi<GetApiV1InquiriesInboxResponse>>;
  getInquiriesInboxById(options: Omit<GetApiV1InquiriesInboxByIdData, 'url'>): Promise<ResultApi<GetApiV1InquiriesInboxByIdResponse>>;
  getInquiriesSent(options?: Omit<GetApiV1InquiriesSentData, 'url'>): Promise<ResultApi<GetApiV1InquiriesSentResponse>>;
  patchInquiriesInboxByIdStatus(options: Omit<PatchApiV1InquiriesInboxByIdStatusData, 'url'>): Promise<ResultApi<PatchApiV1InquiriesInboxByIdStatusResponse>>;
  postInquiries(options?: Omit<PostApiV1InquiriesData, 'url'>): Promise<ResultApi<PostApiV1InquiriesResponse>>;
}

export class InquiryRepoImpl extends BaseRepo implements InquiryRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  getInquiriesInbox(options?: Omit<GetApiV1InquiriesInboxData, 'url'>): Promise<ResultApi<GetApiV1InquiriesInboxResponse>> {
    return this.executeApiCall<GetApiV1InquiriesInboxResponse>(
      () => this.api.inquiry.getApiV1InquiriesInbox(options),
    );
  }

  getInquiriesInboxById(options: Omit<GetApiV1InquiriesInboxByIdData, 'url'>): Promise<ResultApi<GetApiV1InquiriesInboxByIdResponse>> {
    return this.executeApiCall<GetApiV1InquiriesInboxByIdResponse>(
      () => this.api.inquiry.getApiV1InquiriesInboxById(options),
    );
  }

  getInquiriesSent(options?: Omit<GetApiV1InquiriesSentData, 'url'>): Promise<ResultApi<GetApiV1InquiriesSentResponse>> {
    return this.executeApiCall<GetApiV1InquiriesSentResponse>(
      () => this.api.inquiry.getApiV1InquiriesSent(options),
    );
  }

  patchInquiriesInboxByIdStatus(options: Omit<PatchApiV1InquiriesInboxByIdStatusData, 'url'>): Promise<ResultApi<PatchApiV1InquiriesInboxByIdStatusResponse>> {
    return this.executeApiCall<PatchApiV1InquiriesInboxByIdStatusResponse>(
      () => this.api.inquiry.patchApiV1InquiriesInboxByIdStatus(options),
    );
  }

  postInquiries(options?: Omit<PostApiV1InquiriesData, 'url'>): Promise<ResultApi<PostApiV1InquiriesResponse>> {
    return this.executeApiCall<PostApiV1InquiriesResponse>(
      () => this.api.inquiry.postApiV1Inquiries(options),
    );
  }
}
