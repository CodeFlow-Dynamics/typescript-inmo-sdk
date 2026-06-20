// GENERATED CODE - DO NOT MODIFY BY HAND
// Run: npm run generate

import type { DeleteApiV1DocumentByIdData, GetApiV1DocumentByIdData, GetApiV1DocumentByIdResponse, GetApiV1DocumentData, GetApiV1DocumentResponse, PostApiV1DocumentBulkData, PostApiV1DocumentBulkResponse, PostApiV1DocumentData, PostApiV1DocumentResponse, PutApiV1DocumentByIdData, PutApiV1DocumentByIdResponse } from '../api/types.gen.js';
import type { InmoApi } from '../api/inmoApi.js';
import { BaseRepo } from '../core/baseRepo.js';
import type { ResultApi } from '../core/result.js';

export interface DocumentRepo {
  deleteDocumentById(options: Omit<DeleteApiV1DocumentByIdData, 'url'>): Promise<ResultApi<void>>;
  getDocument(options?: Omit<GetApiV1DocumentData, 'url'>): Promise<ResultApi<GetApiV1DocumentResponse>>;
  getDocumentById(options: Omit<GetApiV1DocumentByIdData, 'url'>): Promise<ResultApi<GetApiV1DocumentByIdResponse>>;
  postDocument(options?: Omit<PostApiV1DocumentData, 'url'>): Promise<ResultApi<PostApiV1DocumentResponse>>;
  postDocumentBulk(options?: Omit<PostApiV1DocumentBulkData, 'url'>): Promise<ResultApi<PostApiV1DocumentBulkResponse>>;
  putDocumentById(options: Omit<PutApiV1DocumentByIdData, 'url'>): Promise<ResultApi<PutApiV1DocumentByIdResponse>>;
}

export class DocumentRepoImpl extends BaseRepo implements DocumentRepo {
  constructor(private readonly api: InmoApi) {
    super();
  }

  deleteDocumentById(options: Omit<DeleteApiV1DocumentByIdData, 'url'>): Promise<ResultApi<void>> {
    return this.executeApiCall<void>(
      () => this.api.document.deleteApiV1DocumentById(options),
    );
  }

  getDocument(options?: Omit<GetApiV1DocumentData, 'url'>): Promise<ResultApi<GetApiV1DocumentResponse>> {
    return this.executeApiCall<GetApiV1DocumentResponse>(
      () => this.api.document.getApiV1Document(options),
    );
  }

  getDocumentById(options: Omit<GetApiV1DocumentByIdData, 'url'>): Promise<ResultApi<GetApiV1DocumentByIdResponse>> {
    return this.executeApiCall<GetApiV1DocumentByIdResponse>(
      () => this.api.document.getApiV1DocumentById(options),
    );
  }

  postDocument(options?: Omit<PostApiV1DocumentData, 'url'>): Promise<ResultApi<PostApiV1DocumentResponse>> {
    return this.executeApiCall<PostApiV1DocumentResponse>(
      () => this.api.document.postApiV1Document(options),
    );
  }

  postDocumentBulk(options?: Omit<PostApiV1DocumentBulkData, 'url'>): Promise<ResultApi<PostApiV1DocumentBulkResponse>> {
    return this.executeApiCall<PostApiV1DocumentBulkResponse>(
      () => this.api.document.postApiV1DocumentBulk(options),
    );
  }

  putDocumentById(options: Omit<PutApiV1DocumentByIdData, 'url'>): Promise<ResultApi<PutApiV1DocumentByIdResponse>> {
    return this.executeApiCall<PutApiV1DocumentByIdResponse>(
      () => this.api.document.putApiV1DocumentById(options),
    );
  }
}
