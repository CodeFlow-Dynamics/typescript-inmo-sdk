// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { PostApiV1TokenGenerateData, PostApiV1TokenGenerateResponse, PostApiV1TokenVerifyData } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface TokenRepo {
  postTokenGenerate(options?: Omit<PostApiV1TokenGenerateData, 'url'>): Promise<ResultApi<PostApiV1TokenGenerateResponse>>;
  postTokenVerify(options?: Omit<PostApiV1TokenVerifyData, 'url'>): Promise<ResultApi<void>>;
}

export class TokenRepoImpl extends BaseRepo implements TokenRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  postTokenGenerate(options?: Omit<PostApiV1TokenGenerateData, 'url'>): Promise<ResultApi<PostApiV1TokenGenerateResponse>> {
    return this.executeApiCall<PostApiV1TokenGenerateResponse>(
      () => this.api.token.postApiV1TokenGenerate(options),
    );
  }

  postTokenVerify(options?: Omit<PostApiV1TokenVerifyData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.token.postApiV1TokenVerify(options),
    );
  }
}
