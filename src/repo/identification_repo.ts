// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { DeleteApiV1IdentificationByIdData, GetApiV1IdentificationByIdData, GetApiV1IdentificationByIdResponse, GetApiV1IdentificationData, GetApiV1IdentificationResponse, PostApiV1IdentificationData, PostApiV1IdentificationResponse, PutApiV1IdentificationByIdData, PutApiV1IdentificationByIdResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface IdentificationRepo {
  deleteIdentificationById(options: Omit<DeleteApiV1IdentificationByIdData, 'url'>): Promise<ResultApi<void>>;
  getIdentification(options?: Omit<GetApiV1IdentificationData, 'url'>): Promise<ResultApi<GetApiV1IdentificationResponse>>;
  getIdentificationById(options: Omit<GetApiV1IdentificationByIdData, 'url'>): Promise<ResultApi<GetApiV1IdentificationByIdResponse>>;
  postIdentification(options?: Omit<PostApiV1IdentificationData, 'url'>): Promise<ResultApi<PostApiV1IdentificationResponse>>;
  putIdentificationById(options: Omit<PutApiV1IdentificationByIdData, 'url'>): Promise<ResultApi<PutApiV1IdentificationByIdResponse>>;
}

export class IdentificationRepoImpl extends BaseRepo implements IdentificationRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  deleteIdentificationById(options: Omit<DeleteApiV1IdentificationByIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.identification.deleteApiV1IdentificationById(options),
    );
  }

  getIdentification(options?: Omit<GetApiV1IdentificationData, 'url'>): Promise<ResultApi<GetApiV1IdentificationResponse>> {
    return this.executeApiCall<GetApiV1IdentificationResponse>(
      () => this.api.identification.getApiV1Identification(options),
    );
  }

  getIdentificationById(options: Omit<GetApiV1IdentificationByIdData, 'url'>): Promise<ResultApi<GetApiV1IdentificationByIdResponse>> {
    return this.executeApiCall<GetApiV1IdentificationByIdResponse>(
      () => this.api.identification.getApiV1IdentificationById(options),
    );
  }

  postIdentification(options?: Omit<PostApiV1IdentificationData, 'url'>): Promise<ResultApi<PostApiV1IdentificationResponse>> {
    return this.executeApiCall<PostApiV1IdentificationResponse>(
      () => this.api.identification.postApiV1Identification(options),
    );
  }

  putIdentificationById(options: Omit<PutApiV1IdentificationByIdData, 'url'>): Promise<ResultApi<PutApiV1IdentificationByIdResponse>> {
    return this.executeApiCall<PutApiV1IdentificationByIdResponse>(
      () => this.api.identification.putApiV1IdentificationById(options),
    );
  }
}
