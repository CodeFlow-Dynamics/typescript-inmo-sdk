// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { DeleteApiV1ListingsFavouritesByListingIdData, GetApiV1ListingsFavouritesData, GetApiV1ListingsFavouritesResponse, PostApiV1ListingsFavouritesByListingIdData, PostApiV1ListingsFavouritesByListingIdResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface FavouritesRepo {
  deleteListingsFavouritesByListingId(options: Omit<DeleteApiV1ListingsFavouritesByListingIdData, 'url'>): Promise<ResultApi<void>>;
  getListingsFavourites(options?: Omit<GetApiV1ListingsFavouritesData, 'url'>): Promise<ResultApi<GetApiV1ListingsFavouritesResponse>>;
  postListingsFavouritesByListingId(options: Omit<PostApiV1ListingsFavouritesByListingIdData, 'url'>): Promise<ResultApi<PostApiV1ListingsFavouritesByListingIdResponse>>;
}

export class FavouritesRepoImpl extends BaseRepo implements FavouritesRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  deleteListingsFavouritesByListingId(options: Omit<DeleteApiV1ListingsFavouritesByListingIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.favourites.deleteApiV1ListingsFavouritesByListingId(options),
    );
  }

  getListingsFavourites(options?: Omit<GetApiV1ListingsFavouritesData, 'url'>): Promise<ResultApi<GetApiV1ListingsFavouritesResponse>> {
    return this.executeApiCall<GetApiV1ListingsFavouritesResponse>(
      () => this.api.favourites.getApiV1ListingsFavourites(options),
    );
  }

  postListingsFavouritesByListingId(options: Omit<PostApiV1ListingsFavouritesByListingIdData, 'url'>): Promise<ResultApi<PostApiV1ListingsFavouritesByListingIdResponse>> {
    return this.executeApiCall<PostApiV1ListingsFavouritesByListingIdResponse>(
      () => this.api.favourites.postApiV1ListingsFavouritesByListingId(options),
    );
  }
}
