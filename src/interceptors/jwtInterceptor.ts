import type { InternalAxiosRequestConfig } from 'axios';

import type { AuthTokenProvider } from './authTokenProvider.js';

function requestTargetsRefreshEndpoint(url: string): boolean {
  const withoutQuery = url.split('?')[0] ?? url;
  return withoutQuery.endsWith('/Auth/refresh') || withoutQuery.endsWith('/api/v1/Auth/refresh');
}

export function createJwtInterceptor(tokenProvider: AuthTokenProvider) {
  return async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    const path = config.url ?? '';

    // Refresh uses only the body refresh token; omit Bearer so an expired access token cannot break refresh.
    if (requestTargetsRefreshEndpoint(path)) {
      return config;
    }

    const token = await tokenProvider.getToken();
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }

    return config;
  };
}
