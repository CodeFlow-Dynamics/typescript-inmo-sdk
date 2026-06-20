// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { GetApiV1SearchesListingsAutocompleteData, GetApiV1SearchesListingsAutocompleteResponse, GetApiV1SearchesListingsData, GetApiV1SearchesListingsGeoRadiusData, GetApiV1SearchesListingsGeoRadiusResponse, GetApiV1SearchesListingsGeoRectangularData, GetApiV1SearchesListingsGeoRectangularResponse, GetApiV1SearchesListingsResponse, PostApiV1SearchesListingsReindexData, PostApiV1SearchesListingsReindexResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface SearchRepo {
  getSearchesListings(options?: Omit<GetApiV1SearchesListingsData, 'url'>): Promise<ResultApi<GetApiV1SearchesListingsResponse>>;
  getSearchesListingsAutocomplete(options?: Omit<GetApiV1SearchesListingsAutocompleteData, 'url'>): Promise<ResultApi<GetApiV1SearchesListingsAutocompleteResponse>>;
  getSearchesListingsGeoRadius(options?: Omit<GetApiV1SearchesListingsGeoRadiusData, 'url'>): Promise<ResultApi<GetApiV1SearchesListingsGeoRadiusResponse>>;
  getSearchesListingsGeoRectangular(options?: Omit<GetApiV1SearchesListingsGeoRectangularData, 'url'>): Promise<ResultApi<GetApiV1SearchesListingsGeoRectangularResponse>>;
  postSearchesListingsReindex(options?: Omit<PostApiV1SearchesListingsReindexData, 'url'>): Promise<ResultApi<PostApiV1SearchesListingsReindexResponse>>;
}

export class SearchRepoImpl extends BaseRepo implements SearchRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  getSearchesListings(options?: Omit<GetApiV1SearchesListingsData, 'url'>): Promise<ResultApi<GetApiV1SearchesListingsResponse>> {
    return this.executeApiCall<GetApiV1SearchesListingsResponse>(
      () => this.api.search.getApiV1SearchesListings(options),
    );
  }

  getSearchesListingsAutocomplete(options?: Omit<GetApiV1SearchesListingsAutocompleteData, 'url'>): Promise<ResultApi<GetApiV1SearchesListingsAutocompleteResponse>> {
    return this.executeApiCall<GetApiV1SearchesListingsAutocompleteResponse>(
      () => this.api.search.getApiV1SearchesListingsAutocomplete(options),
    );
  }

  getSearchesListingsGeoRadius(options?: Omit<GetApiV1SearchesListingsGeoRadiusData, 'url'>): Promise<ResultApi<GetApiV1SearchesListingsGeoRadiusResponse>> {
    return this.executeApiCall<GetApiV1SearchesListingsGeoRadiusResponse>(
      () => this.api.search.getApiV1SearchesListingsGeoRadius(options),
    );
  }

  getSearchesListingsGeoRectangular(options?: Omit<GetApiV1SearchesListingsGeoRectangularData, 'url'>): Promise<ResultApi<GetApiV1SearchesListingsGeoRectangularResponse>> {
    return this.executeApiCall<GetApiV1SearchesListingsGeoRectangularResponse>(
      () => this.api.search.getApiV1SearchesListingsGeoRectangular(options),
    );
  }

  postSearchesListingsReindex(options?: Omit<PostApiV1SearchesListingsReindexData, 'url'>): Promise<ResultApi<PostApiV1SearchesListingsReindexResponse>> {
    return this.executeApiCall<PostApiV1SearchesListingsReindexResponse>(
      () => this.api.search.postApiV1SearchesListingsReindex(options),
    );
  }
}
