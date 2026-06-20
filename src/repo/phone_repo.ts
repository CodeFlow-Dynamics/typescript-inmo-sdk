// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { PostApiV1PhoneData, PostApiV1PhoneResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface PhoneRepo {
  postPhone(options?: Omit<PostApiV1PhoneData, 'url'>): Promise<ResultApi<PostApiV1PhoneResponse>>;
}

export class PhoneRepoImpl extends BaseRepo implements PhoneRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  postPhone(options?: Omit<PostApiV1PhoneData, 'url'>): Promise<ResultApi<PostApiV1PhoneResponse>> {
    return this.executeApiCall<PostApiV1PhoneResponse>(
      () => this.api.phone.postApiV1Phone(options),
    );
  }
}
