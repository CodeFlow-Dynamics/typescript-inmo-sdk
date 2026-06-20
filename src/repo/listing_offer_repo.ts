// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { DeleteApiV1ListingsByListingIdOffersByOfferIdData, PatchApiV1ListingsByListingIdOffersByOfferIdStatusData, PatchApiV1ListingsByListingIdOffersByOfferIdStatusResponse, PostApiV1ListingsByListingIdOffersData, PostApiV1ListingsByListingIdOffersResponse, PutApiV1ListingsByListingIdOffersByOfferIdData, PutApiV1ListingsByListingIdOffersByOfferIdResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface ListingOfferRepo {
  deleteListingsByListingIdOffersByOfferId(options: Omit<DeleteApiV1ListingsByListingIdOffersByOfferIdData, 'url'>): Promise<ResultApi<void>>;
  patchListingsByListingIdOffersByOfferIdStatus(options: Omit<PatchApiV1ListingsByListingIdOffersByOfferIdStatusData, 'url'>): Promise<ResultApi<PatchApiV1ListingsByListingIdOffersByOfferIdStatusResponse>>;
  postListingsByListingIdOffers(options: Omit<PostApiV1ListingsByListingIdOffersData, 'url'>): Promise<ResultApi<PostApiV1ListingsByListingIdOffersResponse>>;
  putListingsByListingIdOffersByOfferId(options: Omit<PutApiV1ListingsByListingIdOffersByOfferIdData, 'url'>): Promise<ResultApi<PutApiV1ListingsByListingIdOffersByOfferIdResponse>>;
}

export class ListingOfferRepoImpl extends BaseRepo implements ListingOfferRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  deleteListingsByListingIdOffersByOfferId(options: Omit<DeleteApiV1ListingsByListingIdOffersByOfferIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.listingOffer.deleteApiV1ListingsByListingIdOffersByOfferId(options),
    );
  }

  patchListingsByListingIdOffersByOfferIdStatus(options: Omit<PatchApiV1ListingsByListingIdOffersByOfferIdStatusData, 'url'>): Promise<ResultApi<PatchApiV1ListingsByListingIdOffersByOfferIdStatusResponse>> {
    return this.executeApiCall<PatchApiV1ListingsByListingIdOffersByOfferIdStatusResponse>(
      () => this.api.listingOffer.patchApiV1ListingsByListingIdOffersByOfferIdStatus(options),
    );
  }

  postListingsByListingIdOffers(options: Omit<PostApiV1ListingsByListingIdOffersData, 'url'>): Promise<ResultApi<PostApiV1ListingsByListingIdOffersResponse>> {
    return this.executeApiCall<PostApiV1ListingsByListingIdOffersResponse>(
      () => this.api.listingOffer.postApiV1ListingsByListingIdOffers(options),
    );
  }

  putListingsByListingIdOffersByOfferId(options: Omit<PutApiV1ListingsByListingIdOffersByOfferIdData, 'url'>): Promise<ResultApi<PutApiV1ListingsByListingIdOffersByOfferIdResponse>> {
    return this.executeApiCall<PutApiV1ListingsByListingIdOffersByOfferIdResponse>(
      () => this.api.listingOffer.putApiV1ListingsByListingIdOffersByOfferId(options),
    );
  }
}
