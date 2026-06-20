import { createClient } from '@hey-api/client-axios';
import type { Client } from '@hey-api/client-axios';

import { InmoApi } from './api/inmoApi.js';
import { createInmoRepos, type InmoRepos } from './repo/inmoRepos.js';
import type { AuthTokenProvider } from './interceptors/authTokenProvider.js';
import { createJwtInterceptor } from './interceptors/jwtInterceptor.js';

export interface CreateInmoApiOptions {
  baseURL: string;
  tokenProvider?: AuthTokenProvider;
  client?: Client;
}

export function createInmoApi(options: CreateInmoApiOptions): {
  api: InmoApi;
  client: Client;
  repos: InmoRepos;
} {
  const client =
    options.client ??
    createClient({
      baseURL: options.baseURL,
      throwOnError: false,
    });

  if (options.tokenProvider) {
    client.instance.interceptors.request.use(createJwtInterceptor(options.tokenProvider));
  }

  const api = new InmoApi(client);
  const repos = createInmoRepos(api);

  return { api, client, repos };
}

export type { InmoRepos };
