// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { PostApiV1InmoTypeData, PostApiV1InmoTypeResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface InmoTypeRepo {
  postInmoType(options?: Omit<PostApiV1InmoTypeData, 'url'>): Promise<ResultApi<PostApiV1InmoTypeResponse>>;
}

export class InmoTypeRepoImpl extends BaseRepo implements InmoTypeRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  postInmoType(options?: Omit<PostApiV1InmoTypeData, 'url'>): Promise<ResultApi<PostApiV1InmoTypeResponse>> {
    return this.executeApiCall<PostApiV1InmoTypeResponse>(
      () => this.api.inmoType.postApiV1InmoType(options),
    );
  }
}
