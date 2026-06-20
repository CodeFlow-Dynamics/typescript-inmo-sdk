// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { GetApiV1AuthDevicesData, GetApiV1AuthDevicesResponse, PostApiV1AuthLoginEmailData, PostApiV1AuthLoginEmailResponse, PostApiV1AuthLoginGoogleByIdTokenData, PostApiV1AuthLoginGoogleByIdTokenResponse, PostApiV1AuthLogoutAllData, PostApiV1AuthLogoutByDeviceIdData, PostApiV1AuthLogoutData, PostApiV1AuthRefreshData, PostApiV1AuthRefreshResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface AuthRepo {
  getAuthDevices(options?: Omit<GetApiV1AuthDevicesData, 'url'>): Promise<ResultApi<GetApiV1AuthDevicesResponse>>;
  postAuthLoginEmail(options?: Omit<PostApiV1AuthLoginEmailData, 'url'>): Promise<ResultApi<PostApiV1AuthLoginEmailResponse>>;
  postAuthLoginGoogleByIdToken(options: Omit<PostApiV1AuthLoginGoogleByIdTokenData, 'url'>): Promise<ResultApi<PostApiV1AuthLoginGoogleByIdTokenResponse>>;
  postAuthLogout(options?: Omit<PostApiV1AuthLogoutData, 'url'>): Promise<ResultApi<void>>;
  postAuthLogoutAll(options?: Omit<PostApiV1AuthLogoutAllData, 'url'>): Promise<ResultApi<void>>;
  postAuthLogoutByDeviceId(options: Omit<PostApiV1AuthLogoutByDeviceIdData, 'url'>): Promise<ResultApi<void>>;
  postAuthRefresh(options?: Omit<PostApiV1AuthRefreshData, 'url'>): Promise<ResultApi<PostApiV1AuthRefreshResponse>>;
}

export class AuthRepoImpl extends BaseRepo implements AuthRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  getAuthDevices(options?: Omit<GetApiV1AuthDevicesData, 'url'>): Promise<ResultApi<GetApiV1AuthDevicesResponse>> {
    return this.executeApiCall<GetApiV1AuthDevicesResponse>(
      () => this.api.auth.getApiV1AuthDevices(options),
    );
  }

  postAuthLoginEmail(options?: Omit<PostApiV1AuthLoginEmailData, 'url'>): Promise<ResultApi<PostApiV1AuthLoginEmailResponse>> {
    return this.executeApiCall<PostApiV1AuthLoginEmailResponse>(
      () => this.api.auth.postApiV1AuthLoginEmail(options),
    );
  }

  postAuthLoginGoogleByIdToken(options: Omit<PostApiV1AuthLoginGoogleByIdTokenData, 'url'>): Promise<ResultApi<PostApiV1AuthLoginGoogleByIdTokenResponse>> {
    return this.executeApiCall<PostApiV1AuthLoginGoogleByIdTokenResponse>(
      () => this.api.auth.postApiV1AuthLoginGoogleByIdToken(options),
    );
  }

  postAuthLogout(options?: Omit<PostApiV1AuthLogoutData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.auth.postApiV1AuthLogout(options),
    );
  }

  postAuthLogoutAll(options?: Omit<PostApiV1AuthLogoutAllData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.auth.postApiV1AuthLogoutAll(options),
    );
  }

  postAuthLogoutByDeviceId(options: Omit<PostApiV1AuthLogoutByDeviceIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.auth.postApiV1AuthLogoutByDeviceId(options),
    );
  }

  postAuthRefresh(options?: Omit<PostApiV1AuthRefreshData, 'url'>): Promise<ResultApi<PostApiV1AuthRefreshResponse>> {
    return this.executeApiCall<PostApiV1AuthRefreshResponse>(
      () => this.api.auth.postApiV1AuthRefresh(options),
    );
  }
}
