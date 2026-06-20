// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { GetApiV1AdministrativeDivisionsByIdData, GetApiV1AdministrativeDivisionsByIdResponse, GetApiV1AdministrativeDivisionsData, GetApiV1AdministrativeDivisionsResponse, GetApiV1AdministrativeDivisionsSearchData, GetApiV1AdministrativeDivisionsSearchResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface AdministrativeDivisionRepo {
  getAdministrativeDivisions(options?: Omit<GetApiV1AdministrativeDivisionsData, 'url'>): Promise<ResultApi<GetApiV1AdministrativeDivisionsResponse>>;
  getAdministrativeDivisionsById(options: Omit<GetApiV1AdministrativeDivisionsByIdData, 'url'>): Promise<ResultApi<GetApiV1AdministrativeDivisionsByIdResponse>>;
  getAdministrativeDivisionsSearch(options?: Omit<GetApiV1AdministrativeDivisionsSearchData, 'url'>): Promise<ResultApi<GetApiV1AdministrativeDivisionsSearchResponse>>;
}

export class AdministrativeDivisionRepoImpl extends BaseRepo implements AdministrativeDivisionRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  getAdministrativeDivisions(options?: Omit<GetApiV1AdministrativeDivisionsData, 'url'>): Promise<ResultApi<GetApiV1AdministrativeDivisionsResponse>> {
    return this.executeApiCall<GetApiV1AdministrativeDivisionsResponse>(
      () => this.api.administrativeDivision.getApiV1AdministrativeDivisions(options),
    );
  }

  getAdministrativeDivisionsById(options: Omit<GetApiV1AdministrativeDivisionsByIdData, 'url'>): Promise<ResultApi<GetApiV1AdministrativeDivisionsByIdResponse>> {
    return this.executeApiCall<GetApiV1AdministrativeDivisionsByIdResponse>(
      () => this.api.administrativeDivision.getApiV1AdministrativeDivisionsById(options),
    );
  }

  getAdministrativeDivisionsSearch(options?: Omit<GetApiV1AdministrativeDivisionsSearchData, 'url'>): Promise<ResultApi<GetApiV1AdministrativeDivisionsSearchResponse>> {
    return this.executeApiCall<GetApiV1AdministrativeDivisionsSearchResponse>(
      () => this.api.administrativeDivision.getApiV1AdministrativeDivisionsSearch(options),
    );
  }
}
