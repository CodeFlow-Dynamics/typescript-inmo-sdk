// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { DeleteApiV1SearchesFavouritesByIdData, GetApiV1SearchesFavouritesByIdData, GetApiV1SearchesFavouritesByIdResponse, GetApiV1SearchesFavouritesData, GetApiV1SearchesFavouritesResponse, PatchApiV1SearchesFavouritesByIdPauseData, PatchApiV1SearchesFavouritesByIdPauseResponse, PatchApiV1SearchesFavouritesByIdResumeData, PatchApiV1SearchesFavouritesByIdResumeResponse, PostApiV1SearchesFavouritesData, PostApiV1SearchesFavouritesResponse, PutApiV1SearchesFavouritesByIdData, PutApiV1SearchesFavouritesByIdResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface FavouriteSearchRepo {
  deleteSearchesFavouritesById(options: Omit<DeleteApiV1SearchesFavouritesByIdData, 'url'>): Promise<ResultApi<void>>;
  getSearchesFavourites(options?: Omit<GetApiV1SearchesFavouritesData, 'url'>): Promise<ResultApi<GetApiV1SearchesFavouritesResponse>>;
  getSearchesFavouritesById(options: Omit<GetApiV1SearchesFavouritesByIdData, 'url'>): Promise<ResultApi<GetApiV1SearchesFavouritesByIdResponse>>;
  patchSearchesFavouritesByIdPause(options: Omit<PatchApiV1SearchesFavouritesByIdPauseData, 'url'>): Promise<ResultApi<PatchApiV1SearchesFavouritesByIdPauseResponse>>;
  patchSearchesFavouritesByIdResume(options: Omit<PatchApiV1SearchesFavouritesByIdResumeData, 'url'>): Promise<ResultApi<PatchApiV1SearchesFavouritesByIdResumeResponse>>;
  postSearchesFavourites(options?: Omit<PostApiV1SearchesFavouritesData, 'url'>): Promise<ResultApi<PostApiV1SearchesFavouritesResponse>>;
  putSearchesFavouritesById(options: Omit<PutApiV1SearchesFavouritesByIdData, 'url'>): Promise<ResultApi<PutApiV1SearchesFavouritesByIdResponse>>;
}

export class FavouriteSearchRepoImpl extends BaseRepo implements FavouriteSearchRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  deleteSearchesFavouritesById(options: Omit<DeleteApiV1SearchesFavouritesByIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.favouriteSearch.deleteApiV1SearchesFavouritesById(options),
    );
  }

  getSearchesFavourites(options?: Omit<GetApiV1SearchesFavouritesData, 'url'>): Promise<ResultApi<GetApiV1SearchesFavouritesResponse>> {
    return this.executeApiCall<GetApiV1SearchesFavouritesResponse>(
      () => this.api.favouriteSearch.getApiV1SearchesFavourites(options),
    );
  }

  getSearchesFavouritesById(options: Omit<GetApiV1SearchesFavouritesByIdData, 'url'>): Promise<ResultApi<GetApiV1SearchesFavouritesByIdResponse>> {
    return this.executeApiCall<GetApiV1SearchesFavouritesByIdResponse>(
      () => this.api.favouriteSearch.getApiV1SearchesFavouritesById(options),
    );
  }

  patchSearchesFavouritesByIdPause(options: Omit<PatchApiV1SearchesFavouritesByIdPauseData, 'url'>): Promise<ResultApi<PatchApiV1SearchesFavouritesByIdPauseResponse>> {
    return this.executeApiCall<PatchApiV1SearchesFavouritesByIdPauseResponse>(
      () => this.api.favouriteSearch.patchApiV1SearchesFavouritesByIdPause(options),
    );
  }

  patchSearchesFavouritesByIdResume(options: Omit<PatchApiV1SearchesFavouritesByIdResumeData, 'url'>): Promise<ResultApi<PatchApiV1SearchesFavouritesByIdResumeResponse>> {
    return this.executeApiCall<PatchApiV1SearchesFavouritesByIdResumeResponse>(
      () => this.api.favouriteSearch.patchApiV1SearchesFavouritesByIdResume(options),
    );
  }

  postSearchesFavourites(options?: Omit<PostApiV1SearchesFavouritesData, 'url'>): Promise<ResultApi<PostApiV1SearchesFavouritesResponse>> {
    return this.executeApiCall<PostApiV1SearchesFavouritesResponse>(
      () => this.api.favouriteSearch.postApiV1SearchesFavourites(options),
    );
  }

  putSearchesFavouritesById(options: Omit<PutApiV1SearchesFavouritesByIdData, 'url'>): Promise<ResultApi<PutApiV1SearchesFavouritesByIdResponse>> {
    return this.executeApiCall<PutApiV1SearchesFavouritesByIdResponse>(
      () => this.api.favouriteSearch.putApiV1SearchesFavouritesById(options),
    );
  }
}
