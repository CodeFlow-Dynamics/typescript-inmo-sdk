// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { GetApiV1AuthSecurityUserByUserIdData, GetApiV1AuthSecurityUserByUserIdResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface AuthSecurityRepo {
  getAuthSecurityUserByUserId(options: Omit<GetApiV1AuthSecurityUserByUserIdData, 'url'>): Promise<ResultApi<GetApiV1AuthSecurityUserByUserIdResponse>>;
}

export class AuthSecurityRepoImpl extends BaseRepo implements AuthSecurityRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  getAuthSecurityUserByUserId(options: Omit<GetApiV1AuthSecurityUserByUserIdData, 'url'>): Promise<ResultApi<GetApiV1AuthSecurityUserByUserIdResponse>> {
    return this.executeApiCall<GetApiV1AuthSecurityUserByUserIdResponse>(
      () => this.api.authSecurity.getApiV1AuthSecurityUserByUserId(options),
    );
  }
}
