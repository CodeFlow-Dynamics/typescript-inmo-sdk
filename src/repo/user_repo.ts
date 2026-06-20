// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { GetApiV1UserData, GetApiV1UserResponse, PostApiV1UserData, PostApiV1UserResponse, PutApiV1UserPreferencesLanguageData } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface UserRepo {
  getUser(options?: Omit<GetApiV1UserData, 'url'>): Promise<ResultApi<GetApiV1UserResponse>>;
  postUser(options?: Omit<PostApiV1UserData, 'url'>): Promise<ResultApi<PostApiV1UserResponse>>;
  putUserPreferencesLanguage(options?: Omit<PutApiV1UserPreferencesLanguageData, 'url'>): Promise<ResultApi<void>>;
}

export class UserRepoImpl extends BaseRepo implements UserRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  getUser(options?: Omit<GetApiV1UserData, 'url'>): Promise<ResultApi<GetApiV1UserResponse>> {
    return this.executeApiCall<GetApiV1UserResponse>(
      () => this.api.user.getApiV1User(options),
    );
  }

  postUser(options?: Omit<PostApiV1UserData, 'url'>): Promise<ResultApi<PostApiV1UserResponse>> {
    return this.executeApiCall<PostApiV1UserResponse>(
      () => this.api.user.postApiV1User(options),
    );
  }

  putUserPreferencesLanguage(options?: Omit<PutApiV1UserPreferencesLanguageData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.user.putApiV1UserPreferencesLanguage(options),
    );
  }
}
