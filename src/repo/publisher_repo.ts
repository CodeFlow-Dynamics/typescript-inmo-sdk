// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { DeleteApiV1PublishersByIdMembersByUserIdData, GetApiV1PublishersByIdData, GetApiV1PublishersByIdListingsByListingIdData, GetApiV1PublishersByIdListingsByListingIdResponse, GetApiV1PublishersByIdListingsData, GetApiV1PublishersByIdListingsResponse, GetApiV1PublishersByIdMembersData, GetApiV1PublishersByIdMembersResponse, GetApiV1PublishersByIdResponse, GetApiV1PublishersData, GetApiV1PublishersResponse, PostApiV1PublishersByIdMembersData, PostApiV1PublishersByIdMembersResponse, PostApiV1PublishersData, PostApiV1PublishersResponse, PutApiV1PublishersByIdData, PutApiV1PublishersByIdResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface PublisherRepo {
  deletePublishersByIdMembersByUserId(options: Omit<DeleteApiV1PublishersByIdMembersByUserIdData, 'url'>): Promise<ResultApi<void>>;
  getPublishers(options?: Omit<GetApiV1PublishersData, 'url'>): Promise<ResultApi<GetApiV1PublishersResponse>>;
  getPublishersById(options: Omit<GetApiV1PublishersByIdData, 'url'>): Promise<ResultApi<GetApiV1PublishersByIdResponse>>;
  getPublishersByIdListings(options: Omit<GetApiV1PublishersByIdListingsData, 'url'>): Promise<ResultApi<GetApiV1PublishersByIdListingsResponse>>;
  getPublishersByIdListingsByListingId(options: Omit<GetApiV1PublishersByIdListingsByListingIdData, 'url'>): Promise<ResultApi<GetApiV1PublishersByIdListingsByListingIdResponse>>;
  getPublishersByIdMembers(options: Omit<GetApiV1PublishersByIdMembersData, 'url'>): Promise<ResultApi<GetApiV1PublishersByIdMembersResponse>>;
  postPublishers(options?: Omit<PostApiV1PublishersData, 'url'>): Promise<ResultApi<PostApiV1PublishersResponse>>;
  postPublishersByIdMembers(options: Omit<PostApiV1PublishersByIdMembersData, 'url'>): Promise<ResultApi<PostApiV1PublishersByIdMembersResponse>>;
  putPublishersById(options: Omit<PutApiV1PublishersByIdData, 'url'>): Promise<ResultApi<PutApiV1PublishersByIdResponse>>;
}

export class PublisherRepoImpl extends BaseRepo implements PublisherRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  deletePublishersByIdMembersByUserId(options: Omit<DeleteApiV1PublishersByIdMembersByUserIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.publisher.deleteApiV1PublishersByIdMembersByUserId(options),
    );
  }

  getPublishers(options?: Omit<GetApiV1PublishersData, 'url'>): Promise<ResultApi<GetApiV1PublishersResponse>> {
    return this.executeApiCall<GetApiV1PublishersResponse>(
      () => this.api.publisher.getApiV1Publishers(options),
    );
  }

  getPublishersById(options: Omit<GetApiV1PublishersByIdData, 'url'>): Promise<ResultApi<GetApiV1PublishersByIdResponse>> {
    return this.executeApiCall<GetApiV1PublishersByIdResponse>(
      () => this.api.publisher.getApiV1PublishersById(options),
    );
  }

  getPublishersByIdListings(options: Omit<GetApiV1PublishersByIdListingsData, 'url'>): Promise<ResultApi<GetApiV1PublishersByIdListingsResponse>> {
    return this.executeApiCall<GetApiV1PublishersByIdListingsResponse>(
      () => this.api.publisher.getApiV1PublishersByIdListings(options),
    );
  }

  getPublishersByIdListingsByListingId(options: Omit<GetApiV1PublishersByIdListingsByListingIdData, 'url'>): Promise<ResultApi<GetApiV1PublishersByIdListingsByListingIdResponse>> {
    return this.executeApiCall<GetApiV1PublishersByIdListingsByListingIdResponse>(
      () => this.api.publisher.getApiV1PublishersByIdListingsByListingId(options),
    );
  }

  getPublishersByIdMembers(options: Omit<GetApiV1PublishersByIdMembersData, 'url'>): Promise<ResultApi<GetApiV1PublishersByIdMembersResponse>> {
    return this.executeApiCall<GetApiV1PublishersByIdMembersResponse>(
      () => this.api.publisher.getApiV1PublishersByIdMembers(options),
    );
  }

  postPublishers(options?: Omit<PostApiV1PublishersData, 'url'>): Promise<ResultApi<PostApiV1PublishersResponse>> {
    return this.executeApiCall<PostApiV1PublishersResponse>(
      () => this.api.publisher.postApiV1Publishers(options),
    );
  }

  postPublishersByIdMembers(options: Omit<PostApiV1PublishersByIdMembersData, 'url'>): Promise<ResultApi<PostApiV1PublishersByIdMembersResponse>> {
    return this.executeApiCall<PostApiV1PublishersByIdMembersResponse>(
      () => this.api.publisher.postApiV1PublishersByIdMembers(options),
    );
  }

  putPublishersById(options: Omit<PutApiV1PublishersByIdData, 'url'>): Promise<ResultApi<PutApiV1PublishersByIdResponse>> {
    return this.executeApiCall<PutApiV1PublishersByIdResponse>(
      () => this.api.publisher.putApiV1PublishersById(options),
    );
  }
}
