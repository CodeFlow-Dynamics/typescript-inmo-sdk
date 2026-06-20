// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { GetApiV1AdministrativeLevelsData, GetApiV1AdministrativeLevelsResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface AdministrativeLevelRepo {
  getAdministrativeLevels(options?: Omit<GetApiV1AdministrativeLevelsData, 'url'>): Promise<ResultApi<GetApiV1AdministrativeLevelsResponse>>;
}

export class AdministrativeLevelRepoImpl extends BaseRepo implements AdministrativeLevelRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  getAdministrativeLevels(options?: Omit<GetApiV1AdministrativeLevelsData, 'url'>): Promise<ResultApi<GetApiV1AdministrativeLevelsResponse>> {
    return this.executeApiCall<GetApiV1AdministrativeLevelsResponse>(
      () => this.api.administrativeLevel.getApiV1AdministrativeLevels(options),
    );
  }
}
