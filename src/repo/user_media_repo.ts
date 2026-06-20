// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { PostApiV1UserMediaData, PostApiV1UserMediaResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface UserMediaRepo {
  postUserMedia(options?: PostApiV1UserMediaData): Promise<ResultApi<PostApiV1UserMediaResponse>>;
}

export class UserMediaRepoImpl extends BaseRepo implements UserMediaRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  postUserMedia(options?: PostApiV1UserMediaData): Promise<ResultApi<PostApiV1UserMediaResponse>> {
    return this.executeApiCall<PostApiV1UserMediaResponse>(
      () => this.api.userMedia.postApiV1UserMedia(options),
    );
  }
}
