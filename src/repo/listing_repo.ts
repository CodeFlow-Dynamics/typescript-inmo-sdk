// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { DeleteApiV1ListingsByIdData, DeleteApiV1ListingsByIdMediaByMediaIdData, GetApiV1ListingsByIdData, GetApiV1ListingsByIdResponse, GetApiV1ListingsData, GetApiV1ListingsResponse, PostApiV1ListingsByIdMediaData, PostApiV1ListingsByIdMediaResponse, PostApiV1ListingsByIdViewsData, PostApiV1ListingsData, PostApiV1ListingsResponse, PutApiV1ListingsByIdAmenitiesData, PutApiV1ListingsByIdAmenitiesResponse, PutApiV1ListingsByIdData, PutApiV1ListingsByIdLocationData, PutApiV1ListingsByIdLocationResponse, PutApiV1ListingsByIdMediaByMediaIdPrimaryData, PutApiV1ListingsByIdMediaReorderData, PutApiV1ListingsByIdResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface ListingRepo {
  deleteListingsById(options: Omit<DeleteApiV1ListingsByIdData, 'url'>): Promise<ResultApi<void>>;
  deleteListingsByIdMediaByMediaId(options: Omit<DeleteApiV1ListingsByIdMediaByMediaIdData, 'url'>): Promise<ResultApi<void>>;
  getListings(options?: Omit<GetApiV1ListingsData, 'url'>): Promise<ResultApi<GetApiV1ListingsResponse>>;
  getListingsById(options: Omit<GetApiV1ListingsByIdData, 'url'>): Promise<ResultApi<GetApiV1ListingsByIdResponse>>;
  postListings(options?: Omit<PostApiV1ListingsData, 'url'>): Promise<ResultApi<PostApiV1ListingsResponse>>;
  postListingsByIdMedia(options: Omit<PostApiV1ListingsByIdMediaData, 'url'>): Promise<ResultApi<PostApiV1ListingsByIdMediaResponse>>;
  postListingsByIdViews(options: Omit<PostApiV1ListingsByIdViewsData, 'url'>): Promise<ResultApi<void>>;
  putListingsById(options: Omit<PutApiV1ListingsByIdData, 'url'>): Promise<ResultApi<PutApiV1ListingsByIdResponse>>;
  putListingsByIdAmenities(options: Omit<PutApiV1ListingsByIdAmenitiesData, 'url'>): Promise<ResultApi<PutApiV1ListingsByIdAmenitiesResponse>>;
  putListingsByIdLocation(options: Omit<PutApiV1ListingsByIdLocationData, 'url'>): Promise<ResultApi<PutApiV1ListingsByIdLocationResponse>>;
  putListingsByIdMediaByMediaIdPrimary(options: Omit<PutApiV1ListingsByIdMediaByMediaIdPrimaryData, 'url'>): Promise<ResultApi<void>>;
  putListingsByIdMediaReorder(options: Omit<PutApiV1ListingsByIdMediaReorderData, 'url'>): Promise<ResultApi<void>>;
}

export class ListingRepoImpl extends BaseRepo implements ListingRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  deleteListingsById(options: Omit<DeleteApiV1ListingsByIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.listing.deleteApiV1ListingsById(options),
    );
  }

  deleteListingsByIdMediaByMediaId(options: Omit<DeleteApiV1ListingsByIdMediaByMediaIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.listing.deleteApiV1ListingsByIdMediaByMediaId(options),
    );
  }

  getListings(options?: Omit<GetApiV1ListingsData, 'url'>): Promise<ResultApi<GetApiV1ListingsResponse>> {
    return this.executeApiCall<GetApiV1ListingsResponse>(
      () => this.api.listing.getApiV1Listings(options),
    );
  }

  getListingsById(options: Omit<GetApiV1ListingsByIdData, 'url'>): Promise<ResultApi<GetApiV1ListingsByIdResponse>> {
    return this.executeApiCall<GetApiV1ListingsByIdResponse>(
      () => this.api.listing.getApiV1ListingsById(options),
    );
  }

  postListings(options?: Omit<PostApiV1ListingsData, 'url'>): Promise<ResultApi<PostApiV1ListingsResponse>> {
    return this.executeApiCall<PostApiV1ListingsResponse>(
      () => this.api.listing.postApiV1Listings(options),
    );
  }

  postListingsByIdMedia(options: Omit<PostApiV1ListingsByIdMediaData, 'url'>): Promise<ResultApi<PostApiV1ListingsByIdMediaResponse>> {
    return this.executeApiCall<PostApiV1ListingsByIdMediaResponse>(
      () => this.api.listing.postApiV1ListingsByIdMedia(options),
    );
  }

  postListingsByIdViews(options: Omit<PostApiV1ListingsByIdViewsData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.listing.postApiV1ListingsByIdViews(options),
    );
  }

  putListingsById(options: Omit<PutApiV1ListingsByIdData, 'url'>): Promise<ResultApi<PutApiV1ListingsByIdResponse>> {
    return this.executeApiCall<PutApiV1ListingsByIdResponse>(
      () => this.api.listing.putApiV1ListingsById(options),
    );
  }

  putListingsByIdAmenities(options: Omit<PutApiV1ListingsByIdAmenitiesData, 'url'>): Promise<ResultApi<PutApiV1ListingsByIdAmenitiesResponse>> {
    return this.executeApiCall<PutApiV1ListingsByIdAmenitiesResponse>(
      () => this.api.listing.putApiV1ListingsByIdAmenities(options),
    );
  }

  putListingsByIdLocation(options: Omit<PutApiV1ListingsByIdLocationData, 'url'>): Promise<ResultApi<PutApiV1ListingsByIdLocationResponse>> {
    return this.executeApiCall<PutApiV1ListingsByIdLocationResponse>(
      () => this.api.listing.putApiV1ListingsByIdLocation(options),
    );
  }

  putListingsByIdMediaByMediaIdPrimary(options: Omit<PutApiV1ListingsByIdMediaByMediaIdPrimaryData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.listing.putApiV1ListingsByIdMediaByMediaIdPrimary(options),
    );
  }

  putListingsByIdMediaReorder(options: Omit<PutApiV1ListingsByIdMediaReorderData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.listing.putApiV1ListingsByIdMediaReorder(options),
    );
  }
}
