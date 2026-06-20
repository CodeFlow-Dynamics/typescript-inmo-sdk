// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { DeleteApiV1MediaByIdData, GetApiV1MediaByIdData, GetApiV1MediaByIdEventsData, GetApiV1MediaByIdResponse, GetApiV1MediaByIdSignedUrlData, GetApiV1MediaByIdSignedUrlResponse, PostApiV1MediaUploadData, PostApiV1MediaUploadResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface MediaRepo {
  deleteMediaById(options: Omit<DeleteApiV1MediaByIdData, 'url'>): Promise<ResultApi<void>>;
  getMediaById(options: Omit<GetApiV1MediaByIdData, 'url'>): Promise<ResultApi<GetApiV1MediaByIdResponse>>;
  getMediaByIdEvents(options: Omit<GetApiV1MediaByIdEventsData, 'url'>): Promise<ResultApi<void>>;
  getMediaByIdSignedUrl(options: Omit<GetApiV1MediaByIdSignedUrlData, 'url'>): Promise<ResultApi<GetApiV1MediaByIdSignedUrlResponse>>;
  postMediaUpload(options?: Omit<PostApiV1MediaUploadData, 'url'>): Promise<ResultApi<PostApiV1MediaUploadResponse>>;
}

export class MediaRepoImpl extends BaseRepo implements MediaRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  deleteMediaById(options: Omit<DeleteApiV1MediaByIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.media.deleteApiV1MediaById(options),
    );
  }

  getMediaById(options: Omit<GetApiV1MediaByIdData, 'url'>): Promise<ResultApi<GetApiV1MediaByIdResponse>> {
    return this.executeApiCall<GetApiV1MediaByIdResponse>(
      () => this.api.media.getApiV1MediaById(options),
    );
  }

  getMediaByIdEvents(options: Omit<GetApiV1MediaByIdEventsData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.media.getApiV1MediaByIdEvents(options),
    );
  }

  getMediaByIdSignedUrl(options: Omit<GetApiV1MediaByIdSignedUrlData, 'url'>): Promise<ResultApi<GetApiV1MediaByIdSignedUrlResponse>> {
    return this.executeApiCall<GetApiV1MediaByIdSignedUrlResponse>(
      () => this.api.media.getApiV1MediaByIdSignedUrl(options),
    );
  }

  postMediaUpload(options?: Omit<PostApiV1MediaUploadData, 'url'>): Promise<ResultApi<PostApiV1MediaUploadResponse>> {
    return this.executeApiCall<PostApiV1MediaUploadResponse>(
      () => this.api.media.postApiV1MediaUpload(options),
    );
  }
}
