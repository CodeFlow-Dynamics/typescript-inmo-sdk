// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { DeleteApiV1AdminByIdData, GetApiV1AdminByIdData, GetApiV1AdminByIdResponse, PostApiV1AdminData, PostApiV1AdminResponse, PutApiV1AdminByIdData, PutApiV1AdminByIdResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface AdminRepo {
  deleteAdminById(options: Omit<DeleteApiV1AdminByIdData, 'url'>): Promise<ResultApi<void>>;
  getAdminById(options: Omit<GetApiV1AdminByIdData, 'url'>): Promise<ResultApi<GetApiV1AdminByIdResponse>>;
  postAdmin(options?: Omit<PostApiV1AdminData, 'url'>): Promise<ResultApi<PostApiV1AdminResponse>>;
  putAdminById(options: Omit<PutApiV1AdminByIdData, 'url'>): Promise<ResultApi<PutApiV1AdminByIdResponse>>;
}

export class AdminRepoImpl extends BaseRepo implements AdminRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  deleteAdminById(options: Omit<DeleteApiV1AdminByIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.admin.deleteApiV1AdminById(options),
    );
  }

  getAdminById(options: Omit<GetApiV1AdminByIdData, 'url'>): Promise<ResultApi<GetApiV1AdminByIdResponse>> {
    return this.executeApiCall<GetApiV1AdminByIdResponse>(
      () => this.api.admin.getApiV1AdminById(options),
    );
  }

  postAdmin(options?: Omit<PostApiV1AdminData, 'url'>): Promise<ResultApi<PostApiV1AdminResponse>> {
    return this.executeApiCall<PostApiV1AdminResponse>(
      () => this.api.admin.postApiV1Admin(options),
    );
  }

  putAdminById(options: Omit<PutApiV1AdminByIdData, 'url'>): Promise<ResultApi<PutApiV1AdminByIdResponse>> {
    return this.executeApiCall<PutApiV1AdminByIdResponse>(
      () => this.api.admin.putApiV1AdminById(options),
    );
  }
}
