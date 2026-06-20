// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { PostApiV1PasswordChangeData, PostApiV1PasswordChangeResponse, PostApiV1PasswordForgotByEmailData, PostApiV1PasswordForgotByEmailResponse, PostApiV1PasswordResetData, PostApiV1PasswordResetResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface PasswordRepo {
  postPasswordChange(options?: Omit<PostApiV1PasswordChangeData, 'url'>): Promise<ResultApi<PostApiV1PasswordChangeResponse>>;
  postPasswordForgotByEmail(options: Omit<PostApiV1PasswordForgotByEmailData, 'url'>): Promise<ResultApi<PostApiV1PasswordForgotByEmailResponse>>;
  postPasswordReset(options?: Omit<PostApiV1PasswordResetData, 'url'>): Promise<ResultApi<PostApiV1PasswordResetResponse>>;
}

export class PasswordRepoImpl extends BaseRepo implements PasswordRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  postPasswordChange(options?: Omit<PostApiV1PasswordChangeData, 'url'>): Promise<ResultApi<PostApiV1PasswordChangeResponse>> {
    return this.executeApiCall<PostApiV1PasswordChangeResponse>(
      () => this.api.password.postApiV1PasswordChange(options),
    );
  }

  postPasswordForgotByEmail(options: Omit<PostApiV1PasswordForgotByEmailData, 'url'>): Promise<ResultApi<PostApiV1PasswordForgotByEmailResponse>> {
    return this.executeApiCall<PostApiV1PasswordForgotByEmailResponse>(
      () => this.api.password.postApiV1PasswordForgotByEmail(options),
    );
  }

  postPasswordReset(options?: Omit<PostApiV1PasswordResetData, 'url'>): Promise<ResultApi<PostApiV1PasswordResetResponse>> {
    return this.executeApiCall<PostApiV1PasswordResetResponse>(
      () => this.api.password.postApiV1PasswordReset(options),
    );
  }
}
