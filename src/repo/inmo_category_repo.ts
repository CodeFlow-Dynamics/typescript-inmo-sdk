// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { DeleteApiV1InmoCategoriesByIdData, GetApiV1InmoCategoriesByIdData, GetApiV1InmoCategoriesByIdResponse, GetApiV1InmoCategoriesData, GetApiV1InmoCategoriesResponse, PostApiV1InmoCategoriesData, PostApiV1InmoCategoriesResponse, PutApiV1InmoCategoriesByIdData, PutApiV1InmoCategoriesByIdResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface InmoCategoryRepo {
  deleteInmoCategoriesById(options: Omit<DeleteApiV1InmoCategoriesByIdData, 'url'>): Promise<ResultApi<void>>;
  getInmoCategories(options?: Omit<GetApiV1InmoCategoriesData, 'url'>): Promise<ResultApi<GetApiV1InmoCategoriesResponse>>;
  getInmoCategoriesById(options: Omit<GetApiV1InmoCategoriesByIdData, 'url'>): Promise<ResultApi<GetApiV1InmoCategoriesByIdResponse>>;
  postInmoCategories(options?: Omit<PostApiV1InmoCategoriesData, 'url'>): Promise<ResultApi<PostApiV1InmoCategoriesResponse>>;
  putInmoCategoriesById(options: Omit<PutApiV1InmoCategoriesByIdData, 'url'>): Promise<ResultApi<PutApiV1InmoCategoriesByIdResponse>>;
}

export class InmoCategoryRepoImpl extends BaseRepo implements InmoCategoryRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  deleteInmoCategoriesById(options: Omit<DeleteApiV1InmoCategoriesByIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.inmoCategory.deleteApiV1InmoCategoriesById(options),
    );
  }

  getInmoCategories(options?: Omit<GetApiV1InmoCategoriesData, 'url'>): Promise<ResultApi<GetApiV1InmoCategoriesResponse>> {
    return this.executeApiCall<GetApiV1InmoCategoriesResponse>(
      () => this.api.inmoCategory.getApiV1InmoCategories(options),
    );
  }

  getInmoCategoriesById(options: Omit<GetApiV1InmoCategoriesByIdData, 'url'>): Promise<ResultApi<GetApiV1InmoCategoriesByIdResponse>> {
    return this.executeApiCall<GetApiV1InmoCategoriesByIdResponse>(
      () => this.api.inmoCategory.getApiV1InmoCategoriesById(options),
    );
  }

  postInmoCategories(options?: Omit<PostApiV1InmoCategoriesData, 'url'>): Promise<ResultApi<PostApiV1InmoCategoriesResponse>> {
    return this.executeApiCall<PostApiV1InmoCategoriesResponse>(
      () => this.api.inmoCategory.postApiV1InmoCategories(options),
    );
  }

  putInmoCategoriesById(options: Omit<PutApiV1InmoCategoriesByIdData, 'url'>): Promise<ResultApi<PutApiV1InmoCategoriesByIdResponse>> {
    return this.executeApiCall<PutApiV1InmoCategoriesByIdResponse>(
      () => this.api.inmoCategory.putApiV1InmoCategoriesById(options),
    );
  }
}
