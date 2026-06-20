// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { DeleteApiV1CountryByIdData, GetApiV1CountryByIdData, GetApiV1CountryByIdResponse, GetApiV1CountryData, GetApiV1CountryResponse, PostApiV1CountryBulkData, PostApiV1CountryBulkResponse, PostApiV1CountryData, PostApiV1CountryResponse, PutApiV1CountryByIdData, PutApiV1CountryByIdResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface CountryRepo {
  deleteCountryById(options: Omit<DeleteApiV1CountryByIdData, 'url'>): Promise<ResultApi<void>>;
  getCountry(options?: Omit<GetApiV1CountryData, 'url'>): Promise<ResultApi<GetApiV1CountryResponse>>;
  getCountryById(options: Omit<GetApiV1CountryByIdData, 'url'>): Promise<ResultApi<GetApiV1CountryByIdResponse>>;
  postCountry(options?: Omit<PostApiV1CountryData, 'url'>): Promise<ResultApi<PostApiV1CountryResponse>>;
  postCountryBulk(options?: Omit<PostApiV1CountryBulkData, 'url'>): Promise<ResultApi<PostApiV1CountryBulkResponse>>;
  putCountryById(options: Omit<PutApiV1CountryByIdData, 'url'>): Promise<ResultApi<PutApiV1CountryByIdResponse>>;
}

export class CountryRepoImpl extends BaseRepo implements CountryRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  deleteCountryById(options: Omit<DeleteApiV1CountryByIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.country.deleteApiV1CountryById(options),
    );
  }

  getCountry(options?: Omit<GetApiV1CountryData, 'url'>): Promise<ResultApi<GetApiV1CountryResponse>> {
    return this.executeApiCall<GetApiV1CountryResponse>(
      () => this.api.country.getApiV1Country(options),
    );
  }

  getCountryById(options: Omit<GetApiV1CountryByIdData, 'url'>): Promise<ResultApi<GetApiV1CountryByIdResponse>> {
    return this.executeApiCall<GetApiV1CountryByIdResponse>(
      () => this.api.country.getApiV1CountryById(options),
    );
  }

  postCountry(options?: Omit<PostApiV1CountryData, 'url'>): Promise<ResultApi<PostApiV1CountryResponse>> {
    return this.executeApiCall<PostApiV1CountryResponse>(
      () => this.api.country.postApiV1Country(options),
    );
  }

  postCountryBulk(options?: Omit<PostApiV1CountryBulkData, 'url'>): Promise<ResultApi<PostApiV1CountryBulkResponse>> {
    return this.executeApiCall<PostApiV1CountryBulkResponse>(
      () => this.api.country.postApiV1CountryBulk(options),
    );
  }

  putCountryById(options: Omit<PutApiV1CountryByIdData, 'url'>): Promise<ResultApi<PutApiV1CountryByIdResponse>> {
    return this.executeApiCall<PutApiV1CountryByIdResponse>(
      () => this.api.country.putApiV1CountryById(options),
    );
  }
}
