// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { PostApiV1MasterData, PostApiV1MasterResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface MasterRepo {
  postMaster(options?: Omit<PostApiV1MasterData, 'url'>): Promise<ResultApi<PostApiV1MasterResponse>>;
}

export class MasterRepoImpl extends BaseRepo implements MasterRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  postMaster(options?: Omit<PostApiV1MasterData, 'url'>): Promise<ResultApi<PostApiV1MasterResponse>> {
    return this.executeApiCall<PostApiV1MasterResponse>(
      () => this.api.master.postApiV1Master(options),
    );
  }
}
